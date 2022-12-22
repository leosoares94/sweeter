import React, { useState } from 'react'

import { MdOutlineTextFormat, MdShortText } from 'react-icons/md'
import { BsCardText, BsLink } from 'react-icons/bs'
import Accordion from '../../Accordion'
import { Row, Column } from '../styles'

import { ChromePicker } from 'react-color'
import FontFamilyMenu from './FontFamilyMenu'
import ColorPicker from '../ColorPicker'
import { usePlaylists } from '../../../store/Playlist'

interface TextControlsProps {
  color: string
  playlist_id: string
}

const TextControls: React.FC<TextControlsProps> = ({ color, playlist_id }) => {
  const { updateItem } = usePlaylists((state) => state)

  const [pickerColor, setPickerColor] = useState('')
  const [pickerActive, setPickerActive] = useState(false)

  function handleColorPickerChange(color: string): void {
    setPickerActive(true)
    setPickerColor(color)
  }

  function handleColorPickerChangeComplete(
    color: string,
    stateKey: string
  ): void {
    setPickerActive(false)
    updateItem(playlist_id, { [stateKey]: color })
  }

  return (
    <Accordion
      title={['Tweet']}
      icons={[
        <MdOutlineTextFormat
          key={1}
          size={17}
          style={{ marginTop: '.3rem' }}
        />,
      ]}
    >
      <Accordion
        title={['Texto', 'Usuário', 'Links']}
        icons={[
          <BsCardText size={16} style={{ marginTop: '.2rem' }} key={1} />,
          <MdShortText size={18} key={2} />,
          <BsLink size={18} key={3} />,
        ]}
      >
        <Column>
          <Row className="font-family">
            <FontFamilyMenu />
          </Row>
          <br />
          <ColorPicker
            className="tweet-color"
            color={pickerActive ? pickerColor : color}
            stateReference="textColor"
            onChange={handleColorPickerChange}
            onChangeComplete={handleColorPickerChangeComplete}
          />
        </Column>
        <Column>
          <ChromePicker className="tweet-color" />
        </Column>
        <Column>
          <ChromePicker className="tweet-color" />
        </Column>
      </Accordion>
    </Accordion>
  )
}

export default TextControls
