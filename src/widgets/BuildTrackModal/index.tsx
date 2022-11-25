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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import Select from 'react-select'

import { IoIosRocket } from "react-icons/io";

import { Column, Row, Title } from "./styles";
import MainOptions from "./MainOptions";
import IsOptions from "./IsOptions";
import HasOptions from "./HasOptions";

import { useBuilder } from "../../store/Builder";
import { ChevronDownIcon } from "evergreen-ui";
import { BsPlusCircleDotted } from "react-icons/bs";


const BuildTrackModal = (props: any) => {

  const { dataFilters, booleanFilters, contentFilters, addFilter, updateFilter, removeFilter, resetBuilder } = useBuilder(state => state);

  const [enabledFilters, setEnabledFilters] = useState<string[]>([
    // "main",
    // "boolean",
    // "has"
  ]);

  const isEnabled = (filter: string) =>
    enabledFilters.find((element: string) => element === filter);

  const resultCountOptions = [
    { value: "10", label: 'Até 10 resultados' },
    { value: "20", label: 'Até 20 resultados' },
    { value: "30", label: 'Até 30 resultados' }
  ]

  const searchByOptions = [
    { value: "recency", label: "Filtrar por atualidade" },
    { value: "relevancy", label: "Filtrar por relevância" }
  ]

  const isDisabledByRequired = (): boolean => {
    let result = true;

    dataFilters.map(item => {
      result = item.values!.length === 0 ? true : false;
    })

    return result;
  }

  const disableFilter = (filter: string): void => {
    const filters = enabledFilters.filter(item => item !== filter);
    setEnabledFilters(filters);
  }

  return (
    <ChakraProvider>
      <Modal isOpen={props.open} onClose={props.onClose} isCentered size="lg">
        <ModalOverlay overflowY="hidden" />
        <ModalContent
          maxHeight="35rem"
          minHeight="fit-content"
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
          <ModalCloseButton onClick={() => resetBuilder()}/>

          <ModalBody marginTop={0} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Column>
              {isEnabled("main") && <MainOptions onRemove={() => disableFilter("main")} data={dataFilters} onInputChange={(id, field, values) => updateFilter(id, field, values, "dataFilters")} onInputDelete={(id) => removeFilter(id, "dataFilters")} onInputAdd={(input) => addFilter(input, "dataFilters")} />}
              {isEnabled("boolean") && <IsOptions onRemove={() => disableFilter("boolean")} data={booleanFilters} onInputChange={(id, field, values) => updateFilter(id, field, values, "booleanFilters")} onInputDelete={(id) => removeFilter(id, "booleanFilters")} onInputAdd={(input) => addFilter(input, "booleanFilters")} />}
              {isEnabled("has") && <HasOptions onRemove={() => disableFilter("has")} data={contentFilters} onInputChange={(id, field, values) => updateFilter(id, field, values, "contentFilters")} onInputDelete={(id) => removeFilter(id, "contentFilters")} onInputAdd={(input) => addFilter(input, "contentFilters")} />}
          
              <Row style={{paddingTop: 10}}>
                <Menu size="xs" placement="top">
                  <MenuButton as={Button} size="xs" backgroundColor="rgba(0, 0, 0, 0)" border="none" _active={{ backgroundColor: "rgba(0, 0, 0, 0)" }} _hover={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "#64104b" }}>
                    <BsPlusCircleDotted size={25} color="#ff32c2" />
                  </MenuButton>
                  <MenuList fontSize={13}>
                    <MenuItem onClick={() => setEnabledFilters([...enabledFilters, "main"])}>Data Filters</MenuItem>
                    <MenuItem onClick={() => setEnabledFilters([...enabledFilters, "boolean"])}>Is/Isn't Filters</MenuItem>
                    <MenuItem onClick={() => setEnabledFilters([...enabledFilters, "has"])}>Has/Hasn't Filters</MenuItem>
                  </MenuList>
                </Menu>
              </Row>
            </Column>

          </ModalBody>
          <ModalBody marginTop={0} >
            <Row>
              <Select options={resultCountOptions} defaultValue={resultCountOptions[0]} pageSize={5} className="select" isClearable={false} />
              <Select options={searchByOptions} defaultValue={searchByOptions[0]} pageSize={5} className="select" isClearable={false} />
            </Row>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              size="sm"
              width="100%"
              variant="solid"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<IoIosRocket size={18} />}
              marginTop={-2}
              disabled={isDisabledByRequired()}
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
