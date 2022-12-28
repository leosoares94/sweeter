import React, { useEffect, useRef, useState } from 'react'

import { Container, Logo, Time, Website } from './styles'

import SweeterDefault from '../DisplayModels/SweeterDefault'
import { Playlist } from '../../store/Playlist'

import EditControls from '../EditControls'

interface DisplayModeProps {
  playlist: Playlist
  background?: string
  editMode?: boolean
  onLeave: () => void
}

const DisplayMode: React.FC<DisplayModeProps> = ({
  playlist,
  editMode,
  onLeave
}) => {
  const [duration, setDuration] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const { backgroundColor } = playlist

  const displayRef = useRef<HTMLDivElement>(null)

  function switchDisplayModels (modelName: string): JSX.Element | undefined {
    switch (modelName) {
      case 'sweeter-default':
        return (
          <SweeterDefault
            data={{
              tweet: playlist.tweets[currentIndex],
              textColor: playlist.textColor,
              linkColor: playlist.linkColor,
              fontFamily: playlist.fontFamily,
              fontWeight: playlist.fontWeight
            }}
            editMode={editMode}
            onStartTimer={setDuration}
          />
        )
    }
  }

  function showEditControls (): JSX.Element | undefined {
    return (
      <EditControls playlist={playlist} tweet={playlist.tweets[currentIndex]} />
    )
  }

  const handleTweet: React.KeyboardEventHandler<HTMLDivElement> | undefined = (
    event
  ) => {
    return event.code === 'ArrowLeft' && currentIndex > 0
      ? setCurrentIndex(currentIndex - 1)
      : (event.code === 'ArrowRight' || event.code === 'Space') &&
        currentIndex < playlist.tweets.length - 1
          ? setCurrentIndex(currentIndex + 1)
          : event.code === 'Escape'
            ? onLeave()
            : false
  }

  useEffect(() => {
    displayRef.current?.focus()
  }, [])

  return (
    <>

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

        <Website>getsweeter.vercel.app</Website>
        {(editMode ?? false) && showEditControls()}
      </Container>
    </>
  )
}

export default DisplayMode
