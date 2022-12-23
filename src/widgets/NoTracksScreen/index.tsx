import React from 'react'

import { Column, Container, Row } from './styles'

import Bird from '../../assets/bird.svg'

const NoTracksScreen: React.FC = () => {
  return (
    <Container>
      <Column>
        <img src={Bird} alt="" />
        <span> Que tal adicionar algumas Tracks?</span>
      </Column>
    </Container>
  )
}

export default NoTracksScreen
