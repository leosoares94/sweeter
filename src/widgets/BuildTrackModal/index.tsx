import { useState } from "react";

import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import { IoIosRocket } from "react-icons/io";

import { Column } from "./styles";
import MainOptions from "./MainOptions";
import BooleanOptions from "./IsOptions";
import HasOptions from "./HasOptions";

import { useBuilder } from "../../store/Builder";


const BuildTrackModal = (props: any) => {

  const { dataFilters, addDataFilter, updateDataFilter, removeDataFilter } = useBuilder(state => state);

  const [enabledFilters, setEnabledFilters] = useState<string[]>([
    "main",
    "boolean",
    "has"
  ]);

  const isEnabled = (filter: string) =>
    enabledFilters.find((element: string) => element === filter);

  const toggleFilter = (filter: string) =>
    isEnabled(filter)
      ? setEnabledFilters(
        enabledFilters.filter((element: string) => element !== filter)
      )
      : setEnabledFilters([...enabledFilters, filter]);

  return (
    <ChakraProvider>
      <Modal isOpen={props.open} onClose={props.onClose} isCentered size="lg">
        <ModalOverlay overflowY="hidden" />
        <ModalContent
          maxHeight="33rem"
          sx={{
            transform: "scale(1.2) !important",
            aspectRatio: "",
          }}
        >
          <ModalHeader fontSize={15}>
            Let's build your track!
            <br />
            <span
              style={{
                fontSize: 13,
                fontWeight: "normal",
                color: "rgba(0,0,0,0.5)"
              }}
            >
              Select some options and add some filters below to customize your results:
            </span>

          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Column>
              {isEnabled("main") && <MainOptions data={dataFilters} onInputChange={(id, field, values) => updateDataFilter(id, field, values)} onInputDelete={(id) => removeDataFilter(id)} onInputAdd={(input) => addDataFilter(input)} />}
              {isEnabled("boolean") && <BooleanOptions />}
              {isEnabled("has") && <HasOptions />}
            </Column>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button
              size="sm"
              width="100%"
              variant="solid"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<IoIosRocket size={18} />}
              disabled={!enabledFilters.length}
            >
              LIFT OFF!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default BuildTrackModal;
