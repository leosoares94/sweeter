import React from "react";

import { TagInput, Table } from "evergreen-ui";
import { Switch } from "@chakra-ui/react";

import { Row } from "./styles";

import FadeIn from "react-fade-in";

const HashtagFilter = (props: any) => {
  const [values, setValues] = React.useState<string[]>([]);
  const [checked, setChecked] = React.useState(true);

  return (
    <FadeIn>
      <Row>
        <Table width="100%" padding=".5rem" borderColor="#ffc0cbff">
          <Table.Head
            backgroundColor="#ff478411"
            marginBottom={10}
            paddingTop={3}
            borderBottom="none"
            height="1.8rem"
          >
            <Table.TextHeaderCell fontSize=".7rem">
              #Hashtags
            </Table.TextHeaderCell>
            <Table.TextHeaderCell fontSize=".7rem">
              <Row style={{ width: "100%", justifyContent: "flex-end" }}>
                <Switch size="sm" colorScheme="pink" />
              </Row>
            </Table.TextHeaderCell>
          </Table.Head>
          <Table.Body width="100%">
            <TagInput
              inputProps={{
                placeholder: "Adicione hashtags...",
                whiteSpace: "pre-line",
                outline: "none",
              }}
              tagProps={{
                backgroundColor: "rgb(249,218,218)",
              }}
              width="100%"
              addOnBlur
              values={values}
              borderColor="#ff478453"
              onChange={(values) => {
                const strings = values.map((value: string) =>
                  !value.includes("#") ? `#${value}` : value
                );
                values.length <= 6 && setValues(strings);
              }}
            />
          </Table.Body>
        </Table>
      </Row>
    </FadeIn>
  );
};

export default HashtagFilter;
