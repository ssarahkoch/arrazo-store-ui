import React from 'react'

import {
  CardContainer,
  ProductThumbnail,
  ProductGrid,
  ProductCard,
  PageLayout,
  ProductName,
  PriceTag,
  PageTitle,
  ProductSubtitle,
} from './styles'
import { useProducts } from '../../context'
import { numberFormat } from '../../utils/numberFormat'
import { useNavigate } from 'react-router-dom'

export default function ProductList() {
  const { getCategoriesProducts, getCategoryName, getProductById } =
    useProducts()
  const navigate = useNavigate()

  function handleOpenProductDescription(
    id: string,
    product: string | undefined,
  ) {
    getProductById(id)
    navigate(`/productDescription?type=${product}&name=${id}`)
  }

  return (
    <PageLayout>
      <PageTitle>
        {typeof getCategoryName !== 'string'
          ? getCategoryName.map((param) =>
              param.title
                ? param.title.toUpperCase()
                : param.category?.toUpperCase(),
            )
          : getCategoryName}
      </PageTitle>
      <ProductGrid>
        {getCategoriesProducts?.map((product) => (
          <CardContainer
            key={product.id}
            onClick={() =>
              handleOpenProductDescription(product.id, product.title)
            }
          >
            <ProductCard>
              <ProductThumbnail src={product.image} alt={product.title} />

              <ProductName>{product.title}</ProductName>
              <ProductSubtitle>{product.subtitle}</ProductSubtitle>
              <PriceTag>
                <p>{numberFormat(product.price)}</p>
              </PriceTag>
            </ProductCard>
          </CardContainer>
        ))}
      </ProductGrid>
    </PageLayout>
  )
}
