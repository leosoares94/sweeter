import React from 'react'
import {
  Drawer as Container,
  DrawerOverlay,
  DrawerContent,
  ChakraProvider
} from '@chakra-ui/react'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Drawer: React.FC<DrawerProps> = ({ children, isOpen, onClose }) => {
  return (
    <ChakraProvider>
      <Container isOpen={isOpen} placement="left" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent
          style={{
            width: '50rem'
          }}
        >
          {children}
        </DrawerContent>
      </Container>
    </ChakraProvider>
  )
}

export default Drawer
