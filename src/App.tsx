import { useState } from "react";

import Track from "./widgets/Track";
import TweetCard from "./widgets/TweetCard";

import { Container, Wrapper } from "./styles";
import Header from "./widgets/Header";
import BuildTrackModal from "./widgets/BuildTrackModal";

import { useBuilder } from "./store/Builder";
import { useTracks } from "./store/Tracks";

function App() {
  const [openBuildTrackModal, setOpenBuildTrackModal] =
    useState<Boolean>(false);

  const { resetBuilder } = useBuilder((state) => state);
  const { tracks } = useTracks(state => state);

  return (
    <Wrapper>
      <Header onNewTrackClick={() => setOpenBuildTrackModal(true)} />
      <BuildTrackModal
        open={openBuildTrackModal}
        onClose={() => {
          setOpenBuildTrackModal(false);
          resetBuilder();
        }}
      />
      <Container>
        {tracks.map(track => (
          <Track key={track.id} tag={track.tweets[0].author.name}>
            {track.tweets.map(tweet => (
              <TweetCard key={tweet.id} {...tweet} />
            ))}
          </Track>
        ))}

      </Container>
    </Wrapper>
  );
}

export default App;
