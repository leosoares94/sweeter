import React from 'react'
import { ChakraProvider, Tag, TagLabel } from '@chakra-ui/react'

interface BadgeTypes {
  type: string
  value: string
  className?: string
}

const Badge: React.FC<BadgeTypes> = ({ type, value, className }) => {
  return (
    <ChakraProvider>
      <Tag
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        size={window.matchMedia('max-width: 1368') ? 'sm' : 'md'}
        colorScheme={type === 'mention' ? 'purple' : 'red'}
        borderRadius="full"
        className={className}
      >
        <TagLabel>
          {type === 'mention' ? '@' : '#'}
          {value}
        </TagLabel>
      </Tag>
    </ChakraProvider>
  )
}

export default Badge
