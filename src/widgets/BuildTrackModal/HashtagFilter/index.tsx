import React from "react";

import { TagInput, Table } from "evergreen-ui";
import { CloseButton, Switch } from "@chakra-ui/react";

import { Row } from "./styles";

import FadeIn from "react-fade-in";
import { TagsInput } from "react-tag-input-component";

const HashtagFilter = (props: any) => {
    const [values, setValues] = React.useState<string[]>([]);
    const [checked, setChecked] = React.useState(true);

    return (
        <FadeIn>
            <Row>
                <Table width="100%" padding=".5rem" backgroundColor="#ff6bb52c" borderRadius={9}>
                    <Table.Head
                        marginBottom={10}
                        paddingTop={3}
                        borderBottom="none"
                        height="1.8rem"
                        backgroundColor="#ff6bb500"
                    >
                      

                        <Table.TextHeaderCell fontSize=".7rem">
                            #Hashtags 
                            <span
                                style={{
                                    fontFamily: "arial",
                                    textTransform: "lowercase",
                                    fontSize: 12,
                                    fontWeight: "normal",
                                }}
                            >
                                &nbsp;que os resultados devem conter
                            </span>
                        </Table.TextHeaderCell>
                        <CloseButton size='sm' />
                    </Table.Head>
                    <Table.Body width="100%" >

                        <TagInput
                            paddingLeft={10}
                            inputProps={{
                                placeholder: "Adicione hashtags...",
                                paddingLeft: -7,
                            }}
                            tagProps={{
                                backgroundColor: "rgb(249,218,218)",
                                marginLeft: '-.2rem'
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
