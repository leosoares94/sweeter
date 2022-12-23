import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    transform: scale(0.1);
    opacity: 0.8;
  }
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 12rem;
    color: #000000;
    z-index: 0000;
  }
`

export const Column = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
