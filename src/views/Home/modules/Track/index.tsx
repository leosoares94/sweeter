import React from 'react'
import TrackFooter from './TrackFooter'
import TrackHeader from './TrackHeader'
import { Container, Wrapper } from './styles'

interface TrackProps {
  tag: string
  children: React.ReactNode
  headerBackground?: string
  footerBackground?: string
  textColor?: string
}

const Track: React.FC<TrackProps> = (props) => {
  return (
    <Wrapper>
      <TrackHeader tag={props.tag} background={props.headerBackground} textColor={props.textColor}/>
      <Container>{props.children}</Container>
      <TrackFooter background={props.headerBackground} textColor={props.textColor}/>
    </Wrapper>
  )
}

export default Track
