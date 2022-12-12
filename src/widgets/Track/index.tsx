import React from 'react'
import TrackFooter from '../TrackFooter'
import TrackHeader from '../TrackHeader'
import { Container, Wrapper } from './styles'

interface TrackProps {
  tag: string
  children: React.ReactNode
}

const Track: React.FC<TrackProps> = (props) => {
  return (
    <Wrapper>
      <TrackHeader tag={props.tag} />
      <Container>{props.children}</Container>
      <TrackFooter />
    </Wrapper>
  )
}

export default Track
