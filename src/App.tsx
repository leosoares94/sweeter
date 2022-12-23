import React, { ReactElement, useState } from 'react'

import ImageViewer from 'react-simple-image-viewer'

import { Container, Wrapper } from './styles'

import Track from './widgets/Track'
import TweetCard from './widgets/TweetCard'
import Header from './widgets/Header'
import BuildTrack from './widgets/BuildTrack'
import Drawer from './widgets/Drawer'
import Playlist from './widgets/PlayList'
import Modal from './widgets/Modal'
import DisplayMode from './widgets/DisplayMode'

import { useBuilder } from './store/Builder'
import { useTracks } from './store/Tracks'
import { usePlaylists } from './store/Playlist'
import delay from 'delay'
import NoTracksScreen from './widgets/NoTracksScreen'

const App: React.FC = () => {
  /* Store states */
  const { resetBuilder } = useBuilder((state) => state)
  const { tracks } = useTracks((state) => state)
  const { playlists } = usePlaylists((state) => state)

  const [displayMode, setDisplayMode] = useState(false) // Tweet Visualisation mode
  const [displayModeEditable, setDisplayModeEditable] = useState(false) // Tweet Visualisation editable mode
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentModalView, setCurrentModalView] = useState<ReactElement | null>(
    null
  ) // Which component will be rendered inside modal

  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false)
  const [imagesForViewer, setImagesForViewer] = useState<string[]>([])
  const [currentImage, setCurrentImage] = useState<number>(0)

  interface ImageViewerProps {
    src: string[]
    currentIndex: number
    onClose: () => void
  }

  const renderImageViewer: React.FC<ImageViewerProps> = ({
    src,
    currentIndex,
    onClose,
  }) => {
    return (
      <ImageViewer
        src={src}
        currentIndex={currentIndex}
        disableScroll={false}
        closeOnClickOutside={true}
        onClose={onClose}
        backgroundStyle={{
          zIndex: 10000,
          backgroundColor: 'rgba(0, 0, 0,.85)',
          position: 'fixed',
        }}
      />
    )
  }

  const openImageViewer = (images: string[], index: number): void => {
    setImagesForViewer(images)
    setCurrentImage(index)
    setIsViewerOpen(true)
  }

  const closeImageViewer = (): void => {
    setCurrentImage(0)
    setIsViewerOpen(false)
    setImagesForViewer([])
  }

  const renderBuildTrackModal = (): void => {
    setCurrentModalView(<BuildTrack />)
    setIsModalOpen(true)
  }

  const renderPlaylistModal = (): void => {
    setCurrentModalView(
      <Playlist
        onItemSelect={() => {
          void (async () => {
            setIsModalOpen(false)
            await delay(220)
            setDisplayMode(true)
          })()
        }}
        onItemEdit={() => handleEditPlaylist()}
      />
    )
    setIsModalOpen(true)
  }

  function handleEditPlaylist() {
    setDisplayModeEditable(true)
    setIsModalOpen(false)
    setDisplayMode(true)
  }

  function handleLeavePlaylist() {
    setDisplayMode(false)
    displayModeEditable && setDisplayModeEditable(false)
  }

  return (
    <Wrapper>
      {displayMode && (
        <DisplayMode
          editMode={displayModeEditable}
          playlist={playlists[0]}
          onLeave={() => handleLeavePlaylist()}
        />
      )}
      <Header
        onNewTrackClick={() => renderBuildTrackModal()}
        onPlayButtonClick={() => renderPlaylistModal()}
      />
      {isViewerOpen &&
        renderImageViewer({
          src: imagesForViewer,
          currentIndex: currentImage,
          onClose: closeImageViewer,
        })}
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          resetBuilder()
        }}
      >
        {currentModalView}
      </Modal>
      <Container>
        {/* {tracks.map((track) => (
          <Track key={track.id} tag={track.tweets[0].author.name}>
            {track.tweets.map((tweet) => (
              <TweetCard
                key={tweet.id}
                {...tweet}
                onImageClick={(images, index) => {
                  openImageViewer(images, index)
                }}
              />
            ))}
          </Track>
        ))} */}
        <NoTracksScreen />
      </Container>
    </Wrapper>
  )
}

export default App
