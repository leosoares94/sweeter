/* eslint-disable @typescript-eslint/restrict-template-expressions */
import styled, { keyframes } from 'styled-components'

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  animation: ${fade} 0.2s ease;
  z-index: 11;
`
interface BackgroundImageProps {
  backgroundImage: string | undefined
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-size: cover;
  ${({ backgroundImage }) =>
    Boolean(backgroundImage) && `background-image: url(${backgroundImage});`}
opacity: .7;
    z-index:1 ;
`

interface BackgroundColorProps {
  backgroundColor: string
}

export const BackgroundColor = styled.div<BackgroundColorProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-size: cover;
  background-color: ${({ backgroundColor }) => backgroundColor};
`

export const Logo = styled.div`
  width: max-content;
  height: max-content;
  font-family: 'Pacifico', cursive;
  font-size: 1.5rem;
  color: #ffffffbe;
  position: absolute;
  bottom: 0;
  padding-bottom: 1.7rem;
  text-shadow: 1px 1px 1px #0000003e;
  z-index:2;
`

export const Website = styled.div`
  color: #ffffffbe;
  font-size: 0.9rem;
  position: absolute;
  bottom: 0;
  padding-bottom: 0.5rem;
  text-shadow: 1px 1px 1px #0000003e;
  z-index:2 ;
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
  left: 0;
  animation: ${progress} ${({ duration }) => `${duration}s`} linear;
  z-index: 2;
`

// export const EditControls = styled.div`
//   width: 14rem;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: fixed;
//   margin-left: 1rem;
//   left: 0;
//   z-index: 10000;

//   @media (max-width: 1366px) {
//     span {
//       font-size: 1.2rem !important;
//     }
//     zoom: 0.7;
//   }
// `
