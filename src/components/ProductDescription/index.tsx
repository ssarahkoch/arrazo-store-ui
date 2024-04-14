import React, { useEffect } from 'react'

import {
  PageWrapper,
  ProductPageWrapper,
  ProductImageWrapper,
  ProductImage,
  Breadcrumb,
  ProductDetailsRow,
  ProductInfo,
  AddToCartButton,
  DescriptionContainer,
} from './styles'
import { ProductsData, useProducts } from '../../context'
import { useSearchParams } from 'react-router-dom'
import { numberFormat } from '../../utils/numberFormat'

export function ProductDescription() {
  const {
    getIdToDescription,
    getProductById,
    setListShoppingCartItems,
    listShoppingCartItems,
    setCartCountProductsCart,
    cartCountProductsCart,
  } = useProducts()
  const [searchParams] = useSearchParams()
  const productId = searchParams.get('name')

  const handleAddProductAtCart = (item: ProductsData) => {
    const preventRepetedProduct = listShoppingCartItems.find(
      (product) => product.id === item.id,
    )
    if (!preventRepetedProduct) {
      setListShoppingCartItems([...listShoppingCartItems, item])
      setCartCountProductsCart(cartCountProductsCart + 1)
    } else {
      alert('Produto já adicionado no carrinho')
    }
  }

  useEffect(() => {
    if (productId) {
      getProductById(productId)
    }
  }, [productId, getProductById])

  if (!getIdToDescription) {
    return <div>Carregando...</div>
  }
  return (
    <div>
      <PageWrapper key={getIdToDescription?.id}>
        <ProductPageWrapper>
          <Breadcrumb>
            <a href="/">PRODUTOS </a> |{' '}
            {getIdToDescription?.category?.toUpperCase()}
          </Breadcrumb>
          <ProductDetailsRow>
            <ProductImageWrapper>
              <ProductImage
                src={getIdToDescription?.image}
                alt={getIdToDescription?.title}
              />
              <ProductImage
                src={getIdToDescription?.image}
                alt={getIdToDescription?.title}
              />
            </ProductImageWrapper>

            <ProductInfo>
              <h3>{getIdToDescription?.title}</h3>
              <span>{getIdToDescription?.subtitle}</span>
              <div>{numberFormat(getIdToDescription?.price)}</div>
              <DescriptionContainer>
                <span>Descrição:{getIdToDescription?.description}</span>
              </DescriptionContainer>

              <AddToCartButton
                onClick={() => handleAddProductAtCart(getIdToDescription)}
              >
                Adicionar ao carrinho
              </AddToCartButton>
            </ProductInfo>
          </ProductDetailsRow>
        </ProductPageWrapper>
      </PageWrapper>
    </div>
  )
}
