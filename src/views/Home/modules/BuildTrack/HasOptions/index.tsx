import React from 'react'
import uuid from 'react-uuid'

import { GoFileMedia, GoMention } from 'react-icons/go'
import { IoMdLink, IoMdImages } from 'react-icons/io'
import { MdOutlineSlowMotionVideo } from 'react-icons/md'

import { Table } from 'evergreen-ui'
import { Button, useToast } from '@chakra-ui/react'

import { Row } from './styles'

import FadeIn from 'react-fade-in'
import { Filter } from '../../../../../store/Builder'
import BooleanInput from '../BooleanInput'

export interface HasOptionProps {
  data: Filter[]
  hasNext: boolean
  onInputChange: (
    id: string,
    field: string,
    values: string[] | boolean | string
  ) => void
  onInputDelete: (id: string) => void
  onInputAdd: (input: Filter) => void
}

const HasOptions: React.FC<HasOptionProps> = ({
  data,
  onInputChange,
  onInputAdd,
  onInputDelete,
  hasNext
}) => {
  const MAX_SAME_FIELD_COUNT = 1

  const toast = useToast()

  const newField = (tagName: string): Filter => ({
    id: uuid(),
    tagName,
    values: [],
    includes: true,
    condition: 'and'
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
        size: 'sm',
        containerStyle: {
          fontSize: 14
        },
      })
      : onInputAdd(newField(type))
  }

  return (
    <FadeIn>
      <Row>
        <Table
          width="100%"
          padding=".5rem"
          backgroundColor="#c7f2ffbb"
          borderRadius={9}
        >
          <Table.Head
            marginBottom={5}
            paddingTop={3}
            borderBottom="none"
            height="1.8rem"
            backgroundColor="#ff6bb500"
          >
            <Table.TextHeaderCell fontSize=".7rem">
              HAS / HASN&apos;T&nbsp;
              <span
                style={{
                  fontFamily: 'arial',
                  textTransform: 'uppercase',
                  fontSize: 12,
                  fontWeight: 'normal'
                }}
              >
                - B
              </span>
              <span
                style={{
                  fontFamily: 'arial',
                  textTransform: 'lowercase',
                  fontSize: 12,
                  fontWeight: 'normal'
                }}
              >
                uscar tweets que tenham (ou não):
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
              leftIcon={<IoMdLink size={15} />}
              iconSpacing={0.5}
              onClick={() => handleAddField('links')}
            >
              Links
            </Button>
            &nbsp;
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<GoFileMedia size={12} />}
              iconSpacing={0.5}
              onClick={() => handleAddField('media')}
            >
              Media
            </Button>
            &nbsp;
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<MdOutlineSlowMotionVideo size={14} />}
              iconSpacing={0.5}
              onClick={() => handleAddField('videos')}
            >
              Videos
            </Button>
            &nbsp;
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<IoMdImages size={16} />}
              iconSpacing={0.5}
              onClick={() => handleAddField('images')}
            >
              Images
            </Button>
            &nbsp;
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<GoMention size={13} />}
              iconSpacing={0.5}
              onClick={() => handleAddField('mentions')}
            >
              Mentions
            </Button>
          </Table.Body>
          <Table.Body width="100%" marginTop={10} overflowY="hidden">
            {data.map((item: Filter, index, array) => (
              <BooleanInput
                hasNext={hasNext}
                inputName="has/hanst"
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

export default HasOptions
