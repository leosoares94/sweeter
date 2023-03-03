import React, { useState } from 'react'

import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Badge
} from '@chakra-ui/react'

// import Select from 'react-select'

import { Column, Title } from './styles'
import MainOptions from './MainOptions'
import IsOptions from './IsOptions'
import HasOptions from './HasOptions'

import { useBuilder } from '@store/Builder'
import { ThemeAttributes } from '@/utils/appTheme'

// import { convertBuilderToQueryString2 } from '../../utils/builderToQueryString'
// import RecentTweetsRepository from '../../api/modules/SearchTweets/RecentSearch/repository/implementation/RecentTweetsRepository'
// import RequestConfig from '../../api/modules/SearchTweets/RecentSearch/RequestConfig'

interface BuildTrackProps {
  theme: ThemeAttributes
}

const BuildTrack: React.FC<BuildTrackProps> = ({theme}) => {
  const {
    dataFilters,
    booleanFilters,
    contentFilters,
    addFilter,
    updateFilter,
    removeFilter,
    resetBuilder
  } = useBuilder((state) => state)

  const [enabledFilters] = useState<string[]>(['main', 'boolean', 'has'])

  const isEnabled = (filter: string): string | undefined =>
    enabledFilters.find((element: string) => element === filter)

  const resultCountOptions = [
    { value: '10', label: 'Até 10 resultados' },
    { value: '20', label: 'Até 20 resultados' },
    { value: '30', label: 'Até 30 resultados' }
  ]

  const searchByOptions = [
    { value: 'recency', label: 'Filtrar por atualidade' },
    { value: 'relevancy', label: 'Filtrar por relevância' }
  ]

  const isDisabledByRequired = (): boolean => {
    let isDataFiltersEmpty = true
    const isBooleanFiltersEmpty = booleanFilters.length === 0
    const isContentFiltersEmpty = contentFilters.length === 0

    dataFilters.map((item) => (isDataFiltersEmpty = item.values?.length === 0))

    return isDataFiltersEmpty && isBooleanFiltersEmpty && isContentFiltersEmpty
  }

  // async function handleFetch () {
  //   const { VITE_BEARER_TOKEN } = import.meta.env
  //   const string = convertBuilderToQueryString2({
  //     dataFilters,
  //     booleanFilters,
  //     contentFilters
  //   })
  //   const config = new RequestConfig(
  //     string,
  //     'recency',
  //     '10',
  //     `Bearer ${VITE_BEARER_TOKEN}`
  //   )
  //   const repository = new RecentTweetsRepository()

  //   const response = await repository.fetch(config)
  // }

  return (
    <div
      className="wrapper"
      style={{
        paddingTop: '1rem',
        paddingBottom: '1rem',
        color: theme.cardTextColor
      }}
    >
      <ModalHeader>
        <Column className="header-column" style={{color: theme.cardTextColor}}>
          <Title style={{color: theme.cardTextColor}}> Let&apos;s build your track! <Badge
            size="xs"
            fontSize={10}
            colorScheme="green"
            marginTop={-1}
            paddingTop={0.5}
          >
            V1
          </Badge></Title>
          <span
            style={{
              fontSize: 13,
              fontWeight: 'normal',
              color: theme.cardTextColor
            }}
          >
            Select some options and add some filters below to customize your
            results:
          </span>
        </Column>
        {/* <Tabs
          size="xs"
          variant="soft-rounded"
          className="tabs"
          colorScheme="pink"
          fontSize={12}
          paddingTop={2.5}
        >
          <TabList fontFamily="League Spartan">
            <Tab padding=".2rem 1rem">Busca Personalizada</Tab>
            <Tab padding=".2rem 1rem">Inserir Link</Tab>
            <Tab padding=".2rem 1rem">Buscar Timeline</Tab>
          </TabList>
        </Tabs> */}
      </ModalHeader>
      <ModalCloseButton onClick={() => resetBuilder()} />

      <ModalBody
        marginTop={-1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Column className="filters-column">
          {Boolean(isEnabled('main')) && (
            <MainOptions
              hasNext={booleanFilters.length > 0 || contentFilters.length > 0}
              data={dataFilters}
              onInputChange={(id, field, values) =>
                updateFilter(id, field, values, 'dataFilters')
              }
              onInputDelete={(id) => removeFilter(id, 'dataFilters')}
              onInputAdd={(input) => addFilter(input, 'dataFilters')}
              theme={theme}
            />
          )}
          {Boolean(isEnabled('boolean')) && (
            <IsOptions
              hasNext={contentFilters.length > 0}
              data={booleanFilters}
              onInputChange={(id, field, values) =>
                updateFilter(id, field, values, 'booleanFilters')
              }
              onInputDelete={(id) => removeFilter(id, 'booleanFilters')}
              onInputAdd={(input) => addFilter(input, 'booleanFilters')}
            />
          )}
          {Boolean(isEnabled('has')) && (
            <HasOptions
              hasNext={false}
              data={contentFilters}
              onInputChange={(id, field, values) =>
                updateFilter(id, field, values, 'contentFilters')
              }
              onInputDelete={(id) => removeFilter(id, 'contentFilters')}
              onInputAdd={(input) => addFilter(input, 'contentFilters')}
            />
          )}
        </Column>
      </ModalBody>
      {/* <ModalBody marginTop={0}>
        <Row>
          <Select
            options={resultCountOptions}
            defaultValue={resultCountOptions[0]}
            pageSize={5}
            className="select"
            isClearable={false}
          />
          <Select
            options={searchByOptions}
            defaultValue={searchByOptions[0]}
            pageSize={5}
            className="select"
            isClearable={false}
          />
        </Row>
      </ModalBody> */}
      <ModalFooter justifyContent="center">
        <Button
          size="xs"
          width="100%"
          variant="solid"
          colorScheme="pink"
          borderRadius={50}
          //leftIcon={<IoIosRocket size={18} />}
          marginTop={-2}
          disabled={isDisabledByRequired()}
          padding=" 1rem 0rem"
        >
          FINISH
        </Button>
      </ModalFooter>
    </div>
  )
}

export default BuildTrack
