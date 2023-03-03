import { ThemeAttributes } from '@/utils/appTheme'
import React from 'react'
import { Row } from './styles'

export interface TogglerProps {
  className?: string
  condition: string
  theme?: ThemeAttributes
}

const Toggler: React.FC<TogglerProps> = ({ condition, theme }) => {
  return (
    <Row className="or-and-btn" theme={theme}>
          - {condition.toUpperCase()} -
    </Row>

  )
}

export default Toggler
