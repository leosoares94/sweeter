import styled from 'styled-components'

interface ContainerProps {
  backgroundColor?: string
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({backgroundColor}) => backgroundColor};
  position: fixed;
  box-sizing: border-box;
  padding: 0rem 2rem;
  box-shadow: 0px 3px 4px rgba(255, 137, 137, 0.108);
  font-family: 'League Spartan' !important;
  z-index: 10;

  .add-button {
    background-color: #ff4784 !important;
    border: none;
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 2rem;

    &:hover {
      background-color: #c23262 !important;
    }

    &:active {
      background-color: #ff4784 !important;
    }
  }
`

export const Row = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button span:nth-child(2) {
    padding-top: 0.1rem !important ;
    font-size: 0.93rem;
  }

  .menu-button {
    border: none;

    &:active {
      border: none;
    }
    &:hover {
      border: none;
    }
    &:focus {
      border: none;
      outline: none !important;
    }
  }
`

export const Logo = styled.div`
  width: max-content;
  height: max-content;
  font-family: 'Pacifico', cursive;
  font-size: 1.5rem;
  color: #ed64a6;
`
