import React from 'react'
import Header from '../../components/Header'
import { ProductDescription } from '../../components/ProductDescription'

export function ProductNavDescription() {
  const headerClassName = 'headerMouseOn'

  return (
    <div>
      <Header headerClassName={headerClassName} />
      <ProductDescription />
    </div>
  )
}
