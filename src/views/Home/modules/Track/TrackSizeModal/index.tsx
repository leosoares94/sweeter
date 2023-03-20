import { Button, Stack } from '@chakra-ui/react'
import { Container } from './styles'
import { useTracks } from '@/store/Tracks'
import { TbViewportNarrow } from 'react-icons/tb'
import { BsColumnsGap, BsSquare } from 'react-icons/bs'
import { HiArrowsPointingOut } from 'react-icons/hi2'

interface TrackSizeModalProps {
  id: string
  textColor: string | undefined
  size: string | undefined
}

const TrackSizeModal = (props: TrackSizeModalProps) => {
  const { updateTrackSize } = useTracks((state) => state)

  const handleClick = (size: string) => {
    updateTrackSize(props.id, size)
  }

  return (
    <Container style={{ color: props.textColor, fontSize: '.7rem' }}>
      <Stack direction="row" gap={5}>
        <Stack alignItems="center">
          <Button
            size="sm"
            onClick={() => handleClick('small')}
            variant="outline"
            style={{
              border: `1px solid ${
                props.size === 'small' ? '#ED64A6' : props.textColor
              }`,
            }}
          >
            <TbViewportNarrow
              color={props.size === 'small' ? '#ED64A6' : props.textColor}
            />
          </Button>
          <span
            style={{
              color: props.size === 'small' ? '#ED64A6' : props.textColor,
            }}
          >
            Narrow
          </span>
        </Stack>
        <Stack alignItems="center">
          <Button
            size="sm"
            onClick={() => handleClick('medium')}
            style={{
              border: `1px solid ${
                props.size === 'medium' ? '#ED64A6' : props.textColor
              }`,
            }}
          >
            <BsSquare
              color={props.size === 'medium' ? '#ED64A6' : props.textColor}
            />
          </Button>
          <span
            style={{
              color: props.size === 'medium' ? '#ED64A6' : props.textColor,
            }}
          >
            Normal
          </span>
        </Stack>
        <Stack alignItems="center">
          <Button
            size="sm"
            onClick={() => handleClick('large')}
            style={{
              border: `1px solid ${
                props.size === 'large' ? '#ED64A6' : props.textColor
              }`,
            }}
          >
            <HiArrowsPointingOut
              color={props.size === 'large' ? '#ED64A6' : props.textColor}
            />
          </Button>
          <span
            style={{
              color: props.size === 'large' ? '#ED64A6' : props.textColor,
            }}
          >
            Wide
          </span>
        </Stack>
        <Stack alignItems="center">
          <Button
            size="sm"
            onClick={() => handleClick('highlight')}
            style={{
              border: `1px solid ${
                props.size === 'highlight' ? '#ED64A6' : props.textColor
              }`,
            }}
          >
            <BsColumnsGap
              color={props.size === 'highlight' ? '#ED64A6' : props.textColor}
            />
          </Button>
          <span
            style={{
              color: props.size === 'highlight' ? '#ED64A6' : props.textColor,
            }}
          >
            Highlight
          </span>
        </Stack>
      </Stack>
    </Container>
  )
}

export default TrackSizeModal
