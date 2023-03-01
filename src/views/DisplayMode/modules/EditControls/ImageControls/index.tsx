/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-new */
import React from 'react'
import Compressor from 'compressorjs'
import { FileUploader } from 'react-drag-drop-files'

import {
  Button,
  ModalBody,
  Stack,
  CloseButton,
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react'

import Modal from '@widgets/Modal'
import { MdOpacity } from 'react-icons/md'

interface ImageControlsProps {
  playlist: any
  onChange: (image: string | ArrayBuffer | null) => void
  onImageOpacityChange?: (opacity: number) => void
}

const ImageControls: React.FC<ImageControlsProps> = ({
  playlist,
  onChange,
  onImageOpacityChange,
}) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)

  const FILE_TYPES = ['JPG', 'PNG', 'GIF']

  const handleChange = (file: React.SetStateAction<null>): void => {
    new Compressor(file as unknown as File | Blob, {
      quality: 0.7,
      success(result) {
        const reader = new FileReader()
        reader.readAsDataURL(result as unknown as Blob)
        reader.onload = () => {
          onChange(reader.result)
        }
        setModalOpen(false)
      },
      error(err) {
        console.log(err.message)
      },
    })
  }

  const handleDeleteImage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation()
    onChange(null)
  }

  return (
    <>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalBody padding={10}>
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={FILE_TYPES}
          />
        </ModalBody>
      </Modal>
      <Stack paddingBottom={3}>
        <Button
          width="100%"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          height={playlist.backgroundImage ? '5rem' : '2rem'}
          fontSize={12}
          size="sm"
          backgroundColor="#fff"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          backgroundImage={
            Boolean(playlist.backgroundImage) && playlist.backgroundImage
          }
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          border="dashed .1rem #ed64a6"
          color="#0000009a"
          _hover={{ backgroundColor: '#ffecef' }}
          onClick={() => setModalOpen(true)}
        >
          {playlist.backgroundImage && (
            <CloseButton
              zIndex={5000}
              color="#fff"
              border="dashed .1rem #ed64a6"
              onClick={(e) => handleDeleteImage(e)}
            />
          )}
          {playlist.backgroundImage ? '' : 'Sem imagem'}
        </Button>
        <Slider
          aria-label="slider-ex-2"
          defaultValue={100}
          isDisabled={!playlist.backgroundImage}
          onChange={onImageOpacityChange}
        >
          <SliderTrack bg="pink">
            <SliderFilledTrack bg="pink" />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color="#ed64a6" as={MdOpacity} />
          </SliderThumb>
        </Slider>
      </Stack>
    </>
  )
}

export default ImageControls
