import styled from 'styled-components'

export const PageLayout = styled.main`
  padding: 8rem 3rem 3rem 3rem;
`
export const PageTitle = styled.div`
  padding: 2rem 0 2rem 0;
  max-width: 100%;
  font-size: 1.5rem;
`

export const ProductGrid = styled.section`
  display: grid;
  max-width: 100%;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 18.75rem));
  gap: 3rem;
`
export const CardContainer = styled.div`
  display: flex;
  width: 18.75rem;
  height: 29rem;
  margin-bottom: 3rem;
  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    font-weight: inherit;
  }
`

export const ProductCard = styled.article`
  cursor: pointer;
  display: flex;
  width: 22rem;
  height: 36.2rem;
  max-height: 100%;
  border-radius: 0.4rem;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  background: ${(props) => props.theme.white};
  padding: 0.5rem;
  padding-bottom: 2rem;
`

export const ProductName = styled.h2`
  font-size: 1rem;
  max-width: 100%;
`

export const ProductThumbnail = styled.img`
  width: 18.75rem;
  min-width: 100%;
  max-height: 100%;
  height: 25rem;
  padding-bottom: 0.5rem;
`

export const PriceTag = styled.div`
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  width: 100%;
`
export const ProductSubtitle = styled.a`
  padding: 1rem 0 0.5rem;
`

export const CenteredLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  max-height: 100%;
`
