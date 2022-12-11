import { useEffect, useRef, useState } from "react";
import { Container, Logo, Time, Website } from "./styles";

import SweeterDefault from "../DisplayModels/SweeterDefault";
import { Playlist } from "../../store/Playlist";

interface DisplayModeProps {
  playlist: Playlist;
  background?: string;
  editMode?: boolean;
}

const DisplayMode = ({ background, playlist }: DisplayModeProps) => {
  const [duration, setDuration] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayRef = useRef<HTMLDivElement>(null);

  function switchDisplayModels(modelName: string): JSX.Element | undefined {
    switch (modelName) {
      case "sweeter-default":
        return (
          <SweeterDefault
            data={playlist.tweets[currentIndex]}
            onStartTimer={setDuration}
          />
        );
    }
  }

  function handleTweet(e: any) {
   return e.code === "ArrowLeft" && currentIndex > 0
      ? setCurrentIndex(currentIndex - 1)
      : (e.code === "ArrowRight" || e.code === "Space") && currentIndex < playlist.tweets.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : null;
  }

  useEffect(() => {
    displayRef.current?.focus();
  }, [])

  return (
    <Container
      ref={displayRef}
      background="linear-gradient(to right, #00d2ff, #3a7bd5);"
      tabIndex={0}
      onKeyDown={handleTweet}
    >
      {duration > 0 && <Time duration={duration} />}
      {switchDisplayModels("sweeter-default")}
      <Logo>
        <span>Sweeter</span>
      </Logo>
      <Website>getsweeter.vercel.app</Website>
    </Container>
  );
};

export default DisplayMode;
