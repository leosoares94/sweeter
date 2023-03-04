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
  border-radius: .3rem;
  span {
    font-size: .8rem;
  }
`
