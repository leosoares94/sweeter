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

import Select from "react-select";

import { IoIosRocket } from "react-icons/io";

import { Column, Row } from "./styles";
import MainOptions from "./MainOptions";
import IsOptions from "./IsOptions";
import HasOptions from "./HasOptions";

import { useBuilder } from "../../store/Builder";

import { convertBuilderToQueryString2 } from "../../utils/builderToQueryString";
import RecentTweetsRepository from "../../api/modules/SearchTweets/RecentSearch/repository/implementation/RecentTweetsRepository";
import RequestConfig from "../../api/modules/SearchTweets/RecentSearch/RequestConfig";

const BuildTrackModal = (props: any) => {
  const {
    dataFilters,
    booleanFilters,
    contentFilters,
    addFilter,
    updateFilter,
    removeFilter,
    resetBuilder,
  } = useBuilder((state) => state);

  const [enabledFilters, setEnabledFilters] = useState<string[]>([
    "main",
    "boolean",
    "has",
  ]);

  const isEnabled = (filter: string) =>
    enabledFilters.find((element: string) => element === filter);

  const resultCountOptions = [
    { value: "10", label: "Até 10 resultados" },
    { value: "20", label: "Até 20 resultados" },
    { value: "30", label: "Até 30 resultados" },
  ];

  const searchByOptions = [
    { value: "recency", label: "Filtrar por atualidade" },
    { value: "relevancy", label: "Filtrar por relevância" },
  ];

  const isDisabledByRequired = (): boolean => {
    let isDataFiltersEmpty = true;
    let isBooleanFiltersEmpty = booleanFilters.length === 0;
    let isContentFiltersEmpty = contentFilters.length === 0;

    dataFilters.map((item) => {
      isDataFiltersEmpty = item.values!.length === 0 ? true : false;
    });

    return isDataFiltersEmpty && isBooleanFiltersEmpty && isContentFiltersEmpty;
  };

  async function handleFetch() {

    const { VITE_BEARER_TOKEN } = import.meta.env;
    const string = convertBuilderToQueryString2({
      dataFilters,
      booleanFilters,
      contentFilters,
    });
    const config = new RequestConfig(string, "recency", "10", `Bearer ${VITE_BEARER_TOKEN}`)
    const repository = new RecentTweetsRepository();

    const response = await repository.fetch(config);

    console.log(response)
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
                color: "rgba(0,0,0,0.5)",
              }}
            >
              Select some options and add some filters below to customize your
              results:
            </span>
          </ModalHeader>
          <ModalCloseButton onClick={() => resetBuilder()} />

          <ModalBody
            marginTop={0}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Column>
              {isEnabled("main") && (
                <MainOptions
                  hasNext={
                    booleanFilters.length > 0 || contentFilters.length > 0
                  }
                  data={dataFilters}
                  onInputChange={(id, field, values) =>
                    updateFilter(id, field, values, "dataFilters")
                  }
                  onInputDelete={(id) => removeFilter(id, "dataFilters")}
                  onInputAdd={(input) => addFilter(input, "dataFilters")}
                />
              )}
              {isEnabled("boolean") && (
                <IsOptions
                  hasNext={contentFilters.length > 0}
                  data={booleanFilters}
                  onInputChange={(id, field, values) =>
                    updateFilter(id, field, values, "booleanFilters")
                  }
                  onInputDelete={(id) => removeFilter(id, "booleanFilters")}
                  onInputAdd={(input) => addFilter(input, "booleanFilters")}
                />
              )}
              {isEnabled("has") && (
                <HasOptions
                  hasNext={false}
                  data={contentFilters}
                  onInputChange={(id, field, values) =>
                    updateFilter(id, field, values, "contentFilters")
                  }
                  onInputDelete={(id) => removeFilter(id, "contentFilters")}
                  onInputAdd={(input) => addFilter(input, "contentFilters")}
                />
              )}
            </Column>
          </ModalBody>
          <ModalBody marginTop={0}>
            <Row>
              <Select
                options={resultCountOptions}
                defaultValue={resultCountOptions[0]}
                pageSize={5}
                className="select"
                isClearable={false}
              />
              <Select
                options={searchByOptions}
                defaultValue={searchByOptions[0]}
                pageSize={5}
                className="select"
                isClearable={false}
              />
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
              onClick={() => handleFetch()}
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
