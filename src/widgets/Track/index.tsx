import TrackHeader from "../TrackHeader";
import { Container, Wrapper } from "./styles";

const Track = (props: any) => {
  return (
    <Wrapper>
      <TrackHeader />
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

export default Track;
