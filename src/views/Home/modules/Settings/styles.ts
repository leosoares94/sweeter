import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

export const Container = styled.div`
  width: fit-content;
  height: max-content;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  z-index: 10000;
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.span`
  font-family: 'League Spartan' !important;
  font-size: 1.2em;
  font-weight: bolder !important;
  color: #272727cc;
`

export const OptionContainer = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.3rem;
  span {
    font-size: 0.8rem;
  }
`

interface ThemeContainerProps {
  image?: string
}

export const ThemeContainer = styled.div<ThemeContainerProps>`
  width: 7.4rem;
  height: 4rem;
  background-image: url(${({ image }) => image});
  background-size: cover;
  border-radius: 0.2rem;
  image-rendering: auto;
`
