import styled from 'styled-components'

export const DropdownContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 30;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 90rem;
  right: 80%;
  transform: translateX(-5%);
  height: 20rem;
  top: 100%;
  left: 46%;
  background: white;
  gap: 1rem;
  padding: 0 0 1rem 3rem;
  border-bottom: 1px solid black;

  .button-container {
    display: grid;
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: repeat(5, auto);
    justify-content: flex-start;
    align-items: start;
    width: 50rem;
    max-width: 100%;
    gap: 1rem;
  }

  .title {
    padding: 0 0 1rem 0;
    font-weight: bold;
  }

  &:hover {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: row;
`
