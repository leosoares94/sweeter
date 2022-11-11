import React from "react";
import { Checkbox } from "evergreen-ui";

import { Container, Row, Column, IconContainer, Title } from "./styles";

import { CgHashtag } from "react-icons/cg";
import { GoMention } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";

const FilterOptions = (props: any) => {
  const [checked, setChecked] = React.useState(true);

  return (
    <Container>
      <Column>
        <Title>Filter Types</Title>
        <Row>
          <Checkbox
            size={20}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          &nbsp;&nbsp;
          <IconContainer color="#ea4cda">
            <CgHashtag size={18} />
          </IconContainer>
          &nbsp; Hashtags
        </Row>
        <Row>
          <Checkbox
            size={20}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          &nbsp;&nbsp;
          <IconContainer color="#a850c5">
            <GoMention size={14} />
          </IconContainer>
          &nbsp; Mentions
        </Row>
        <Row>
          <Checkbox
            size={20}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          &nbsp;&nbsp;
          <IconContainer color="#5650c5">
            <BiTime size={15} />
          </IconContainer>
          &nbsp; Period
        </Row>
        <Row>
          <Checkbox
            size={20}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          &nbsp;&nbsp;
          <IconContainer color="#50c596">
            <BsChatSquareText size={15} />
          </IconContainer>
          &nbsp; Words
        </Row>
      </Column>
    </Container>
  );
};

export default FilterOptions;
