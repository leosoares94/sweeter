import React from 'react'
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react'

interface FontFamilyMenuProps {
  currentFont: string
  onFontSelect: (fontName: string) => void
}

const FontFamilyMenu: React.FC<FontFamilyMenuProps> = ({
  currentFont,
  onFontSelect,
}) => {
  const AVAILABLE_FONTS = ['Sans-serif', 'Lobster', 'Satisfy']

  return (
    <Menu
      placement="end"
      preventOverflow={true}
      closeOnBlur
      strategy="fixed"
      size="md"
    >
      <MenuButton
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
          marginTop: '1rem',
          padding: 0,
        }}
        outline="1px solid #e754545c"
      >
        {currentFont}
      </MenuButton>
      <br />
      <MenuList
        className="menu-list"
        bgColor="#fff"
        boxShadow="0px 3px 10px rgba(43, 0, 0, 0.123)"
        fontSize={16.2}
        zIndex={10000}
      >
        {AVAILABLE_FONTS.map((font) => (
          <MenuItem
            className="menu-item"
            fontSize={13}
            onClick={() => onFontSelect(font)}
          >
            {font === 'Sans-serif' ? 'Default' : font}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default FontFamilyMenu
