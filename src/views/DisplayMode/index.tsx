import React, { useEffect, useRef, useState } from 'react';
import { BackgroundColor, BackgroundImage, Container, Logo, Time, Website } from './styles';
import SweeterDefault from './modules/DisplayModels/SweeterDefault';
import EditControls from './modules/EditControls';
import { Playlist } from '../../store/Playlist';

interface DisplayModeProps {
  playlist: Playlist;
  background?: string;
  editMode?: boolean;
  onLeave: () => void;
}

const DisplayMode: React.FC<DisplayModeProps> = ({
  playlist,
  editMode,
  onLeave,
}) => {
  const [duration, setDuration] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    displayRef.current?.focus();
  }, []);

  const handleTweet: React.KeyboardEventHandler<HTMLDivElement> | undefined = (event) => {
    if (event.code === 'ArrowLeft' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if ((event.code === 'ArrowRight' || event.code === 'Space') && currentIndex < playlist.tweets.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (event.code === 'Escape') {
      onLeave();
    } else {
      return false;
    }
  };

  function switchDisplayModels(modelName: string): JSX.Element | undefined {
    switch (modelName) {
      case 'sweeter-default':
        return (
          <SweeterDefault
            data={{
              tweet: playlist.tweets[currentIndex],
              textColor: playlist.textColor,
              linkColor: playlist.linkColor,
              fontFamily: playlist.fontFamily,
              fontWeight: playlist.fontWeight,
            }}
            editMode={editMode}
            onStartTimer={setDuration}
          />
        );
    }
  }

  function showEditControls(): JSX.Element | undefined {
    return editMode ? <EditControls playlist={playlist} tweet={playlist.tweets[currentIndex]} /> : undefined;
  }

  return (
    <Container ref={displayRef} tabIndex={0} onKeyDown={handleTweet}>
      {duration > 0 && <Time duration={duration} />}
      {switchDisplayModels('sweeter-default')}
      <Logo>
        <span>Sweeter</span>
      </Logo>
      <Website>getsweeter.vercel.app</Website>
      {showEditControls()}
      <BackgroundImage backgroundOpacity={playlist.backgroundOpacity} backgroundImage={playlist.backgroundImage ?? ''} />
      <BackgroundColor backgroundColor={playlist.backgroundColor} />
    </Container>
  );
};

export default DisplayMode;
