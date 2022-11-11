import React from "react";
import { TagInput, Table } from "evergreen-ui";
import { Switch } from "@chakra-ui/react";
import { Row } from "./styles";
import FadeIn from "react-fade-in";

const MentionFilter = (props: any) => {
  const [values, setValues] = React.useState<string[]>([]);

  return (
    <FadeIn>
      <Row>
        <Table width="100%" padding=".5rem" borderColor="#a647ff86">
          <Table.Head
            backgroundColor="#ff478411"
            marginBottom={10}
            paddingTop={3}
            borderBottom="none"
            height="1.8rem"
          >
            <Table.TextHeaderCell fontSize=".7rem">
              @Mentions
            </Table.TextHeaderCell>
            <Table.TextHeaderCell fontSize=".7rem">
              <Row style={{ width: "100%", justifyContent: "flex-end" }}>
                <Switch size="sm" colorScheme="purple" />
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
                backgroundColor: "#eddaf9",
              }}
              width="100%"
              addOnBlur
              values={values}
              borderColor="#a647ff49"
              onChange={(values) => {
                const strings = values.map((value: string) =>
                  !value.includes("@") ? `@${value}` : value
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

export default MentionFilter;
