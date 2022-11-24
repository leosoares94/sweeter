import { Row, Column } from "./styles";

import { Tooltip, Button } from '@chakra-ui/react';
import { AiOutlineDislike, AiOutlineLike, AiOutlineMinusCircle } from "react-icons/ai";
import Toggler from "../Toggler";

interface BooleanInputProps {
  id: string;
  index: number;
  optionsLength: number;
  type: string,
  includes: boolean,
  condition: string,
  onChange: (id: string, field: string, values: string[] | boolean | string) => void;
  onDelete: (id: string) => void;
}

const BooleanInput = ({id, optionsLength, type, condition, includes, onChange, onDelete }: BooleanInputProps) => {

  function handleCondition() {
    return condition === "or" ? "and" : "or";
  }

  return (
    <Column>
      <Row className="field-container">
        <Tooltip label={includes ? "Incluir" : "Excluir"} aria-label='A tooltip'>
          <Button
            size="xs"
            variant="ghost"
            colorScheme="pink"
            borderRadius={100}
            iconSpacing={0}
            leftIcon={includes ? <AiOutlineLike size={16} color="green" /> : <AiOutlineDislike size={16} color="red" />}
            onClick={() => onChange(id, "includes", !includes)}
          />
        </Tooltip>

        &nbsp;
        <Row className="filter-text">
          Is Retweet
        </Row>
        <Tooltip label="Remover este campo" aria-label='A tooltip'>
          <Button
            size="xs"
            variant="ghost"
            colorScheme="pink"
            borderRadius={100}
            iconSpacing={0}
            leftIcon={<AiOutlineMinusCircle size={15} />}
            onClick={() => onDelete(id)}
          />
        </Tooltip>
      </Row>
      {optionsLength > 1  && <Toggler condition={condition} onClick={() => onChange(id, "condition", handleCondition())} />}
    </Column>
  )

}

export default BooleanInput;