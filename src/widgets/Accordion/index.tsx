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
  nested?: boolean
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  icons,
  nested,
}) => {
  return (
    <ChakraProvider>
      <Container
        allowToggle={true}
        width="100%"
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '.5rem',
          marginTop: '.5rem',
          boxShadow: '1px 3px 10px rgba(221, 117, 117, 0.151)',
        }}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <AccordionItem sx={{ outline: 'none', border: 'none' }}>
              <h2
                style={{
                  fontFamily: 'League Spartan',
                  color: '#363636b2',
                }}
              >
                <AccordionButton border="none">
                  {Boolean(icons) && icons?.[index]}
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize=".9rem"
                    paddingTop=".25rem"
                    paddingLeft={icons != null ? '.4rem' : '0rem'}
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
