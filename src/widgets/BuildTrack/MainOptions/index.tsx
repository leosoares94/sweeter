import React from "react";
import uuid from "react-uuid";
import FadeIn from "react-fade-in";

import { AiOutlinePlus } from "react-icons/ai";

import { Table } from "evergreen-ui";
import { Button, Tooltip, useToast } from "@chakra-ui/react";

import { Row } from "./styles";

import TagInput from "../TagInput";

import { Filter } from "../../../store/Builder";

export interface MainOptionProps {
  data: Filter[];
  hasNext: boolean;
  onInputChange: (
    id: string,
    field: string,
    values: string[] | boolean | string
  ) => void;
  onInputDelete: (id: string) => void;
  onInputAdd: (input: Filter) => void;
}

const MainOptions = ({
  data,
  hasNext,
  onInputChange,
  onInputDelete,
  onInputAdd,
}: MainOptionProps) => {
  const MAX_SAME_FIELD_COUNT = 2;

  const toast = useToast();

  const createField = (tagName: string): Filter => ({
    id: uuid(),
    tagName,
    values: [],
    includes: true,
    condition: "and",
  });

  const hasMaxCount = (tagName: string, data: Filter[]): boolean => {
    let counter = 0;
    data.forEach((item) => {
      item.tagName === tagName && counter++;
    });

    return counter === MAX_SAME_FIELD_COUNT;
  };

  const handleAddField = (type: string): void => {
    hasMaxCount(type, data)
      ? toast({
          title: "Ação não permitida",
          description: `Apenas ${MAX_SAME_FIELD_COUNT} campos deste tipo`,
          status: "error",
          duration: 2000,
          isClosable: true,
        })
      : onInputAdd(createField(type));
  };

  return (
    <FadeIn>
      <Row>
        <Table
          width="100%"
          padding=".5rem"
          backgroundColor="#ff6bb52c"
          borderRadius={9}
        >
          <Table.Head
            marginBottom={5}
            paddingTop={3}
            borderBottom="none"
            height="1.5rem"
            backgroundColor="#ff6bb500"
          >
            <Table.TextHeaderCell fontSize=".7rem">
              Data Filters&nbsp;
              <span
                style={{
                  fontFamily: "arial",
                  textTransform: "uppercase",
                  fontSize: 12,
                  fontWeight: "normal",
                }}
              >
                - F
              </span>
              <span
                style={{
                  fontFamily: "arial",
                  textTransform: "lowercase",
                  fontSize: 12,
                  fontWeight: "normal",
                }}
              >
                iltrar tweets por:
              </span>
            </Table.TextHeaderCell>
          </Table.Head>
          <Table.Body width="100%" paddingLeft={10} paddingBottom={0.2}>
            <Tooltip
              label="Incluir ou bloquear hashtags na busca"
              aria-label="A tooltip"
            >
              <Button
                size="xs"
                className="option-button"
                variant="outline"
                colorScheme="pink"
                borderRadius={50}
                leftIcon={<AiOutlinePlus size={13} />}
                iconSpacing={0.5}
                onClick={() => handleAddField("hashtags")}
              >
                Hashtags
              </Button>
            </Tooltip>
            &nbsp;
            <Tooltip
              label="Incluir ou bloquear menções na busca"
              aria-label="A tooltip"
            >
              <Button
                size="xs"
                className="option-button"
                variant="outline"
                colorScheme="pink"
                borderRadius={50}
                leftIcon={<AiOutlinePlus size={13} />}
                iconSpacing={0.5}
                onClick={() => handleAddField("mentions")}
              >
                Mentions
              </Button>
            </Tooltip>
            &nbsp;
            <Tooltip
              label="Incluir ou bloquear palavras-chave na busca"
              aria-label="A tooltip"
            >
              <Button
                size="xs"
                className="option-button"
                variant="outline"
                colorScheme="pink"
                borderRadius={50}
                leftIcon={<AiOutlinePlus size={13} />}
                iconSpacing={0.5}
                onClick={() => handleAddField("words")}
              >
                Words
              </Button>
            </Tooltip>
            &nbsp;
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<AiOutlinePlus size={13} />}
              iconSpacing={0.5}
              onClick={() => handleAddField("from")}
            >
              From
            </Button>
            &nbsp;
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<AiOutlinePlus size={13} />}
              iconSpacing={0.5}
              onClick={() => handleAddField("retweets")}
            >
              Retweets
            </Button>
            &nbsp;
          </Table.Body>
          <Table.Body width="100%" marginTop={10} overflowY="hidden">
            {data.map((item: Filter, index, array) => (
              <TagInput
                hasNext={hasNext}
                key={item.id}
                id={item.id}
                type={item.tagName}
                values={item.values!}
                includes={item.includes}
                condition={item.condition!}
                onChange={onInputChange}
                onDelete={onInputDelete}
                index={index}
                optionsLength={array.length}
              />
            ))}
          </Table.Body>
        </Table>
      </Row>
    </FadeIn>
  );
};

export default MainOptions;
