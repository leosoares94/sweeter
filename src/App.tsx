import { useCallback, useState } from "react";

import ImageViewer from "react-simple-image-viewer";

import Track from "./widgets/Track";
import TweetCard from "./widgets/TweetCard";

import { Container, Wrapper } from "./styles";
import Header from "./widgets/Header";
import BuildTrackModal from "./widgets/BuildTrackModal";

import { useBuilder } from "./store/Builder";
import { useTracks } from "./store/Tracks";
import { MdOutlineAssignmentReturn } from "react-icons/md";

function App() {
  const [openBuildTrackModal, setOpenBuildTrackModal] =
    useState<Boolean>(false);

  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isViewerOpen, setIsViewerOpen] = useState<Boolean>(false);
  const [imagesForViewer, setImagesForViewer] = useState<string[]>([]);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

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
        currentIndex={currentImage}
        disableScroll={false}
        closeOnClickOutside={true}
        onClose={closeImageViewer}
        backgroundStyle={{
          zIndex: 10000,
          backgroundColor: "rgba(0, 0, 0,.85)",
          position: "fixed",
        }}
      />
    );
  }

  const { resetBuilder } = useBuilder((state) => state);
  const { tracks } = useTracks((state) => state);

  return (
    <Wrapper>
      <Header onNewTrackClick={() => setOpenBuildTrackModal(true)} />
      {isViewerOpen &&
        renderImageViewer(imagesForViewer, currentImage, closeImageViewer)}
      <BuildTrackModal
        open={openBuildTrackModal}
        onClose={() => {
          setOpenBuildTrackModal(false);
          resetBuilder();
        }}
      />
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
