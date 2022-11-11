import { useState } from "react";

import Track from "./widgets/Track";
import TweetCard from "./widgets/TweetCard";

import { Container, Wrapper } from "./styles";
import Header from "./widgets/Header";
import BuildTrackModal from "./widgets/BuildTrackModal";

function App() {
  const [openBuildTrackModal, setOpenBuildTrackModal] =
    useState<Boolean>(false);

  return (
    <Wrapper>
      <Header onNewTrackClick={() => setOpenBuildTrackModal(true)} />
      <BuildTrackModal
        open={openBuildTrackModal}
        onClose={() => setOpenBuildTrackModal(false)}
      />
      <Container>
        <Track>
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
        </Track>
        <Track>
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
        </Track>
        <Track>
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
        </Track>
        <Track>
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
        </Track>
      </Container>
    </Wrapper>
  );
}

export default App;
