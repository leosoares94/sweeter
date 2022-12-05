import { Container, Logo, Time, Website } from "./styles"

import Bubble1 from '../DisplayModels/Bubble1'
import { Playlist } from '../../store/Playlist'; import { useEffect, useState } from "react";
;

interface DisplayModeProps {
  playlist: Playlist;
  background?: string;

}

const DisplayMode = ({ background, playlist }: DisplayModeProps) => {

  const [duration, setDuration] = useState(0);

  return (
    <Container background="linear-gradient(to right, #00d2ff, #3a7bd5);">
      {duration > 0 && <Time duration={duration} />}
      <Bubble1 data={playlist.tweets[0]} onStartTimer={setDuration} />
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