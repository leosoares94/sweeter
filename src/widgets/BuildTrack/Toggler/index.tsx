import { Row } from './styles';

export interface TogglerProps {
  className?: string;
  condition: string;
}

const Toggler = ({ condition }: TogglerProps) => {
  return (
    <Row className="or-and-btn">
          - {condition.toUpperCase()} -
    </Row>

  )
}

export default Toggler;