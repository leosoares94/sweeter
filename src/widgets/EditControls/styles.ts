import styled from 'styled-components'

export const Wrapper = styled.div`
  width: max-content;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  margin-left: 1rem;
  padding-right: 0.4rem;
  left: 0;
  z-index: 10000;
  overflow-y: scroll;

  .tweet-color {
    width: 100% !important;
    box-shadow: 0px 3px 10px rgba(221, 117, 117, 0.151) !important;

    @media (max-width: 1366px) {
      zoom: 1.25;
    }
  }

  @media (max-width: 1366px) {
    span {
      font-size: 1rem !important;
    }
  }
`
export const Row = styled.div`
  width: 100%;

  display: flex;

  @media (max-width: 1366px) {
    .menu-list button {
      font-size: 1rem !important;
    }
  }
`

export const Container = styled.div`
  width: 16rem;

  @media (max-width: 1366px) {
    zoom: 0.8;
  }
`

export const Column = styled.div`
  min-height: rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  .font-family {
    justify-content: center;
    align-items: center;

    cursor: pointer;
    padding-bottom: 0.5rem !important;

    button {
      font-family: 'League Spartan';
      font-size: 0.8rem;

      overflow: hidden;
      color: #00000089;
      border: none !important;
      &:hover {
        background-color: #ffc0cb6a;
      }
    }
  }

  .color-button {
    border-radius: 0.5rem !important;
  }

  .tweet-color {
    width: 100% !important;
    box-shadow: 0px 3px 10px rgba(221, 117, 117, 0.151) !important;

    @media (max-width: 1366px) {
      zoom: 1.25;
    }
  }
`
