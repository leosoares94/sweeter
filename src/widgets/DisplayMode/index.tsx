import React, { useEffect, useRef, useState } from 'react'
import { BlockPicker } from 'react-color'

import { IoColorPaletteOutline } from 'react-icons/io5'
import { BsCircleFill } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'

import { Container, Logo, Time, Website, EditControls } from './styles'

import SweeterDefault from '../DisplayModels/SweeterDefault'
import { Playlist, usePlaylists } from '../../store/Playlist'
import Accordion from '../Accordion'

interface DisplayModeProps {
  playlist: Playlist
  background?: string
  editMode?: boolean
}

const DisplayMode: React.FC<DisplayModeProps> = ({ playlist }) => {
  const [duration, setDuration] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const { updateItem } = usePlaylists((state) => state)
  const { backgroundColor, textColor, linkColor } = playlist

  const displayRef = useRef<HTMLDivElement>(null)

  function switchDisplayModels (modelName: string): JSX.Element | undefined {
    switch (modelName) {
      case 'sweeter-default':
        return (
          <SweeterDefault
            data={{
              tweet: playlist.tweets[currentIndex],
              textColor: playlist.textColor,
              linkColor: playlist.linkColor
            }}
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
      backgroundColor={backgroundColor}
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
        <Accordion title={['Cores']} icons={[<IoColorPaletteOutline key={1} />]}>
          <Accordion
            title={['Texto', 'Fundo', 'Links']}
            icons={[
              <BsCircleFill size={13} key={1} color={textColor} />,
              <BsCircleFill size={12} key={2} color={backgroundColor} />,
              <BsCircleFill size={12} key={3} color={linkColor} />
            ]}
          >
            <BlockPicker triangle="hide" color={textColor} onChange={(color) => updateItem(playlist.id, { textColor: color.hex })} />
            <BlockPicker triangle="hide" color={backgroundColor} onChange={(color) => updateItem(playlist.id, { backgroundColor: color.hex })}/>
            <BlockPicker triangle="hide" color={linkColor} onChange={(color) => updateItem(playlist.id, { linkColor: color.hex })}/>
          </Accordion>
        </Accordion>
        <br />
        <Accordion title={['Mostrar/Ocultar']} icons={[<AiOutlineEye key={1} />]}>
          <Accordion
            title={['Data', 'Mídia', 'Métricas', 'Dispositivo']}
            icons={[
              <BsCircleFill size={13} key={1} color={textColor} />,
              <BsCircleFill size={12} key={2} color={backgroundColor} />,
              <BsCircleFill size={12} key={3} color={linkColor} />,
              <BsCircleFill size={12} key={3} color={linkColor} />
            ]}
          >
            <BlockPicker triangle="hide" color={textColor} onChange={(color) => updateItem(playlist.id, { textColor: color.hex })} />
            <BlockPicker triangle="hide" color={backgroundColor} onChange={(color) => updateItem(playlist.id, { backgroundColor: color.hex })}/>
            <BlockPicker triangle="hide" color={linkColor} onChange={(color) => updateItem(playlist.id, { linkColor: color.hex })}/>
            <BlockPicker triangle="hide" color={linkColor} onChange={(color) => updateItem(playlist.id, { linkColor: color.hex })}/>
          </Accordion>
        </Accordion>
      </EditControls>
      <Website>getsweeter.vercel.app</Website>
    </Container>
  )
}

export default DisplayMode
