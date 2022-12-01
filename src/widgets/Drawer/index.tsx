import {
  Drawer as Container,
  DrawerOverlay,
  DrawerContent,
  ChakraProvider,
} from "@chakra-ui/react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

function Drawer({ children, isOpen, onClose }: DrawerProps) {
  return (
    <ChakraProvider>
      <Container isOpen={isOpen} placement="left" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent
          style={{
            width: "50rem",
          }}
        >
          {children}
        </DrawerContent>
      </Container>
    </ChakraProvider>
  );
}

export default Drawer;
