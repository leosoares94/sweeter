import React from 'react'
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react'

const FontFamilyMenu: React.FC = () => {
  return (
    <Menu placement="end" preventOverflow={true} closeOnBlur strategy="fixed">
      <MenuButton
        border="none"
        as={Button}
        backgroundColor="transparent"
        _hover={{
          backgroundColor: '#00000210',
        }}
        marginRight={-1.2}
        _active={{
          backgroundColor: '#00000210',
        }}
        sx={{
          width: '100%',
        }}
      >
        League Spartan
      </MenuButton>
      <MenuList
        className="menu-list"
        bgColor="#fff"
        boxShadow="0px 3px 10px rgba(43, 0, 0, 0.123)"
        fontSize={16.2}
        zIndex={10000}
      >
        <MenuItem className="menu-item" fontSize={13}>
          League Spartan
        </MenuItem>
        <MenuItem className="menu-item" fontSize={13}>
          Chivo Mono
        </MenuItem>
        <MenuItem className="menu-item" fontSize={13}>
          Unbounded
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default FontFamilyMenu
