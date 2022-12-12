import React from 'react'
import { Container, Wrapper, Title } from './styles'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'

const TrackFooter: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <BsArrowLeftShort size={18} className="refresh-button" />
        <Title>Página 1</Title>
        <BsArrowRightShort size={17} className="options-button" />
      </Container>
    </Wrapper>
  )
}

export default TrackFooter
