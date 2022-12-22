import React from 'react'
import { ChromePicker } from 'react-color'
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react'

interface ColorPickerProps {
  enableAlpha?: boolean
  className?: string
  color: string
  onChange: (color: string) => void
  onChangeComplete: (color: string) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  enableAlpha,
  className,
  onChange,
  onChangeComplete,
}) => {
  return (
    <Menu placement="end" preventOverflow={true} closeOnBlur strategy="fixed">
      <MenuButton
        border="none"
        as={Button}
        backgroundColor={color}
        marginRight={-1.2}
        sx={{
          height: '1.5rem',
          width: '100%',
        }}
        _active={{
          backgroundColor: color,
        }}
      ></MenuButton>
      <MenuList
        className="menu-list"
        boxShadow="0px 3px 10px rgba(43, 0, 0, 0.123)"
        fontSize={16.2}
      >
        <ChromePicker
          styles={{ default: { body: { maxWidth: '14rem' } } }}
          className={className}
          color={color}
          onChange={({ rgb }) =>
            onChange(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`)
          }
          onChangeComplete={({ rgb }) =>
            onChangeComplete(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`)
          }
          disableAlpha={!enableAlpha}
        />
      </MenuList>
    </Menu>
  )
}

export default ColorPicker
