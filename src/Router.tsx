import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { NavProducts } from './pages/CategoryNavProducts'
import { Home } from './pages/Home'
import { ProductNavDescription } from './pages/ProductNavDescription'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<NavProducts />} />
      <Route path="/search" element={<NavProducts />} />
      <Route path="/productDescription" element={<ProductNavDescription />} />
      {/*  <Route path="/shoppingCart" element={<ShoppingCart />} /> */}
    </Routes>
  )
}
