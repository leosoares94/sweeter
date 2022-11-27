import { Row, Column } from "./styles";
import FadeIn from 'react-fade-in';
import { Tooltip, Button } from '@chakra-ui/react';
import { AiOutlineDislike, AiOutlineLike, AiOutlineMinusCircle } from "react-icons/ai";
import Toggler from "../Toggler";

interface BooleanInputProps {
  id: string;
  index: number;
  inputName: string;
  optionsLength: number;
  type: string,
  includes: boolean,
  condition: string,
  hasNext: boolean,
  onChange: (id: string, field: string, values: string[] | boolean | string) => void;
  onDelete: (id: string) => void;
}

const BooleanInput = ({ id, index, inputName, optionsLength, type, condition, includes, hasNext, onChange, onDelete }: BooleanInputProps) => {

  function handleCondition() {
    return condition === "or" ? "and" : "or";
  }

  return (
    <FadeIn>
      <Column>
        <Row className="is-field-container" style={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          borderRadius: ".6rem",
          padding: ".5rem"
        }}>
          <Tooltip label={includes ? "Incluir" : "Excluir"} aria-label='A tooltip'>
            <Button
              size="xs"
              variant="ghost"
              colorScheme="pink"
              borderRadius={100}
              iconSpacing={0}
              leftIcon={includes ? <AiOutlineLike size={16} color="#4D9A86" /> : <AiOutlineDislike size={16} color="red" />}
              onClick={() => onChange(id, "includes", !includes)}
            />
          </Tooltip>

          &nbsp;
          <Row className="filter-text" >
            <div className="filter-text-white-box">
              <span color={includes ? "#0000006f" : "red"}>  {inputName === "is/isnt" ? `${includes ? "Is" : "Isn't "} ${type}` : `${includes ? "Has" : "Hasn't "} ${type}`}</span>
            </div>
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
        {index !== (optionsLength - 1)  && <Toggler condition={condition} onClick={() => onChange(id, "condition", handleCondition())} className="or-and-btn" />}
      </Column>
    </FadeIn>
  )

}

export default BooleanInput;