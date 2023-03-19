import { Button } from '@chakra-ui/react'
import { Container } from './styles'
import { useTracks } from '@/store/Tracks'

interface TrackSizeModalProps {
  id: string
}

const TrackSizeModal = (props: TrackSizeModalProps) => {
  const { updateTrackSize } = useTracks((state) => state)

  const handleClick = (size: string) => {
    updateTrackSize(props.id, size)
  }

  return (
    <Container>
      <Button size="sm" onClick={() => handleClick('small')}>
        Small
      </Button>
      <Button size="sm" onClick={() => handleClick('medium')}>
        Medium
      </Button>
      <Button size="sm" onClick={() => handleClick('large')}>
        Large
      </Button>
      <Button size="sm" onClick={() => handleClick('highlight')}>
        Highlight
      </Button>
    </Container>
  )
}

export default TrackSizeModal
