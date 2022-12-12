import React from 'react'
import { Row } from './styles'

export interface TogglerProps {
  className?: string
  condition: string
}

const Toggler: React.FC<TogglerProps> = ({ condition }) => {
  return (
    <Row className="or-and-btn">
          - {condition.toUpperCase()} -
    </Row>

  )
}

export default Toggler
