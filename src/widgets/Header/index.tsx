import { Container, Logo, Row } from "./styles";

import { Button, Menu, Popover, Position } from "evergreen-ui";

import { CgAddR } from "react-icons/cg";
import { BsFillPlayFill } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';

const Header = (props: any) => {
  return (
    <Container>
      <Row>
        <Logo>
          <span>Sweeter</span>
        </Logo>
        &nbsp;&nbsp;

     

      </Row>
      <Row>
        <Button
          className="add-button"
          appearance="primary"
          iconBefore={<CgAddR size={16} fontWeight={600} />}
        >
          New Track
        </Button>
        &nbsp;&nbsp;
        <Button
          className="add-button"
          appearance="primary"
          iconBefore={<BsFillPlayFill size={16} fontWeight={600} />}
        >
          Play
        </Button>
        &nbsp;&nbsp;
        <CiSettings size={28} color="#0000008f" />
      </Row>
    </Container>
  );
};

export default Header;
