import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text } from '@chakra-ui/react'
import { ReactChild } from 'react'

interface ItemsTypes {
  title: string,
  content: ReactChild
}

interface AccordionListTypes {
  items: ItemsTypes[],
  withIndex?: boolean,
}

const AccordionList = ({ items, withIndex = false }: AccordionListTypes) => (
  <Accordion
    allowToggle
    w={'100%'}
  >
    {items && items.map((item: ItemsTypes, index: number) => (
      <AccordionItem
        key={item.title}
        w={'100%'}
      >
        <Text as={'h2'}>
          <AccordionButton px={0}>
            <Box
              flex='1'
              textAlign='left'
            >
              <Flex>
                {withIndex && <Text opacity={0.5} mr={2}>{(index < 10 ? '0' + index.toString() : index.toString())}</Text>}
                <Text>{item.title}</Text>
              </Flex>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel
          pb={4}
          px={0}
        >
          {item.content}
        </AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
)

export default AccordionList
