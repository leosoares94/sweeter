import React from "react";

import { TagInput, Table } from "evergreen-ui";
import { Switch } from "@chakra-ui/react";

import { Row } from "./styles";

import FadeIn from "react-fade-in";
import { TagsInput } from "react-tag-input-component";

const HashtagFilter = (props: any) => {
  const [values, setValues] = React.useState<string[]>([]);
  const [checked, setChecked] = React.useState(true);

  return (
    <FadeIn>
      <Row>
        <Table width="100%" padding=".5rem" backgroundColor="#ff6bb52c">
          <Table.Head
            marginBottom={10}
            paddingTop={3}
            borderBottom="none"
            height="1.8rem"
            backgroundColor="#ff6bb500"
          >
            <Table.TextHeaderCell fontSize=".7rem">
              #Hashtags <span style={{ fontWeight: "normal" }}>- Q</span>
              <span
                style={{
                  fontFamily: "arial",
                  textTransform: "lowercase",
                  fontSize: 12,
                  fontWeight: "normal",
                }}
              >
                uais hashtags cada tweet deve incluir obrigatoriamente
              </span>
            </Table.TextHeaderCell>
          </Table.Head>
          <Table.Body width="100%" paddingBottom={1}>
            <TagsInput
              classNames={{
                tag: "tags",
              }}
              value={values}
              onChange={(values) => {
                const strings = values.map((value: string) =>
                  !value.includes("#") ? `#${value}` : value
                );
                values.length <= 6 && setValues(strings);
              }}
              name="fruits"
              placeHolder="enter fruits"
            />
            {/* <TagInput
              inputProps={{
                placeholder: "Adicione hashtags...",
                padding: 10,
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
            /> */}
          </Table.Body>
        </Table>
      </Row>
    </FadeIn>
  );
};

export default HashtagFilter;
