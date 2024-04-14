import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DropdownContainer } from './styles'
import { useProducts } from '../../context'

export function DropdownContentComponent({ brands }) {
  const { setIsTabAreaActive, getAllProducts, getDistinctBrandProducts } =
    useProducts()
  const navigate = useNavigate()

  const handleOpenAllNavProducts = () => {
    getAllProducts()
    setIsTabAreaActive(false)
    navigate('/category?type=all')
  }

  const handleOpenBrandNavProducts = (brand) => {
    getDistinctBrandProducts(brand)
    setIsTabAreaActive(false)
    navigate(`/category?type=brand&name=${brand}`)
  }

  return (
    <DropdownContainer>
      <span className="title">TODAS AS MARCAS</span>
      <div className="button-container">
        {brands.map((brand) => (
          <a
            key={brand.title}
            onClick={() => handleOpenBrandNavProducts(brand.title)}
            className="buttonBrand"
          >
            {brand.title}
          </a>
        ))}
        <a
          className="buttonBrand"
          style={{ textDecoration: 'underline' }}
          onClick={handleOpenAllNavProducts}
        >
          Ver Tudo
        </a>
      </div>
    </DropdownContainer>
  )
}
