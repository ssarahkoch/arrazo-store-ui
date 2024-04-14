import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Router } from './Router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ProductsProvider } from './context'

const queryClient = new QueryClient()

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ProductsProvider>
            <Router />
          </ProductsProvider>
        </BrowserRouter>
        <GlobalStyle />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
