import React from 'react'
import { Container, Logo, Row } from './styles'

import { CgAddR } from 'react-icons/cg'
import { BsFillPlayFill } from 'react-icons/bs'
import { CiSettings } from 'react-icons/ci'

import { ChakraProvider, Button, Badge } from '@chakra-ui/react'

interface HeaderProps {
  onNewTrackClick: () => void
  onPlayButtonClick: () => void
}

const Header: React.FC<HeaderProps> = ({
  onNewTrackClick,
  onPlayButtonClick
}) => {
  return (
    <ChakraProvider>
      <Container>
        <Row>
          <Logo>
            <span>Sweeter</span>
          </Logo>
          &nbsp;&nbsp;
          <Badge
            size="xs"
            fontSize={10}
            colorScheme="green"
            marginTop={1}
            paddingTop={1}
          >
            Em desenvolvimento
          </Badge>
          &nbsp;&nbsp;
        </Row>
        <Row>
          <Button
            variant="solid"
            leftIcon={<CgAddR size={16} fontWeight={600} />}
            size="sm"
            color="#fff"
            onClick={onNewTrackClick}
            sx={{
              bgColor: 'pink.400',
              _hover: {
                bgColor: 'pink.500'
              }
            }}
            borderRadius={50}
          >
            <span>New</span>
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="solid"
            // leftIcon={<BsFillPlayFill size={16} fontWeight={600} />}
            size="sm"
            padding={0}
            borderRadius={50}
            color="#fff"
            onClick={onPlayButtonClick}
            sx={{
              bgColor: 'pink.400',
              _hover: {
                bgColor: 'pink.500'
              }
            }}
          >
            <BsFillPlayFill size={16} fontWeight={600} />
            {/* Play */}
          </Button>
          &nbsp;&nbsp;
          <CiSettings size={28} color="#0000008f" />
        </Row>
      </Container>
    </ChakraProvider>
  )
}

export default Header
