import React from "react";
import * as uuid from "uuid";
import FadeIn from "react-fade-in";

import { AiOutlinePlus } from 'react-icons/ai';

import { Table } from "evergreen-ui";
import { CloseButton, Button, Tooltip, useToast } from "@chakra-ui/react";

import { Row } from "./styles";

import TagInput from "../TagInput";

import { DataFilter } from "../../../store/Builder";

export interface MainOptionProps {
  data: DataFilter[];
  onInputChange: (id: string, field: string, values: string[] | boolean | string) => void;
  onInputDelete: (id: string) => void;
  onInputAdd: (input: DataFilter) => void;
}

const MainOptions = ({ data, onInputChange, onInputDelete, onInputAdd }: MainOptionProps) => {

  const MAX_SAME_FIELD_COUNT = 2;

  const toast = useToast();

  const [enabledFilters, setEnabledFilters] = React.useState<any[]>([
    {
      type: "hashtags",
      fields: [
        {
          values: [],
          include: false,
          condition: null
        }
      ]
    }
  ]);

  const createField = (type: string): DataFilter => ({
    id: uuid.v4(),
    type,
    values: [],
    includes: true,
    condition: "or",
  })


  const isEnabled = (filter: string) =>
    enabledFilters.find((element: string) => element === filter);


  const hasMaxCount = (type: string, data: DataFilter[]): boolean => {
    let counter = 0;
    data.forEach((item) => {
      item.type === type && counter++
    })

    return counter === MAX_SAME_FIELD_COUNT;
  }

  const handleAddField = (type: string): void => {
    hasMaxCount(type, data) ? toast({
      title: 'Ação não permitida',
      description: "Apenas 2 campos deste tipo",
      status: 'error',
      duration: 2000,
      isClosable: true,
    }) : onInputAdd(createField(type))
  }

  return (
    <FadeIn>
      <Row>
        <Table width="100%" padding=".5rem" backgroundColor="#ff6bb52c" borderRadius={9}>
          <Table.Head
            marginBottom={5}
            paddingTop={3}
            borderBottom="none"
            height="1.8rem"
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
              >- F</span>
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
            <CloseButton size='sm' />
          </Table.Head>

          <Table.Body width="100%" paddingLeft={10} >
            <Tooltip label="Incluir ou bloquear hashtags na busca" aria-label='A tooltip' >
              <Button
                size="xs"
                className="option-button"
                variant="outline"
                colorScheme="pink"
                borderRadius={50}
                leftIcon={<AiOutlinePlus size={13} />}
                iconSpacing={.5}
                onClick={() => handleAddField("hashtags")}
              >
                Hashtags
              </Button>
            </Tooltip>
            &nbsp;
            <Tooltip label="Incluir ou bloquear menções na busca" aria-label='A tooltip' >
              <Button
                size="xs"
                className="option-button"
                variant="outline"
                colorScheme="pink"
                borderRadius={50}
                leftIcon={<AiOutlinePlus size={13} />}
                iconSpacing={.5}
                onClick={() => handleAddField("mentions")}
              >
                Mentions
              </Button>
            </Tooltip>
            &nbsp;
            <Tooltip label="Incluir ou bloquear palavras-chave na busca" aria-label='A tooltip' >
              <Button
                size="xs"
                className="option-button"
                variant="outline"
                colorScheme="pink"
                borderRadius={50}
                leftIcon={<AiOutlinePlus size={13} />}
                iconSpacing={.5}
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
              iconSpacing={.5}
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
              iconSpacing={.5}
              onClick={() => handleAddField("retweets")}
            >
              Retweets
            </Button>
            &nbsp;
          </Table.Body>
          <Table.Body width="100%" marginTop={10} >
            {data.map((item: DataFilter, index, array) => <TagInput key={item.id} id={item.id} type={item.type} values={item.values} includes={item.includes} condition={item.condition} onChange={onInputChange} onDelete={onInputDelete} index={index} optionsLength={array.length} />)}
          </Table.Body>
        </Table>
      </Row>
    </FadeIn >
  )
}

export default MainOptions;