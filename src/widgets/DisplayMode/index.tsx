import delay from 'delay';
import { useEffect, useState } from "react";
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

  addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" && currentIndex < (playlist.tweets.length - 1)) {
      setCurrentIndex(currentIndex + 1 );
    } else if (event.key === "ArrowLeft" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  });

  function switchDisplayModels(modelName: string): JSX.Element | undefined {
    switch (modelName) {
      case 'sweeter-default':
        return <SweeterDefault data={playlist.tweets[currentIndex]}
          onStartTimer={setDuration}
        />
    }
  }
  return (
    <Container background="linear-gradient(to right, #00d2ff, #3a7bd5);">
      {duration > 0 && <Time duration={duration} />}
      {switchDisplayModels('sweeter-default')}
      <Logo>
        <span>Sweeter</span>
      </Logo>
      <Website>getsweeter.vercel.app</Website>
    </Container >
  );
};

export default DisplayMode;
