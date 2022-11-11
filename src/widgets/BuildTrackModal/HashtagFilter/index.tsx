import { TagInput, Table } from "evergreen-ui";
import { Switch } from '@chakra-ui/react';
import React from "react";
import { Row } from "./styles"

const HashtagFilter = (props: any) => {

    const [values, setValues] = React.useState<string[]>([])
    const [checked, setChecked] = React.useState(true)

    return (
        <Row>
            <Table width="100%" padding="1rem">
                <Table.Head backgroundColor="#ff478411" marginBottom={10} paddingTop={3} borderBottom="none" height="1.8rem">
                    <Table.TextHeaderCell fontSize=".7rem">#Hashtags</Table.TextHeaderCell>
                    <Table.TextHeaderCell fontSize=".7rem" >
                        <Row style={{ width: "100%", justifyContent:'flex-end' }}>
                        <Switch size='sm' colorScheme="red" />
                        </Row>
                    </Table.TextHeaderCell>
                </Table.Head>
                <Table.Body width="100%">
                    <TagInput
                        inputProps={{ placeholder: 'Adicione hashtags...', whiteSpace: 'pre-line' }}
                        tagProps={{
                            backgroundColor: "rgb(249,218,218)"
                        }}
                        width="100%"
                        addOnBlur
                        values={values}
                        borderColor="#ff478487"
                        onChange={(values) => {
                            const strings = values.map((value: string) => !value.includes("#") ? `#${value}` : value)
                            values.length <= 6 && setValues(strings)
                        }} />
                </Table.Body>
            </Table>
        </Row>
    )
}

export default HashtagFilter;