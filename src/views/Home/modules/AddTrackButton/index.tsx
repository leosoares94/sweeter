import { ChakraBaseProvider, Button } from '@chakra-ui/react'
import React from 'react'
import { CgMathPlus } from 'react-icons/cg'
import { Container, Wrapper } from './styles'

const AddTrackButton: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <ChakraBaseProvider>
          <Button
            variant="solid"
            size="md"
            color="#fff"
            padding={'.5rem'}
            sx={{
              bgColor: 'pink.400',
              _hover: {
                bgColor: 'pink.500'
              }
            }}
            borderRadius={50}
          >
            <CgMathPlus size={20} fontWeight={600} />
          </Button>
        </ChakraBaseProvider>
      </Container>
    </Wrapper>
  )
}

export default AddTrackButton
