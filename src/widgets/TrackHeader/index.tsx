import { MdOutlineRefresh } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Container, Wrapper, Title } from "./styles";
import Badge from "../Badge";

interface TrackHeaderProps {
  dataTags: string[],
  booleanTags: string[],
  contentTags: string[]
}

const TrackHeader = (props: any) => {
  return (
    <Wrapper>
      <Container>
        <MdOutlineRefresh size={window.matchMedia('max-width:1368') ? 14 : 18} className="refresh-button" />
        <Title>
          <Badge className="badge" type="mention" value={props.tag} />{" "}
          {/* <Badge type="hashtag" value="CopaDoMundo" />
          &nbsp;+ 2 */}
        </Title>
        <BsThreeDotsVertical size={window.matchMedia('max-width:1368') ? 14 : 18} className="options-button" />
      </Container>
    </Wrapper>
  );
};

export default TrackHeader;
