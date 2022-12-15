import React, { useEffect, useRef, useState } from 'react'
import { BlockPicker } from 'react-color'

import { IoColorPaletteOutline } from 'react-icons/io5'
import { BsCircleFill } from 'react-icons/bs'

import { Container, Logo, Time, Website, EditControls } from './styles'

import SweeterDefault from '../DisplayModels/SweeterDefault'
import { Playlist } from '../../store/Playlist'
import Accordion from '../Accordion'

interface DisplayModeProps {
  playlist: Playlist
  background?: string
  editMode?: boolean
}

const DisplayMode: React.FC<DisplayModeProps> = ({ background, playlist }) => {
  const [duration, setDuration] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  /* -- Playlist visual customization -- */

  /* -- Playlist visual customization end -- */

  const displayRef = useRef<HTMLDivElement>(null)

  function switchDisplayModels(modelName: string): JSX.Element | undefined {
    switch (modelName) {
      case 'sweeter-default':
        return (
          <SweeterDefault
            data={playlist.tweets[currentIndex]}
            onStartTimer={setDuration}
          />
        )
    }
  }

  const handleTweet: React.KeyboardEventHandler<HTMLDivElement> | undefined = (
    event
  ) => {
    return event.code === 'ArrowLeft' && currentIndex > 0
      ? setCurrentIndex(currentIndex - 1)
      : (event.code === 'ArrowRight' || event.code === 'Space') &&
        currentIndex < playlist.tweets.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : false
  }

  useEffect(() => {
    displayRef.current?.focus()
  }, [])

  return (
    <Container
      ref={displayRef}
      background="linear-gradient(to right, #00d2ff, #3a7bd5);"
      tabIndex={0}
      onKeyDown={handleTweet}
    >
      {duration > 0 && <Time duration={duration} />}
      {switchDisplayModels('sweeter-default')}
      {/* <BlockPicker /> */}
      <Logo>
        <span>Sweeter</span>
      </Logo>
      <EditControls>
        <Accordion title={['Cores']} icons={[<IoColorPaletteOutline />]}>
          <Accordion
            title={['Texto', 'Fundo', 'Links']}
            icons={[
              <BsCircleFill size={12} />,
              <BsCircleFill size={12} />,
              <BsCircleFill size={12} />,
            ]}
          >
            <BlockPicker triangle="hide" />
            <BlockPicker triangle="hide" />
            <BlockPicker triangle="hide" />
          </Accordion>
        </Accordion>
      </EditControls>
      <Website>getsweeter.vercel.app</Website>
    </Container>
  )
}

export default DisplayMode
