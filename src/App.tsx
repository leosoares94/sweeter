import { useState } from "react";

import Track from "./widgets/Track";
import TweetCard from "./widgets/TweetCard";

import { Container } from "./styles";

function App() {
  const [count, setCount] = useState(0);

  return (
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
    </Container>
  );
}

export default App;
