import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: -10rem !important;
`

export const Container = styled.div`
  width: fit-content;
  height: max-content;
  background-color: #fff;
  padding: 3rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  z-index: 10000;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-right: 0.2rem;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  span {
    font-size: 0.5rem;
  }

  .select {
    width: 13.7rem;
    font-size: 0.7rem;
  }

  input {
    height: 0.5rem;
  }
`

export const Column = styled.div`
  width: 100%;
  max-height: 20rem;
  display: flex;
  flex-direction: column;
  padding-right: 0.4rem;
  overflow-y: scroll;
  box-sizing: border-box;

  .filters-column {
    height: 20rem;
  }

  ::-webkit-scrollbar {
    width: 3px;
    height: 5px;
  }
`

interface IconContainerProps {
  color: string
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  padding: 0.1rem;
  border-radius: 0.3rem;
  color: #fff;
`

export const Title = styled.span`
  font-family: 'League Spartan' !important;
  font-size: 0.95em;
  font-weight: bolder !important;
  color: #272727cc;
`
