import styled from 'styled-components'
import { motion } from 'framer-motion'
type BubbleContainerProps = {
  height?: string
  opacity: number
  containerOpacity: number
}

export const Container = styled(motion.div)<BubbleContainerProps>`
  width: 59rem;
  height: fit-content;
  display: flex;
  background-color: #fff;
  border-radius: 1.2rem;
  transform: scale(1.2);
  overflow: hidden;
  box-shadow: 0px 3px 10px rgba(221, 117, 117, 0.151);
  opacity: ${({ containerOpacity }) => containerOpacity};
  transition: opacity 0.3s;
  z-index: 200;

  .username {
    padding-left: 0.85rem;
  }

  .bubble-tweet {
    opacity: ${({ opacity }) => opacity};
    padding-top: 1rem;
    padding-bottom: 5.4rem;
    transition: opacity ease 2s;
  }

  .engagement-container {
    justify-content: space-between;
    background-color: #fff;
    box-sizing: border-box;
    padding-right: 70%;
    position: absolute;
    bottom: 0;
    padding-bottom: 1.7rem;
    z-index: 10000;

    span {
      font-size: 0.8rem;
    }
  }

  .first-column {
    display: flex;
    padding: 2rem;
    box-sizing: border-box;
  }

  @media (max-width: 1366px) {
    zoom: 0.9;
  }

  @media (min-width: 1920px) {
    zoom: 1.2;
  }
`

export const Row = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Column = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`

export const Username = styled.span`
  font-size: 0.9rem;
  color: #000000aa;
`

export const Name = styled.span`
  font-weight: 600;
`

export const Text = styled.span`
  font-size: 1.2rem;
  white-space: pre-line;
  a {
    color: #d45994;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const Time = styled.span`
  font-size: 1rem;
  color: #000000aa;

  padding: 1rem 0rem;
  position: inherit;
`

export const Engagement = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #000000ab;
`

export const Source = styled.span`
  font-size: 1rem;
  padding-top: 1rem;
  color: #d53f8c;
  display: inline;
`

export const MediaContainer = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  video {
    border-radius: 5px;
  }

  .has-more-indicator {
    color: #fff;
    font-size: 0.9rem;
  }
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  z-index: 15000;
`
