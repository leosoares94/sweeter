import React from 'react'
import { Container, Wrapper, Title } from './styles'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'

interface TrackFooterProps {
  background?: string
  textColor?: string
}

const TrackFooter: React.FC<TrackFooterProps> = ({background, textColor}) => {
  return (
    <Wrapper>
      <Container style={{backgroundColor: background, color: textColor  }}>
        <BsArrowLeftShort size={18} className="refresh-button" />
        <Title>Página 1</Title>
        <BsArrowRightShort size={17} className="options-button" />
      </Container>
    </Wrapper>
  )
}

export default TrackFooter
