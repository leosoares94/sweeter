import { Container, Wrapper, Title } from "./styles";
import { MdOutlineRefresh } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
const TrackHeader = (props: any) => {
  return (
    <Wrapper>
      <Container>
        <MdOutlineRefresh size={18} />
        <Title>#CopaDoBrasil</Title>
        <BsThreeDotsVertical size={17} />
      </Container>
    </Wrapper>
  );
};

export default TrackHeader;
