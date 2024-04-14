import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 20;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: opacity 0.1s ease;

  &.active {
    opacity: 1;
  }

  &.headerMouseOn {
    background-color: white;
    /* border: 1px solid; */
    box-shadow: 0 0 5px 1px rgba(128, 128, 128, 0.3);
  }
`

export const TopHeader = styled.div`
  width: 100%;
  height: 1.3rem;
  padding: 0;
  background: black;
`
export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90rem;
  max-width: 90rem;
  max-height: 4rem;
  padding: 1rem 3rem;
  gap: 1rem;
  .buttonsContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`

export const TabArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  .button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    height: 4rem;
  }
  .buttonBrand {
    background-color: transparent;
    cursor: pointer;
    display: inline-flex;
    max-width: fit-content;
    align-self: center;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const ButtonContainer = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    height: 2rem;
  }
`

export const HeaderIcons = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: black;
    font-size: 2.5rem;
    font-weight: bold;
  }
`
export const CartContainer = styled.div`
  display: flex;
  .shoppingBag {
    cursor: pointer;
  }
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background: transparent;

  .searchIcon {
    position: absolute;
    left: 10px;
    pointer-events: none;
    color: #484d50;
  }
`
export const SearchInput = styled.input`
  width: 18rem;
  height: 2rem;
  display: flex;
  background: transparent;
  border: 1px solid #484d50;
  border-radius: 8px;
  padding: 1rem;
  padding-left: 2.5rem;
  font-size: 0.9rem;
`
export const NumberCart = styled.div`
  cursor: pointer;
  color: black;
  font-weight: bold;
  font-size: 0.7rem;
  position: relative;
  padding-bottom: 9px;
  top: 0.4rem;
  left: 1.25rem;
`
