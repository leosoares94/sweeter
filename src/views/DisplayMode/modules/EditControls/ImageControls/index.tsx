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
  Stack
} from '@chakra-ui/react'

import Modal from '@widgets/Modal'

interface ImageControlsProps {
  playlist: any
  onChange: (image: string | ArrayBuffer | null) => void
}

const ImageControls: React.FC<ImageControlsProps> = ({ onChange, playlist }) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)

  const FILE_TYPES = ['JPG', 'PNG', 'GIF']

  const handleChange = (file: React.SetStateAction<null>): void => {
    new Compressor(file as unknown as File | Blob, {
      quality: 0.7,
      success (result) {
        const reader = new FileReader()
        reader.readAsDataURL(result as unknown as Blob)
        reader.onload = () => {
          onChange(reader.result)
        }
      },
      error (err) {
        console.log(err.message)
      }
    })
  }

  return (
    <>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalBody padding={10}>
          <FileUploader handleChange={handleChange} name="file" types={FILE_TYPES} />
        </ModalBody>
      </Modal>
      <Stack paddingBottom={3}>
        <Button
          width="100%"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          height={(playlist.backgroundImage) ? '5rem' : '2rem'}
          fontSize={12}
          size="sm"
          backgroundColor="#fff"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          backgroundImage={(Boolean(playlist.backgroundImage)) && playlist.backgroundImage}
          backgroundPosition="center"
          backgroundRepeat='no-repeat'
          backgroundSize="cover"
          border="dashed .1rem #ed64a6"
          color="#0000009a"
          _hover={{ backgroundColor: '#ffecef' }}
          onClick={() => setModalOpen(true)}
        >
          {playlist.backgroundImage ? 'Mudar imagem' : 'Sem imagem'}
        </Button>
      </Stack>
    </>
  )
}

export default ImageControls
