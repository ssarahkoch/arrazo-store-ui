import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
  useCallback,
} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export interface ProductsData {
  id: string
  category?: string
  title?: string
  subtitle?: string
  image?: string
  description?: string
  price?: number
  quantity?: number
}
interface CategoryName {
  title?: string
  category?: string
}
type ProductsContextType = {
  getCategoriesProducts: ProductsData[]
  setGetCategoriesProducts: Dispatch<SetStateAction<ProductsData[]>>
  getIdToDescription: ProductsData | null
  setGetIdToDescription: Dispatch<SetStateAction<ProductsData | null>>
  getCategoryName: CategoryName[] | string
  setGetCategoryName: Dispatch<SetStateAction<CategoryName[] | string>>
  listShoppingCartItems: ProductsData[]
  setListShoppingCartItems: Dispatch<SetStateAction<ProductsData[]>>
  isTabAreaActive: boolean
  setIsTabAreaActive: Dispatch<SetStateAction<boolean>>
  isCartOpen: boolean
  setCartOpen: Dispatch<SetStateAction<boolean>>
  getBrandName: ProductsData[]
  setGetBrandName: Dispatch<SetStateAction<ProductsData[]>>
  getSearchProducts: (params: string) => Promise<void>
  getAllProducts: () => Promise<void>
  getDistinctBrandProducts: (brandParam: string | undefined) => Promise<void>
  getDistinctCategoryProducts: (categoryParam: string) => Promise<void>
  getDistinctCategoryName: (categoryParam: string) => Promise<void>
  getDistinctBrandName: () => Promise<void>
  getProductById: (idParam: string) => Promise<void>
  cartCountProductsCart: number
  setCartCountProductsCart: Dispatch<SetStateAction<number>>
}

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined,
)

interface ProductsProviderProps {
  children: ReactNode
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [getCategoriesProducts, setGetCategoriesProducts] = useState<
    ProductsData[]
  >([])
  const [listShoppingCartItems, setListShoppingCartItems] = useState<
    ProductsData[]
  >([])
  const [getIdToDescription, setGetIdToDescription] =
    useState<ProductsData | null>(null)
  const [getCategoryName, setGetCategoryName] = useState<
    CategoryName[] | string
  >('TODOS OS PRODUTOS')
  const [isTabAreaActive, setIsTabAreaActive] = useState<boolean>(false)
  const [getBrandName, setGetBrandName] = useState<ProductsData[]>([])
  const [isCartOpen, setCartOpen] = useState(false)
  const [cartCountProductsCart, setCartCountProductsCart] = useState<number>(0)
  const location = useLocation()

  const getAllProducts = async () => {
    try {
      const response = await axios.get('/products')
      setGetCategoryName('TODOS OS PRODUTOS')
      setGetCategoriesProducts(response.data)
    } catch (error) {
      console.error('Erro ao selecionar produto:', error)
    }
  }

  const getSearchProducts = async (params) => {
    try {
      const response = await axios.get(`http://localhost:3333/search/${params}`)

      setGetCategoryName(`Resultados para "${params}"`)
      setGetCategoriesProducts(response.data)
      console.log(response.data)
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
    }
  }

  const getDistinctCategoryProducts = async (categoryParam) => {
    try {
      const response = await axios.get(
        `http://localhost:3333/products/category/${categoryParam}`,
      )
      setGetCategoriesProducts([])
      setGetCategoriesProducts(response.data)
      getDistinctCategoryName(categoryParam)
    } catch (error) {
      console.error('Erro ao selecionar produto:', error)
    }
  }

  const getProductById = async (idParam) => {
    try {
      const response = await axios.get(
        `http://localhost:3333/products/${idParam}`,
      )
      setGetIdToDescription(response.data)
    } catch (error) {
      console.error('Erro ao selecionar produto:', error)
    }
  }

  const getDistinctCategoryName = async (categoryParam) => {
    try {
      const response = await axios.get(
        `http://localhost:3333/products/category/name/${categoryParam}`,
      )
      setGetCategoryName(response.data)
    } catch (error) {
      console.error('Erro ao selecionar produto:', error)
    }
  }

  const getDistinctBrandProducts = async (brandParam) => {
    try {
      const response = await axios.get(
        `http://localhost:3333/products/title/${brandParam}`,
      )
      setGetCategoriesProducts([])
      setGetCategoriesProducts(response.data)
      setGetCategoryName(response.data)
    } catch (error) {
      console.error('Erro ao selecionar produto:', error)
    }
  }

  const getDistinctBrandName = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3333/products/title`)
      if (response.data && Array.isArray(response.data)) {
        setGetBrandName(response.data)
      } else {
        console.error('Resposta inesperada:', response.data)
      }
    } catch (error) {
      console.error('Erro ao selecionar produto:', error)
    }
  }, [])

  useEffect(() => {
    getDistinctBrandName()
  }, [getDistinctBrandName])

  const loadProductsFromURL = async () => {
    const params = new URLSearchParams(location.search)
    const type = params.get('type')
    const name = params.get('name')
    const query = params.get('query')

    if (type === 'all') {
      await getAllProducts()
    } else if (type === 'category') {
      await getDistinctCategoryProducts(name)
    } else if (type === 'brand') {
      await getDistinctBrandProducts(name)
    } else if (query) {
      await getSearchProducts(query)
    }
  }
  useEffect(() => {
    loadProductsFromURL()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <ProductsContext.Provider
      value={{
        cartCountProductsCart,
        setCartCountProductsCart,
        listShoppingCartItems,
        setListShoppingCartItems,
        getCategoriesProducts,
        setGetCategoriesProducts,
        getCategoryName,
        setGetCategoryName,
        getBrandName,
        setGetBrandName,
        isTabAreaActive,
        setIsTabAreaActive,
        isCartOpen,
        setCartOpen,
        getAllProducts,
        getDistinctCategoryProducts,
        getDistinctCategoryName,
        getDistinctBrandProducts,
        getDistinctBrandName,
        getProductById,
        getIdToDescription,
        setGetIdToDescription,
        getSearchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = () => {
  const context = useContext(ProductsContext)
  if (!context) {
    throw new Error('useProducts deve ser usado dentro de um ProductsProvider')
  }
  return context
}
