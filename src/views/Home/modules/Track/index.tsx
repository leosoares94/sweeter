import React, { useState } from 'react'
import TrackFooter from './TrackFooter'
import TrackHeader from './TrackHeader'
import { Container, HighlightContainer, Wrapper } from './styles'
import Modal from '@/widgets/Modal'
import TrackSizeModal from './TrackSizeModal'
import PinterestGrid from 'rc-pinterest-grid'

interface TrackProps {
  id: string
  tag: string
  children: React.ReactNode
  headerBackground?: string
  footerBackground?: string
  textColor?: string
  size?: string
}

const Track: React.FC<TrackProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <Wrapper>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        backgroundColor={props.headerBackground}
      >
        <TrackSizeModal
          id={props.id}
          textColor={props.textColor}
          size={props.size}
        />
      </Modal>
      <TrackHeader
        tag={props.tag}
        background={props.headerBackground}
        textColor={props.textColor}
        onTrackSizeClick={() => setIsModalOpen(true)}
      />
      {props.size === 'highlight' ? (
        <HighlightContainer size={props.size}>
          <PinterestGrid
            columns={2}
            columnWidth={420}
            gutterWidth={10}
            gutterHeight={0}
          >
            {props.children}
          </PinterestGrid>
        </HighlightContainer>
      ) : (
        <Container size={props.size}>{props.children}</Container>
      )}
      {
        <TrackFooter
          background={props.headerBackground}
          textColor={props.textColor}
        />
      }
    </Wrapper>
  )
}

export default Track
