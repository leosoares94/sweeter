import { Button, Stack } from '@chakra-ui/react'
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
      <Stack direction="row">
        <Button size="sm" onClick={() => handleClick('small')}>
          Narrow
        </Button>
        <Button size="sm" onClick={() => handleClick('medium')}>
          Normal
        </Button>
        <Button size="sm" onClick={() => handleClick('large')}>
          Wide
        </Button>
        <Button size="sm" onClick={() => handleClick('highlight')}>
          Highlight
        </Button>
      </Stack>
    </Container>
  )
}

export default TrackSizeModal
