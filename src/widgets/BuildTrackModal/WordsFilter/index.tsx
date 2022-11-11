import React from "react";
import { TagInput, Table } from "evergreen-ui";
import { Switch } from "@chakra-ui/react";
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
            <Table.TextHeaderCell fontSize=".7rem">Words</Table.TextHeaderCell>
            <Table.TextHeaderCell fontSize=".7rem">
              <Row style={{ width: "100%", justifyContent: "flex-end" }}>
                <Switch size="sm" colorScheme="green" />
              </Row>
            </Table.TextHeaderCell>
          </Table.Head>
          <Table.Body width="100%">
            <TagInput
              inputProps={{
                placeholder: "Adicione hashtags...",
                whiteSpace: "pre-line",
              }}
              tagProps={{
                backgroundColor: "#daf9e1",
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
