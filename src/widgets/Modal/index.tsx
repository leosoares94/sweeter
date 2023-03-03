import React from 'react'

import {
  ChakraProvider,
  Modal as Container,
  ModalContent,
  ModalOverlay
} from '@chakra-ui/react'

import { useMediaQuery } from 'react-responsive'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  backgroundColor?: string
  textColor?: string
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children, backgroundColor, textColor }) => {
  const isHd = useMediaQuery({
    query: '(max-width: 1368px)'
  })

  return (
    <ChakraProvider>
      <Container isOpen={open} onClose={onClose} isCentered size="lg">
        <ModalOverlay overflowY="hidden" />
        <ModalContent
          maxHeight="36rem"
          minHeight="fit-content"
          sx={{
            position: 'fixed',
            zoom: isHd ? '1' : '1.2',
            backgroundColor: backgroundColor,
            color: textColor
          }}
        >
          {children}
        </ModalContent>
      </Container>
    </ChakraProvider>
  )
}

export default Modal
