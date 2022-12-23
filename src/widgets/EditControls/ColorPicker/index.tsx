/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react'
import { ChromePicker } from 'react-color'
import { Menu, MenuButton, MenuList, Button } from '@chakra-ui/react'

interface ColorPickerProps {
  enableAlpha?: boolean
  className?: string
  stateReference: string
  color: string
  onChange: (color: string) => void
  onChangeComplete: (color: string, stateKey: string) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  enableAlpha,
  className,
  stateReference,
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
          borderRadius: '.5rem',
        }}
        _active={{
          backgroundColor: color,
        }}
      ></MenuButton>
      <MenuList
        className="menu-list"
        boxShadow="0px 3px 10px rgba(43, 0, 0, 0.123)"
        fontSize={16.2}
        userSelect="none"
      >
        <ChromePicker
          styles={{ default: { body: { maxWidth: '14rem' } } }}
          className={className}
          color={color}
          onChange={({ rgb }) =>
            onChange(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`)
          }
          onChangeComplete={({ rgb }) =>
            onChangeComplete(
              `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`,
              stateReference
            )
          }
          disableAlpha={!(enableAlpha ?? false)}
        />
      </MenuList>
    </Menu>
  )
}

export default ColorPicker
