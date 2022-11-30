import TrackFooter from "../TrackFooter";
import TrackHeader from "../TrackHeader";
import { Container, Wrapper } from "./styles";

const Track = (props: any) => {
  return (
    <Wrapper>
      <TrackHeader tag={props.tag}/>
      <Container>
        {props.children}
      </Container>
      <TrackFooter />
    </Wrapper>
  );
};

export default Track;
