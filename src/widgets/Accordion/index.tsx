import React from 'react'

import {
  Box,
  Accordion as Container,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ChakraProvider,
} from '@chakra-ui/react'

interface AccordionProps {
  title: string[]
  children: React.ReactNode
  icons?: React.ReactNode[]
}

const Accordion: React.FC<AccordionProps> = ({ title, children, icons }) => {
  return (
    <ChakraProvider>
      <Container
        allowToggle={true}
        width="100%"
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '.5rem',
        }}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <AccordionItem sx={{ outline: 'none', border: 'none' }}>
              <h2
                style={{
                  fontFamily: 'League Spartan',
                  color: '#ff3672',
                }}
              >
                <AccordionButton border="none">
                  {Boolean(icons) && icons![index]}
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize=".9rem"
                    paddingTop=".25rem"
                    paddingLeft={Boolean(icons) && ('.4rem' as any)}
                  >
                    {title[index]}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{child}</AccordionPanel>
            </AccordionItem>
          )
        })}
      </Container>
    </ChakraProvider>
  )
}

export default Accordion
