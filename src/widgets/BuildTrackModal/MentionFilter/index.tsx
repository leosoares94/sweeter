import React from "react";
import { TagInput, Table } from "evergreen-ui";
import { CloseButton, Switch } from "@chakra-ui/react";
import { Row } from "./styles";
import FadeIn from "react-fade-in";

const MentionFilter = (props: any) => {
  const [values, setValues] = React.useState<string[]>([]);

  return (
    <FadeIn>
      <Row>
        <Table width="100%" padding=".5rem" backgroundColor="#ebcdff" borderRadius={9}>
          <Table.Head
            backgroundColor="#e66bff00"
            marginBottom={10}
            paddingTop={3}
            borderBottom="none"

            height="1.8rem"
          >
            <Table.TextHeaderCell fontSize=".7rem">
              @Mentions
        
              <span
                style={{
                  fontFamily: "arial",
                  textTransform: "lowercase",
                  fontSize: 12,
                  fontWeight: "normal",
                }}
              >
                que os resultados podem conter
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
                backgroundColor: "#ebcdff",
                marginLeft: '-.2rem'
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
