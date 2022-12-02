import {
  ChakraProvider,
  CloseButton,
  Modal as Container,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

const Modal = (props: any) => {
  const isHd = useMediaQuery({
    query: "(max-width: 1368px)",
  });

  return (
    <ChakraProvider>
      <Container
        isOpen={props.open}
        onClose={props.onClose}
        isCentered
        size="lg"
      >
        <ModalOverlay overflowY="hidden" />
        <ModalContent
          maxHeight="35rem"
          minHeight="fit-content"
          sx={{
            position: "fixed",
            zoom: isHd ? "1" : "1.3",
          }}
        >
          {props.children}
        </ModalContent>
      </Container>
    </ChakraProvider>
  );
};

export default Modal;
