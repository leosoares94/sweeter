import { Button, Stack } from '@chakra-ui/react'
import { Container } from './styles'
import { useTracks } from '@/store/Tracks'
import { TbViewportNarrow } from 'react-icons/tb'
import { BsColumnsGap, BsSquare } from 'react-icons/bs'
import { HiArrowsPointingOut } from 'react-icons/hi2'

interface TrackSizeModalProps {
  id: string
}

const TrackSizeModal = (props: TrackSizeModalProps) => {
  const { updateTrackSize } = useTracks((state) => state)

  const handleClick = (size: string) => {
    updateTrackSize(props.id, size)
  }

  return (
    <Container style={{ color: '#fff', fontSize: '.7rem' }}>
      <Stack direction="row">
        <Stack alignItems="center">
          <Button size="sm" onClick={() => handleClick('small')}>
            <TbViewportNarrow />
          </Button>
          <span>Narrow</span>
        </Stack>
        <Stack alignItems="center">
          <Button size="sm" onClick={() => handleClick('medium')}>
            <BsSquare />
          </Button>
          <span>Normal</span>
        </Stack>
        <Stack alignItems="center">
          <Button size="sm" onClick={() => handleClick('large')}>
            <HiArrowsPointingOut />
          </Button>
          <span>Wide</span>
        </Stack>
        <Stack alignItems="center">
          <Button size="sm" onClick={() => handleClick('highlight')}>
            <BsColumnsGap />
          </Button>
          <span>Highlight</span>
        </Stack>
      </Stack>
    </Container>
  )
}

export default TrackSizeModal
