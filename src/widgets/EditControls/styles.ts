import styled from 'styled-components'

export const Container = styled.div`
  width: 14rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin-left: 1rem;
  left: 0;
  z-index: 10000;

  @media (max-width: 1366px) {
    span {
      font-size: 1.2rem !important;
    }
    zoom: 0.7;
  }
`
