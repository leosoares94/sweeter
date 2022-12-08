import { useState } from "react";
import { Container, Logo, Time, Website } from "./styles"

import Bubble1 from '../DisplayModels/Bubble1';
import { Playlist } from '../../store/Playlist';

interface DisplayModeProps {
  playlist: Playlist;
  background?: string;
  editMode?: boolean;
}

const DisplayMode = ({ background, playlist }: DisplayModeProps) => {

  const [duration, setDuration] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(3);

  return (
    <Container background="linear-gradient(to right, #00d2ff, #3a7bd5);">
      {duration > 0 && <Time duration={duration} />}
      <Bubble1 data={playlist.tweets[currentIndex]} onStartTimer={setDuration} />
      <Logo>
        <span>Sweeter</span>
      </Logo>
      <Website>
        getsweeter.vercel.app
      </Website>
    </Container>
  )
}

export default DisplayMode;