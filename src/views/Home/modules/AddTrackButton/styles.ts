import styled from 'styled-components'

export const Wrapper = styled.div``

export const Container = styled.div`
  width: fit-content;
  height: calc(100vh - 9.5rem);
  padding: 0rem 1.3rem;
  overflow-y: scroll;
  box-sizing: border-box;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  @media (max-width: 1368px) {
    width: 26rem;
    height: calc(100vh - 7.2rem);
    padding-bottom: 0.7rem;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: #ffb8bf23 !important;
  }
  /* Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #ff478404 !important;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ff478414;
    border-radius: 10px;
    border: none;
  }
`
