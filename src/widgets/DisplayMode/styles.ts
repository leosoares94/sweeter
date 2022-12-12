import styled, { keyframes } from 'styled-components'

interface ContainerProps {
  background: string
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: ${({ background }) => background};
  z-index: 10000000;
`

export const Logo = styled.div`
  width: max-content;
  height: max-content;
  font-family: "Pacifico", cursive;
  font-size: 1.5rem;
  color: #ffffffbe;
  position: absolute;
  bottom: 0;
  padding-bottom: 1.7rem;
  text-shadow: 1px 1px 1px #0000003e;
`

export const Website = styled.div`
  color: #ffffffbe;
  font-size: .9rem;
  position: absolute;
  bottom: 0;
  padding-bottom: .5rem;
  text-shadow: 1px 1px 1px #0000003e;
`

const progress = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`

interface TimeProps {
  duration?: number
}

export const Time = styled.div<TimeProps>`
  width: 100%;
  height: 0.2rem;
  background-color: #ffffffc6;
  position: absolute;
  top: 0;
  left:0 ;
  animation: ${progress} ${({ duration }) => `${duration!}s`} linear;
`
