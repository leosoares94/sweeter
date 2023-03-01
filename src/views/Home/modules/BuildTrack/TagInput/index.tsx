import React from 'react'
import { Row, Column } from './styles'

import { Tooltip, Button } from '@chakra-ui/react'
import { AiOutlineDislike, AiOutlineLike, AiOutlineMinusCircle } from 'react-icons/ai'
import { TagInput as Input } from 'evergreen-ui'
import Toggler from '../Toggler'

import FadeIn from 'react-fade-in'

interface TagInputProps {
  id: string
  index: number
  optionsLength: number
  type: string
  values: string[]
  includes: boolean
  condition: string
  hasNext: boolean
  onChange: (id: string, field: string, values: string[] | boolean | string) => void
  onDelete: (id: string) => void
}

const TagInput: React.FC<TagInputProps> = ({ id, index, optionsLength, type, values, condition, includes, hasNext, onChange, onDelete }) => {
  const switchPrefix = (type: string): string => {
    switch (type) {
      case 'hashtags':
        return '#'
      case 'mentions':
        return '@'
      case 'from':
        return 'from: '
      case 'retweets':
        return 'retweets of: '
      default:
        return ''
    }
  }

  const switchInputPlaceholder = (type: string): string => {
    switch (type) {
      case 'hashtags':
        return 'Adicione hashtags'
      case 'mentions':
        return 'Adicione menções'
      case 'from':
        return 'Buscar tweets de: '
      case 'retweets':
        return 'Buscar retweets de: '
      default:
        return 'Buscar palavras-chave'
    }
  }

  // function handleCondition() {
  //   return condition === "or" ? "and" : "or";
  // }

  return (
    <FadeIn>
      <Column>
        <Row className="field-container">
          <Tooltip label={includes ? 'Mudar para excluir' : 'Mudar para incluir'} aria-label='A tooltip'>
            <Button
              size="xs"
              variant="ghost"
              colorScheme="pink"
              borderRadius={100}
              iconSpacing={0}
              leftIcon={includes ? <AiOutlineLike size={16} color="#4D9A86" /> : <AiOutlineDislike size={16} color="red" />}
              onClick={() => onChange(id, 'includes', !includes)}
            />
          </Tooltip>

          &nbsp;
          <Input
            paddingLeft={10}
            inputProps={{
              placeholder: switchInputPlaceholder(type),
              paddingLeft: -7,
              className: 'tag-input'
            }}

            tagProps={{
              backgroundColor: 'rgb(249,218,218)',
              marginLeft: '-.2rem'

            }}
            width="100%"
            addOnBlur
            values={values}
            borderColor="#ff478453"
            borderRadius={16}
            onChange={(items) => {
              const strings = items.map((value: string) => (!value.includes(switchPrefix(type)) ? `${switchPrefix(type)}${value}` : value))
              items.length <= 6 && onChange(id, 'values', strings)
            }}
          />
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
        {index !== (optionsLength - 1) && <Toggler condition={condition} />}
      </Column>
    </FadeIn>
  )
}

export default TagInput
