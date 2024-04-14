import React, { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  HeaderIcons,
  HeaderContainer,
  TopHeader,
  CategoryContainer,
  TabArea,
  ButtonContainer,
  CartContainer,
  SearchInput,
  SearchInputContainer,
  NumberCart,
} from './styles'
import { useProducts } from '../../context'
import { DropdownContentComponent } from '../DropdownContent'
import { MagnifyingGlass, Bag } from '@phosphor-icons/react'
import { ShoppingCart } from '../ShoppingCart'

interface HeaderProps {
  headerClassName: string
  handleMouseOver?: () => void
  handleMouseOut?: () => void
}

export default function Header({
  headerClassName,
  handleMouseOver,
  handleMouseOut,
}: HeaderProps) {
  const {
    getBrandName,
    isTabAreaActive,
    setIsTabAreaActive,
    getAllProducts,
    getDistinctCategoryProducts,
    getSearchProducts,
    setCartOpen,
    isCartOpen,
    cartCountProductsCart,
  } = useProducts()

  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSubmitSearch = (event: React.FormEvent) => {
    event.preventDefault() // Evita o recarregamento da página
    getSearchProducts(query)

    navigate(`/search?query=${query}`)
    setQuery('')
  }

  const handleOpenAllNavProducts = () => {
    getAllProducts()
    setIsTabAreaActive(false)
    navigate('/category?type=all')
  }

  const handleOpenCategoryNavProducts = (category: string) => {
    getDistinctCategoryProducts(category)
    navigate(`/category?type=category&name=${category}`)
  }
  const handleOpenCart = () => {
    setCartOpen(true)
  }

  return (
    <HeaderContainer
      className={headerClassName}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <TopHeader />
      <HeaderIcons>
        <div>
          <Link to="/">AЯRAZO</Link>
        </div>
        <CartContainer onClick={() => handleOpenCart()}>
          <NumberCart>{cartCountProductsCart}</NumberCart>
          <Bag size={32} className="shoppingBag" />
        </CartContainer>
      </HeaderIcons>

      {isCartOpen && (
        <div>
          <ShoppingCart />
        </div>
      )}

      <CategoryContainer>
        <div className="buttonsContainer">
          <TabArea
            onMouseEnter={() => setIsTabAreaActive(true)}
            onMouseLeave={() => setIsTabAreaActive(false)}
          >
            <button className="button" onClick={handleOpenAllNavProducts}>
              MARCAS
            </button>
            {isTabAreaActive && (
              <DropdownContentComponent brands={getBrandName} />
            )}
          </TabArea>
          <ButtonContainer>
            <button
              className="button"
              onClick={() => handleOpenCategoryNavProducts('bolsas')}
            >
              BOLSAS
            </button>
            <button
              className="button"
              onClick={() => handleOpenCategoryNavProducts('acessorios')}
            >
              ACESSÓRIOS
            </button>
            <button
              className="button"
              onClick={() => handleOpenCategoryNavProducts('joias')}
            >
              JOIAS
            </button>
          </ButtonContainer>
        </div>
        <SearchInputContainer as="form" onSubmit={handleSubmitSearch}>
          <MagnifyingGlass size={24} className="searchIcon" />
          <SearchInput
            type="text"
            placeholder="Buscar..."
            value={query}
            onChange={handleSearchInputChange}
          />
        </SearchInputContainer>
      </CategoryContainer>
    </HeaderContainer>
  )
}
