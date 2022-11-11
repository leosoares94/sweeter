import { TagInput, Table, } from "evergreen-ui";
import React from "react";
import { Row } from "./styles"



const MentionFilter = (props: any) => {

    const [values, setValues] = React.useState<string[]>([])

    return (
        <Row>
            <TagInput
                inputProps={{ placeholder: 'Adicione menções...', whiteSpace: 'pre-line' }}
                tagProps={{
                    backgroundColor: "#a850c546",
                    fontSize: '.8rem',
                    padding: '.5rem'
                }}
                width="100%"
                addOnBlur
                values={values}
                borderColor="#a850c59d"
                onChange={(values) => {
                    const strings = values.map((value: string) => !value.includes("@") ? `@${value}` : value)
                    values.length <= 4 && setValues(strings)
                }} />
        </Row>
    )
}

export default MentionFilter;