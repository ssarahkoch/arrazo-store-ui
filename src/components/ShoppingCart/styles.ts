import styled from 'styled-components'

export const ShoppingCartContainer = styled.div`
  width: 28rem;
  height: 750vh;
  top: 0;
  right: 0;
  position: fixed;
  z-index: 30;
  background: white;
  border-left: 1px solid black;
  padding: 1rem;
`

export const HeaderShoppingCart = styled.div`
  display: flex;
  justify-content: space-between;
`
export const TitleCart = styled.a`
  padding-top: 0.5rem;
  font-size: 1.8rem;
`
export const ProductsContainer = styled.div`
  display: flex;
`
export const CartProductImg = styled.img`
  width: 4rem;
`
