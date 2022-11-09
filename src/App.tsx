import { useState } from "react";

import Track from "./widgets/Track";
import TweetCard from "./widgets/TweetCard";

import { Container, Wrapper } from "./styles";
import Header from "./widgets/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <Header />
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
