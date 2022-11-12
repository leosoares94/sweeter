import React from "react";
import { TagInput, Table } from "evergreen-ui";
import { CloseButton, Switch } from "@chakra-ui/react";
import { Row } from "./styles";
import FadeIn from "react-fade-in";

const WordFilter = (props: any) => {
  const [values, setValues] = React.useState<string[]>([]);

  return (
    <FadeIn>
      <Row>
        <Table width="100%" padding=".5rem" backgroundColor="#6bff972a">
          <Table.Head
            backgroundColor="#e66bff00"
            marginBottom={10}
            paddingTop={3}
            borderBottom="none"
            height="1.8rem"
          >
            <Table.TextHeaderCell fontSize=".7rem">
              Words
              <span style={{ fontWeight: "normal" }}> - Q</span>
              <span
                style={{
                  fontFamily: "arial",
                  textTransform: "lowercase",
                  fontSize: 12,
                  fontWeight: "normal",
                }}
              >
                uais palavras cada tweet deve incluir obrigatoriamente
              </span>
            </Table.TextHeaderCell>
            <CloseButton size='sm' />
          </Table.Head>
          <Table.Body width="100%">
            <TagInput
              paddingLeft={10}
              inputProps={{
                placeholder: "Adicione menções...",
                paddingLeft: -7,
              }}
              tagProps={{
                backgroundColor: "rgb(192, 255, 226)",
                marginLeft: '-.2rem'
              }}
              width="100%"
              addOnBlur
              values={values}
              borderColor="#47ff9a85"
              onChange={(values) => {
                values.length <= 6 && setValues(values);
              }}
            />
          </Table.Body>
        </Table>
      </Row>
    </FadeIn>
  );
};

export default WordFilter;
