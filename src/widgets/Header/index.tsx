import React from 'react'
import { Container, Logo, Row } from './styles'

import { CgAddR } from 'react-icons/cg'
import { BsFillPlayFill } from 'react-icons/bs'
import { CiSettings } from 'react-icons/ci'

import { ChakraProvider, Button, Badge } from '@chakra-ui/react'

import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ThemeAttributes } from '@/utils/appTheme'

interface HeaderProps {
  onNewTrackClick: () => void
  onPlayButtonClick: () => void
  theme?: ThemeAttributes
}

const Header: React.FC<HeaderProps> = ({
  onNewTrackClick,
  onPlayButtonClick,
  theme,
}) => {
  return (
    <ChakraProvider>
      <Container backgroundColor={theme?.headerBackground}>
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
            Work In Progress
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
                bgColor: 'pink.500',
              },
            }}
            borderRadius={50}
          >
            <span>New Track</span>
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
                bgColor: 'pink.500',
              },
            }}
          >
            <BsFillPlayFill size={16} fontWeight={600} />
            {/* Play */}
          </Button>
          &nbsp;&nbsp;
          <Menu>
            <MenuButton>
              <CiSettings size={28} color={theme?.cardTextColor} />
            </MenuButton>
            <MenuList bgColor={theme?.cardBackground} border="none">
              <MenuItem
                backgroundColor={theme?.cardBackground}
                color={theme?.cardTextColor}
                border="none"
                _hover={{ backgroundColor: '#e12c6b1b' }}
              >
                Settings
              </MenuItem>
              <MenuItem
                backgroundColor={theme?.cardBackground}
                color={theme?.cardTextColor}
                border="none"
                _hover={{ backgroundColor: '#e12c6b1b' }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Row>
      </Container>
    </ChakraProvider>
  )
}

export default Header
