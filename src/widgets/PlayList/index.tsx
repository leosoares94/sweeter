import React from 'react'

import {
  Avatar,
  Badge,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/react'

import { BsTwitter, BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'

import {
  Container,
  Row,
  Column,
  Title,
  Description,
  Wrapper,
  DateInfo,
} from './styles'

import { usePlaylists } from '../../store/Playlist'

import { colors } from '../../utils/colorUtils'
import { formatDate, formatHour } from '../../utils/dateUtils'

interface mProps {
  onItemSelect?: () => void
  onItemEdit?: () => void
}

const Playlist: React.FC<mProps> = ({ onItemSelect, onItemEdit }) => {
  const { playlists } = usePlaylists((state) => state)

  return (
    <Wrapper>
      <ModalHeader paddingBottom={1}>
        <Title className="modal-title">Your Playlists </Title>
        <Description> - Select some playlist to display or edit.</Description>
      </ModalHeader>
      <ModalBody
        overflowY="scroll"
        height="20rem"
        paddingTop={0}
        className="modal-body"
      >
        {playlists.map((playlist, index) => (
          <Container key={index} containerColor={colors[index % colors.length]}>
            <Column>
              <Row>
                <Column className="avatar-container">
                  <Avatar
                    name={playlist.name}
                    size="sm"
                    borderRadius={4}
                    width="7.5rem"
                    height="4.5rem"
                    src={playlist.backgroundImage}
                  >
                    <span className="item-number">{index + 1}</span>
                  </Avatar>
                </Column>
                <Column style={{ width: '100%' }} onClick={onItemSelect}>
                  <Title>{playlist.name}&nbsp;&nbsp;</Title>
                  <Description>{playlist.description}</Description>
                  <DateInfo>
                    {formatDate(new Date())} - {formatHour(new Date())}{' '}
                    <Badge size="sm" fontSize={8} colorScheme="blackAlpha">
                      <Row>
                        <BsTwitter />
                        &nbsp;{playlist.tweets.length}
                      </Row>
                    </Badge>
                  </DateInfo>
                </Column>
              </Row>
            </Column>
            <Column className="options-button">
              <Menu
                placement="end"
                size="xs"
                preventOverflow={true}
                closeOnBlur
                strategy="fixed"
              >
                <MenuButton
                  border="none"
                  as={Button}
                  backgroundColor="transparent"
                  _hover={{
                    backgroundColor: '#00000210',
                  }}
                  transform="scale(.7)"
                  marginRight={-1.2}
                  _active={{
                    backgroundColor: '#00000210',
                  }}
                >
                  <BsThreeDotsVertical size={17} />
                </MenuButton>
                <MenuList
                  bgColor="#fff"
                  boxShadow="0px 3px 10px rgba(43, 0, 0, 0.123)"
                  fontSize={16.2}
                  zIndex={10000}
                >
                  <MenuItem
                    className="menu-item"
                    fontSize={13}
                    onClick={onItemEdit}
                  >
                    Edit
                  </MenuItem>
                  <MenuItem className="menu-item" fontSize={13}>
                    Delete
                  </MenuItem>
                  <MenuItem className="menu-item" fontSize={13}>
                    Clone
                  </MenuItem>
                </MenuList>
              </Menu>
            </Column>
          </Container>
        ))}
      </ModalBody>
      <ModalFooter alignItems="center" paddingTop={2.5} justifyContent="center">
        <Button
          size="sm"
          className="add-button"
          boxShadow="1px 2px 2px #ffddea"
        >
          <Row>
            <AiOutlinePlus size={14} />
          </Row>{' '}
        </Button>
      </ModalFooter>
    </Wrapper>
  )
}

export default Playlist
