import React, { useState } from 'react'

import { MdOutlineTextFormat, MdShortText } from 'react-icons/md'
import { BsCardText, BsLink } from 'react-icons/bs'
import Accordion from '../../Accordion'
import { Row, Column } from '../styles'

import FontFamilyMenu from './FontFamilyMenu'
import ColorPicker from '../ColorPicker'
import { usePlaylists } from '../../../store/Playlist'

import { Button, Stack } from '@chakra-ui/react'

interface TextControlsProps {
  color: string
  playlistId: string
}

const TextControls: React.FC<TextControlsProps> = ({ color, playlistId }) => {
  const { updateItem } = usePlaylists((state) => state)

  const [pickerColor, setPickerColor] = useState('')
  const [pickerActive, setPickerActive] = useState(false)

  const TWEET_PALETTE = ['#150485', '#590995', '#C62A88', '#03C4A1', '#453C67', '#000000']

  function handleColorPickerChange (color: string): void {
    setPickerActive(true)
    setPickerColor(color)
  }

  function handleColorPickerChangeComplete (
    color: string,
    stateKey: string
  ): void {
    setPickerActive(false)
    updateItem(playlistId, { [stateKey]: color })
  }

  return (
    <Accordion
      title={['Tweet']}
      icons={[
        <MdOutlineTextFormat
          key={1}
          size={17}
          style={{ marginTop: '.3rem' }}
        />
      ]}
    >
      <Accordion
        title={['Texto', 'Links']}
        icons={[
          <BsCardText size={16} style={{ marginTop: '.2rem' }} key={1} />,
          <MdShortText size={18} key={2} />,
          <BsLink size={18} key={3} />
        ]}
      >
        <Column>
          <Row className="font-family">
            <FontFamilyMenu />
          </Row>

          <ColorPicker
            className="tweet-color"
            color={pickerActive ? pickerColor : color}
            stateReference="textColor"
            onChange={handleColorPickerChange}
            onChangeComplete={handleColorPickerChangeComplete}
          />
          <Stack className='color-palette' direction="row" marginTop={2}>
            {TWEET_PALETTE.map((c) => <Button key={c} size="xs" backgroundColor={c} onClick={() => updateItem(playlistId, { textColor: c })} />)}
          </Stack>
        </Column>
        <Column>
          <ColorPicker
            className="tweet-color"
            color={pickerActive ? pickerColor : color}
            stateReference="linkColor"
            onChange={handleColorPickerChange}
            onChangeComplete={handleColorPickerChangeComplete}
          />
        </Column>
      </Accordion>
    </Accordion>
  )
}

export default TextControls
