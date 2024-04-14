import React from 'react'
import ProductList from '../../components/ProductList'
import Header from '../../components/Header'

export function NavProducts() {
  const headerClassName = 'headerMouseOn'

  return (
    <div>
      <Header headerClassName={headerClassName} />

      <ProductList />
    </div>
  )
}
