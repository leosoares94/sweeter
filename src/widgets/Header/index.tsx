import { Container, Logo, Row } from "./styles";

import { CgAddR } from "react-icons/cg";
import { BsFillPlayFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

import { ChakraProvider, Button } from "@chakra-ui/react";

interface HeaderProps {
  onNewTrackClick: () => void;
}

const Header = ({ onNewTrackClick }: HeaderProps) => {
  return (
    <ChakraProvider>
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
            variant="solid"
            leftIcon={<CgAddR size={16} fontWeight={600} />}
            size="sm"
            color="#fff"
            onClick={onNewTrackClick}
          >
            New Track
          </Button>
          &nbsp;&nbsp;
          <Button
            className="add-button"
            variant="solid"
            leftIcon={<BsFillPlayFill size={16} fontWeight={600} />}
            size="sm"
            color="#fff"
          >
            Play
          </Button>
          &nbsp;&nbsp;
          <CiSettings size={28} color="#0000008f" />
        </Row>
      </Container>
    </ChakraProvider>
  );
};

export default Header;
