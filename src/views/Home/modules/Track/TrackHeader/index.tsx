import React from 'react'

import { useMediaQuery } from 'react-responsive'

import { MdOutlineRefresh } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'

import { Container, Wrapper, Title } from './styles'

import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'

import Badge from '@widgets/Badge'

interface TrackHeaderProps {
  tag: string
  dataTags?: string[]
  booleanTags?: string[]
  contentTags?: string[]
}

const TrackHeader: React.FC<TrackHeaderProps> = ({ tag }) => {
  const isHd = useMediaQuery({
    query: '(max-width: 1368px)'
  })

  return (
    <Wrapper>
      <Container>
        <MdOutlineRefresh size={isHd ? 14 : 18} className="refresh-button" />
        <Title>
          <Badge className="badge" type="mention" value={tag} />
          {/* <Badge type="hashtag" value="CopaDoMundo" />
          &nbsp;+ 2 */}
        </Title>

        <Menu placement="bottom">
          <MenuButton
            border="none"
            as={Button}
            rightIcon={<BsThreeDotsVertical size={isHd ? 14 : 18} />}
          ></MenuButton>
          <MenuList
            bgColor="#fff"
            boxShadow="0px 3px 10px rgba(43, 0, 0, 0.123)"
            fontSize={isHd ? 13 : 16}
            zIndex={10000}
          >
            <MenuItem className="menu-item">Edit query</MenuItem>
            <MenuItem className="menu-item">Add to playlist</MenuItem>
            <MenuItem className="menu-item">Remove</MenuItem>
          </MenuList>
        </Menu>
      </Container>
    </Wrapper>
  )
}

export default TrackHeader
