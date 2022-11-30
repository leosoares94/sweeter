import { Container, Logo, Row } from "./styles";

import { CgAddR } from "react-icons/cg";
import { BsFillPlayFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

import { ChakraProvider, Button, Badge } from "@chakra-ui/react";

import LogoIcon from '/twitter.svg';

interface HeaderProps {
  onNewTrackClick: () => void;
}

const Header = ({ onNewTrackClick }: HeaderProps) => {
  return (
    <ChakraProvider>
      <Container>
        <Row>
          {/* <img src={LogoIcon} style={{width: '2rem', marginTop: '-.2rem'}}/> */}
          <Logo>
            <span>Sweeter</span>
          </Logo>
          &nbsp;&nbsp;
          <Badge size="xs" fontSize={10} colorScheme="green" marginTop={1} paddingTop={1}>Em desenvolvimento</Badge>
          &nbsp;&nbsp;
        </Row>
        <Row>
          <Button
            variant="solid"
            leftIcon={<CgAddR size={16} fontWeight={600} />}
            size="sm"
            color="#fff"
            onClick={onNewTrackClick}
            sx={{
              bgColor: "pink.400",
              _hover: {
                bgColor: "pink.500",
              },
            }}
            borderRadius={50}
          >
            New Track
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="solid"
            leftIcon={<BsFillPlayFill size={16} fontWeight={600} />}
            size="sm"
            borderRadius={50}
            color="#fff"
            sx={{
              bgColor: "pink.400",
              _hover: {
                bgColor: "pink.500",
              },
            }}
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
