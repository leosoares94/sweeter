import { Row } from './styles';
import { Tooltip, Button } from '@chakra-ui/react';

export interface TogglerProps {
  condition: string;
  onClick: () => void;
}

const Toggler = ({ condition, onClick }: TogglerProps) => {
  return (
    <Row className="or-and-btn">
      <Tooltip label="Clique para alternar entre E e OU" aria-label='A tooltip'>
        <Button
          size="xs"
          width="100%"
          variant="ghost"
          colorScheme="pink"
          borderRadius={100}
          iconSpacing={0}
          onClick={onClick}
          height={4}
        >
          - {condition.toUpperCase()} -
        </Button>
      </Tooltip>
    </Row>

  )
}

export default Toggler;