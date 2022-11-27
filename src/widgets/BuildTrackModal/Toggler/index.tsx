import { Row } from './styles';
import { Tooltip, Button } from '@chakra-ui/react';

export interface TogglerProps {
  className?: string;
  condition: string;
  onClick: () => void;
}

const Toggler = ({ condition, className, onClick }: TogglerProps) => {
  return (
    <Row className="or-and-btn">
          - {condition.toUpperCase()} -
    </Row>

  )
}

export default Toggler;