// Estilos
import styled from 'styled-components'

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 7.39rem 2rem 2rem 0;
`
export const ProductPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`

export const ProductImageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60rem;
  height: 40rem;
  background: ${(props) => props.theme.white};
  border-radius: 0.5rem;
  padding: 2rem 0;
`

export const ProductImage = styled.img`
  width: 27.3rem;
  height: 36.3rem;
  padding-right: 1rem;
`

export const Breadcrumb = styled.nav`
  color: ${(props) => props.theme.title};
  padding-bottom: 1rem;
  font-size: 0.9rem;

  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
  }
`

export const ProductDetailsRow = styled.div`
  display: flex;
  gap: 1rem;
`

export const ProductInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 3rem;
  width: 27rem;
  height: 29rem;

  h3,
  div {
    padding: 1rem 0;
    color: black;
  }
  a {
    font-size: 0.9rem;
    padding-bottom: 1rem;
  }
  div {
    font-size: 1.3rem;
  }
`
export const DescriptionContainer = styled.div`
  padding: 2rem 0;
  span {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: ${(props) => props.theme.text};
    font-size: 0.8rem;
  }
`

export const AddToCartButton = styled.button`
  width: 100%;
  height: 3rem;
  background: black;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  padding: 1rem 1rem;
  border: none;
  text-transform: uppercase;
`
