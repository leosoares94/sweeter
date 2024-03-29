import React, { ReactElement, useState } from 'react'
import ThemeContext from '@/ThemeContext'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import ImageViewer from 'react-simple-image-viewer'

import { Container, Wrapper } from './styles'

import Track from './modules/Track'
import TweetCard from './modules/TweetCard'

import DisplayMode from '@/views/DisplayMode'
import BuildTrack from '@views/Home/modules/BuildTrack'

import Header from '@widgets/Header'
import Playlist from '@widgets/PlayList'
import Modal from '@widgets/Modal'

import { useBuilder } from '@store/Builder'
import { useTracks } from '@store/Tracks'
import { usePlaylists } from '@store/Playlist'
import Settings from './modules/Settings'
import { Button, ChakraProvider } from '@chakra-ui/react'

interface ImageViewerProps {
  src: string[]
  currentIndex: number
  onClose: () => void
}

const Home: React.FC = () => {
  /* Store states */
  const { resetBuilder } = useBuilder((state) => state)
  const { tracks, reloadTracks } = useTracks((state) => state)
  const { playlists } = usePlaylists((state) => state)

  const [displayMode, setDisplayMode] = useState<boolean>(false) // Tweet Visualization mode
  const [displayModeEditable, setDisplayModeEditable] = useState<boolean>(false) // Tweet Visualization editable mode
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentModalView, setCurrentModalView] = useState<ReactElement | null>(
    null
  ) // Which component will be rendered inside modal

  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false)
  const [imagesForViewer, setImagesForViewer] = useState<string[]>([])
  const [currentImage, setCurrentImage] = useState<number>(0)

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
          void (() => {
            setIsModalOpen(false)
            setDisplayMode(true)
          })()
        }}
        onItemEdit={() => handleEditPlaylist()}
      />
    )
    setIsModalOpen(true)
  }

  const handleEditPlaylist = (): void => {
    setDisplayModeEditable(true)
    setIsModalOpen(false)
    setDisplayMode(true)
  }

  const handleLeavePlaylist = (): void => {
    setDisplayMode(false)
    displayModeEditable && setDisplayModeEditable(false)
  }

  const renderSettingsModal = (): void => {
    setCurrentModalView(<Settings />)
    setIsModalOpen(true)
  }

  //Dnd functions
  function onDragEnd(result: any) {
    // dropped outside the list
    if (!result.destination) {
      return
    }
    const items = reorder(tracks, result.source.index, result.destination.index)
    reloadTracks!(items)
  }

  const getListStyle = () => ({
    display: 'flex',
    height: 'calc(100vh - 3rem)',
    zIndex: 1,
  })

  const getItemStyle = (_isDragging: any, draggableStyle: any) => ({
    userSelect: 'none',
    ...draggableStyle,
  })

  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <Wrapper background={theme?.bodyBackground}>
          {displayMode && (
            <DisplayMode
              editMode={displayModeEditable}
              playlist={playlists[0]}
              onLeave={() => handleLeavePlaylist()}
            />
          )}
          {!displayMode && (
            <Header
              onNewTrackClick={() => renderBuildTrackModal()}
              onPlayButtonClick={() => renderPlaylistModal()}
              onSettingsClick={() => renderSettingsModal()}
            />
          )}
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
            backgroundColor={theme?.cardBackground}
          >
            {currentModalView}
          </Modal>
          <Container>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle()}
                    {...provided.droppableProps}
                    className="draggable-wrapper"
                  >
                    {tracks.map((track, index) => (
                      <Draggable
                        key={track.id}
                        draggableId={track.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <Track
                              key={track.id}
                              id={track.id}
                              tag={track.tweets && track.tweets[0].author.name}
                              headerBackground={
                                theme?.trackHeaderBackgroundColor
                              }
                              textColor={theme?.trackHeaderTextColor}
                              size={track.size}
                            >
                              {track.tweets &&
                                track.tweets.map((tweet, index) => (
                                  <TweetCard
                                    key={index}
                                    {...tweet}
                                    onImageClick={(
                                      images: string[],
                                      index: number
                                    ) => {
                                      openImageViewer(images, index)
                                    }}
                                    backgroundColor={theme?.cardBackground}
                                    textColor={theme?.cardTextColor}
                                    trackSize={track.size}
                                  />
                                ))}
                              {track.size === 'highlight' && (
                                <ChakraProvider>
                                  <Button
                                    colorScheme="pink"
                                    variant="outline"
                                    mt="1rem"
                                    w="100%"
                                  >
                                    + Load more
                                  </Button>
                                </ChakraProvider>
                              )}
                            </Track>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Container>
        </Wrapper>
      )}
    </ThemeContext.Consumer>
  )
}

export default Home
