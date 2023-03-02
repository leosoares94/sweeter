import styled from 'styled-components'

interface WrapperProps {
  background?: string
}


export const Wrapper = styled.div<WrapperProps>`
  width: 100vw;
  display: flex;
  flex-direction: column;

  background: ${({background}) => background}
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: 3rem;
  opacity: 1 !important;
  overflow-x: scroll;
  overflow-y: hidden !important;
  @media (max-width: 1368px) {
    padding-top: 2.5rem;
  }
`
