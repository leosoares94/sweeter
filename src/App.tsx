import { ReactElement, useState } from "react";

import ImageViewer from "react-simple-image-viewer";

import Track from "./widgets/Track";
import TweetCard from "./widgets/TweetCard";

import { Container, Wrapper } from "./styles";
import Header from "./widgets/Header";
import BuildTrack from "./widgets/BuildTrack";

import { useBuilder } from "./store/Builder";
import { useTracks } from "./store/Tracks";
import { usePlaylists } from "./store/Playlist";
import Drawer from "./widgets/Drawer";
import Playlist from "./widgets/PlayList";
import Modal from "./widgets/Modal";
import DisplayMode from "./widgets/DisplayMode";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [imagesForViewer, setImagesForViewer] = useState<string[]>([]);

  const [currentModalView, setCurrentModalView] = useState<ReactElement | null>(
    null
  );

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    setImagesForViewer([]);
  };

  function renderImageViewer(
    images: string[],
    current: number,
    onClose: () => void
  ) {
    return (
      <ImageViewer
        src={images}
        currentIndex={current}
        disableScroll={false}
        closeOnClickOutside={true}
        onClose={onClose}
        backgroundStyle={{
          zIndex: 10000,
          backgroundColor: "rgba(0, 0, 0,.85)",
          position: "fixed",
        }}
      />
    );
  }

  function renderBuildTrackModal() {
    setCurrentModalView(<BuildTrack />);
    setIsModalOpen(true);
  }

  function renderPlaylistModal() {
    setCurrentModalView(<Playlist />);
    setIsModalOpen(true);
  }

  const { resetBuilder } = useBuilder((state) => state);
  const { tracks } = useTracks((state) => state);
  const { playlists } = usePlaylists((state) => state);

  return (
    <Wrapper>
      <DisplayMode playlist={playlists[1]}/>
      <Header
        onNewTrackClick={() => renderBuildTrackModal()}
        onPlayButtonClick={() => renderPlaylistModal()}
      />
      {isViewerOpen &&
        renderImageViewer(imagesForViewer, currentImage, closeImageViewer)}
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          resetBuilder();
        }}
      >
        {currentModalView}
      </Modal>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Playlist />
      </Drawer>
      <Container>
        {tracks.map((track) => (
          <Track key={track.id} tag={track.tweets[0].author.name}>
            {track.tweets.map((tweet) => (
              <TweetCard
                key={tweet.id}
                {...tweet}
                onImageClick={(images, index) => {
                  setImagesForViewer(images);
                  setCurrentImage(index);
                  setIsViewerOpen(true);
                }}
              />
            ))}
          </Track>
        ))}
      </Container>
    </Wrapper>
  );
}

export default App;
