import styled from 'styled-components'

export const Overlay = styled.div`
  position: absolute; /* Posicionamento fixo para cobrir toda a tela */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo semi-transparente */
  z-index: 10; /* Garante que o overlay fique acima de outros elementos */
  display: flex;
  justify-content: center; /* Centraliza horizontalmente o conteúdo do overlay */
  align-items: center;
`
