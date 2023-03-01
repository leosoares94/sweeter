import React, { ReactElement, useState } from 'react';

import ImageViewer from 'react-simple-image-viewer';

import { Container, Wrapper } from './styles';

import Track from './modules/Track';
import TweetCard from './modules/TweetCard';

import DisplayMode from '@/views/DisplayMode';
import BuildTrack from '@views/Home/modules/BuildTrack';

import Header from '@widgets/Header';
import Playlist from '@widgets/PlayList';
import Modal from '@widgets/Modal';

import { useBuilder } from '@store/Builder';
import { useTracks } from '@store/Tracks';
import { usePlaylists } from '@store/Playlist';

interface ImageViewerProps {
  src: string[];
  currentIndex: number;
  onClose: () => void;
}

const Home: React.FC = () => {
  /* Store states */
  const { resetBuilder } = useBuilder((state) => state);
  const { tracks } = useTracks((state) => state);
  const { playlists } = usePlaylists((state) => state);

  const [displayMode, setDisplayMode] = useState<boolean>(false); // Tweet Visualization mode
  const [displayModeEditable, setDisplayModeEditable] = useState<boolean>(false); // Tweet Visualization editable mode
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentModalView, setCurrentModalView] = useState<ReactElement | null>(null); // Which component will be rendered inside modal

  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
  const [imagesForViewer, setImagesForViewer] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const renderImageViewer: React.FC<ImageViewerProps> = ({ src, currentIndex, onClose }) => {
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
    );
  };

  const openImageViewer = (images: string[], index: number): void => {
    setImagesForViewer(images);
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = (): void => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    setImagesForViewer([]);
  };

  const renderBuildTrackModal = (): void => {
    setCurrentModalView(<BuildTrack />);
    setIsModalOpen(true);
  };

  const renderPlaylistModal = (): void => {
    setCurrentModalView(
      <Playlist
        onItemSelect={() => {
          void (() => {
            setIsModalOpen(false);
            setDisplayMode(true);
          })();
        }}
        onItemEdit={() => handleEditPlaylist()}
      />
    );
    setIsModalOpen(true);
  };

  const handleEditPlaylist = (): void => {
    setDisplayModeEditable(true);
    setIsModalOpen(false);
    setDisplayMode(true);
  };

  const handleLeavePlaylist = (): void => {
    setDisplayMode(false);
    displayModeEditable && setDisplayModeEditable(false);
  };

  return (
    <Wrapper>
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
      />)}
      {isViewerOpen &&
        renderImageViewer({
          src: imagesForViewer,
          currentIndex: currentImage,
          onClose: closeImageViewer
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
        {tracks.map((track) => (
          <Track key={track.id} tag={track.tweets[0].author.name}>
            {track.tweets.map((tweet) => (
              <TweetCard
                key={tweet.id}
                {...tweet}
                onImageClick={(images: string[], index: number) => {
                  openImageViewer(images, index)
                }}
              />
            ))}
          </Track>
        ))}
      </Container>
    </Wrapper>
  )
}

export default Home
