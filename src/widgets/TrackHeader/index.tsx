import { Container, Wrapper, Title } from "./styles";
import { MdOutlineRefresh } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Badge } from "evergreen-ui";

const TrackHeader = (props: any) => {
  return (
    <Wrapper>
      <Container>
        <MdOutlineRefresh size={18} className="refresh-button" />
        <Title><Badge color="red" marginRight={2}>
          #CopaDoBrasil
        </Badge> <Badge color="yellow" marginRight={2}>@ethanhardy</Badge> +2</Title>
        <BsThreeDotsVertical size={17} className="options-button" />
      </Container>
    </Wrapper>
  );
};

export default TrackHeader;
