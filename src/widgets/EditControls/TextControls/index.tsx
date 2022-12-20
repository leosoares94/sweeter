import React from 'react'
import { MdOutlineTextFormat, MdShortText } from 'react-icons/md'
import { BsCardText, BsLink } from 'react-icons/bs'
import Accordion from '../../Accordion'

import { BlockPicker } from 'react-color'

const TextControls: React.FC = () => {
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
        <BlockPicker triangle="hide" />
        <BlockPicker triangle="hide" />
        <BlockPicker triangle="hide" />
      </Accordion>
    </Accordion>
  )
}

export default TextControls
