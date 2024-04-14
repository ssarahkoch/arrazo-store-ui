import React, { useRef } from 'react'
import {
  ShoppingCartContainer,
  HeaderShoppingCart,
  TitleCart,
  CartProductImg,
  ProductsContainer,
} from './styles'
import { X } from '@phosphor-icons/react'
import { useProducts } from '../../context'
import { useOnClickOutside } from '../../Hooks/useOnClickOutside'
import { numberFormat } from '../../utils/numberFormat'

export function ShoppingCart() {
  const { setCartOpen, listShoppingCartItems } = useProducts()
  const meuRef = useRef<HTMLDivElement>(null)

  const handleClose = () => {
    setCartOpen(false)
  }

  useOnClickOutside(meuRef, handleClose)
  return (
    <ShoppingCartContainer ref={meuRef}>
      <HeaderShoppingCart>
        <TitleCart>Carrinho</TitleCart>
        <X size={30} onClick={() => setCartOpen(false)} />
      </HeaderShoppingCart>
      {listShoppingCartItems?.map((product) => (
        <ProductsContainer key={product.id}>
          <CartProductImg alt="" src={product.image} />
          <div>
            <div>{product.title}</div>
            <div>{product.subtitle}</div>
            <div>{numberFormat(product.price)}</div>
          </div>
        </ProductsContainer>
      ))}
    </ShoppingCartContainer>
  )
}
