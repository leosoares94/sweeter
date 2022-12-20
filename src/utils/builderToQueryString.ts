interface Filter {
  id: string
  tagName: string
  values?: string[]
  includes: boolean
  condition: string
}

interface Builder {
  dataFilters: Filter[]
  booleanFilters: Filter[]
  contentFilters: Filter[]
}

export function convertBuilderToQueryString2 (builder: Builder) {
  const queryString = ''

  function convertFilter (string: string, filters: Filter[]) {
    filters.map((item, index) => {
      filters === builder.dataFilters
        ? item.values?.map(
          (value) =>
            (string += ` ${!item.includes ? '-' : ''}${
                value.includes('retweets')
                  ? value.replace(' ', '_').replace(': ', ':')
                  : value
              }`)
        )
        : null

      filters === builder.booleanFilters
        ? (string = ` ${item.includes ? '' : '-'}is:${item.tagName}`)
        : null

      filters === builder.contentFilters
        ? (string = ` ${item.includes ? '' : '-'}has:${item.tagName}`)
        : null
    })

    return string
  }

  return (
    convertFilter(queryString, builder.dataFilters) +
    convertFilter(queryString, builder.booleanFilters) +
    convertFilter(queryString, builder.contentFilters)
  )
}
