import React from 'react'
import uuid from 'react-uuid'
import { MdOutlineVerified } from 'react-icons/md'
import { AiOutlineRetweet } from 'react-icons/ai'
import { RiChatQuoteLine } from 'react-icons/ri'
import { BsReply } from 'react-icons/bs'
import { SiAdblock } from 'react-icons/si'
import { Table } from 'evergreen-ui'
import { Button, useToast } from '@chakra-ui/react'

import { Row } from './styles'

import FadeIn from 'react-fade-in'
import BooleanInput from '../BooleanInput'
import { Filter } from '../../../../../store/Builder'
import { ThemeAttributes } from '@/utils/appTheme'

export interface IsOptionProps {
  data: Filter[]
  hasNext: boolean
  onInputChange: (
    id: string,
    field: string,
    values: string[] | boolean | string
  ) => void
  onInputDelete: (id: string) => void
  onInputAdd: (input: Filter) => void
  theme?: ThemeAttributes | null
}

const IsOptions: React.FC<IsOptionProps> = ({
  data,
  onInputChange,
  onInputAdd,
  onInputDelete,
  hasNext,
  theme,
}) => {
  const MAX_SAME_FIELD_COUNT = 1

  const toast = useToast()

  const newField = (tagName: string): Filter => ({
    id: uuid(),
    tagName,
    values: [],
    includes: true,
    condition: 'and',
  })

  const hasMaxCount = (tagName: string, data: Filter[]): boolean => {
    let counter = 0
    data.forEach((item) => {
      item.tagName === tagName && counter++
    })

    return counter === MAX_SAME_FIELD_COUNT
  }

  const handleAddField = (type: string): void => {
    hasMaxCount(type, data)
      ? toast({
          title: 'Ação não permitida',
          description: `Apenas ${MAX_SAME_FIELD_COUNT} opções deste tipo`,
          status: 'error',
          duration: 2000,
          isClosable: true,
          containerStyle: {
            fontSize: 14,
          },
        })
      : onInputAdd(newField(type))
  }

  return (
    <FadeIn>
      <Row theme={theme}>
        <Table
          width="100%"
          padding=".5rem"
          backgroundColor={theme!.type === 'light' ? '#e8e4ffd3' : '#d072ffc5'}
          borderRadius={9}
        >
          <Table.Head
            marginBottom={5}
            paddingTop={3}
            borderBottom="none"
            height="1.8rem"
            backgroundColor="#ff6bb500"
            color={theme!.trackHeaderTextColor}
          >
            <Table.TextHeaderCell fontSize=".7rem">
              IS / ISN&apos;T&nbsp;
              <span
                style={{
                  fontFamily: 'arial',
                  textTransform: 'uppercase',
                  fontSize: 12,
                  fontWeight: 'normal',
                }}
              >
                - B
              </span>
              <span
                style={{
                  fontFamily: 'arial',
                  textTransform: 'lowercase',
                  fontSize: 12,
                  fontWeight: 'normal',
                }}
              >
                uscar tweets que sejam (ou não):
              </span>
            </Table.TextHeaderCell>
          </Table.Head>

          <Table.Body width="100%" paddingLeft={10}>
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<AiOutlineRetweet size={15} />}
              iconSpacing={0.5}
              onClick={() => handleAddField('retweet')}
            >
              Retweet
            </Button>
            &nbsp;
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<BsReply size={15} />}
              iconSpacing={0.5}
              onClick={() => handleAddField('reply')}
            >
              Reply
            </Button>
            &nbsp;
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<RiChatQuoteLine size={14} />}
              iconSpacing={0.5}
              onClick={() => handleAddField('quote')}
            >
              Quote
            </Button>
            &nbsp;
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<MdOutlineVerified size={16} />}
              iconSpacing={0.5}
              onClick={() => handleAddField('verified')}
            >
              Verified
            </Button>
            &nbsp;
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<SiAdblock size={14} />}
              iconSpacing={0.5}
              onClick={() => handleAddField('nullcast')}
            >
              Nullcast
            </Button>
          </Table.Body>
          <Table.Body width="100%" marginTop={10} overflowY="hidden">
            {data.map((item: Filter, index, array) => (
              <BooleanInput
                hasNext={hasNext}
                inputName="is/isnt"
                key={item.id}
                id={item.id}
                type={item.tagName}
                condition={item.condition}
                onDelete={onInputDelete}
                index={index}
                optionsLength={array.length}
                includes={item.includes}
                onChange={onInputChange}
              />
            ))}
          </Table.Body>
        </Table>
      </Row>
    </FadeIn>
  )
}

export default IsOptions
