import { Container, Logo } from "./styles";

import { Button } from "evergreen-ui";

import { CgAddR } from "react-icons/cg";

const Header = (props: any) => {
  return (
    <Container>
      <Logo>
        <span>Sweeter</span>
      </Logo>
      <Button
        className="add-button"
        appearance="primary"
        iconBefore={<CgAddR size={15} />}
      >
        New Track
      </Button>
    </Container>
  );
};

export default Header;
