import { Container, Wrapper, Title } from "./styles";
import { MdOutlineRefresh } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import Badge from "../Badge";

const TrackHeader = (props: any) => {
  return (
    <Wrapper>
      <Container>
        <MdOutlineRefresh size={18} className="refresh-button" />
        <Title>
          <Badge type="mention" value="4fitbet" />{" "}
          <Badge type="hashtag" value="CopaDoMundo" />
          &nbsp;+ 2
        </Title>
        <BsThreeDotsVertical size={17} className="options-button" />
      </Container>
    </Wrapper>
  );
};

export default TrackHeader;
