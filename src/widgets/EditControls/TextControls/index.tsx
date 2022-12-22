import React from 'react'

import { MdOutlineTextFormat, MdShortText } from 'react-icons/md'
import { BsCardText, BsLink } from 'react-icons/bs'
import Accordion from '../../Accordion'
import { Row, Column } from '../styles'

import { ChromePicker } from 'react-color'
import FontFamilyMenu from './FontFamilyMenu'

const TextControls: React.FC = (_) => {
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
          <ChromePicker className="tweet-color" />
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
