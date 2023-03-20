import { ContainerProps } from '@chakra-ui/react'
import styled from 'styled-components'

export const Wrapper = styled.div``

interface TrackProps {
  size?: string
}

export const Container = styled.div<TrackProps>`
  width: ${({ size }) => {
    switch (size) {
      case 'small':
        return '22rem'
      case 'medium':
        return '28rem'
      case 'large':
        return '32rem'
      default:
        return 'max-content'
    }
  }};

  height: calc(100vh - 8.5rem);
  display: flex;
  flex-direction: column;
  padding: 0rem 1.3rem;
  overflow-y: scroll;
  box-sizing: border-box;
  background-color: #f3aeae10;
  padding-bottom: 1rem;

  @media (max-width: 1368px) {
    width: ${({ size }) => {
      switch (size) {
        case 'small':
          return '22rem'
        case 'medium':
          return '26rem'
        case 'large':
          return '30rem'
        default:
          return 'max-content'
      }
    }};
    height: calc(100vh - 7.2rem);
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: #ffb8bf23 !important;
  }
  /* Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 7px;
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
export const HighlightContainer = styled.div<TrackProps>`
  width: 55rem;
  height: calc(100vh - 8.5rem);
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  background-color: #f3aeae10;
  padding: 0rem 1.2rem;
  padding-bottom: 1rem;

  * {
    scrollbar-width: thin;
    scrollbar-color: #ffb8bf23 !important;
  }
  /* Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: #ff478404 !important;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ff478414;
    border-radius: 10px;
    border: none;
  }

  @media (max-width: 1368px) {
    width: 51rem;
    height: calc(100vh - 7.2rem);
  }
`
