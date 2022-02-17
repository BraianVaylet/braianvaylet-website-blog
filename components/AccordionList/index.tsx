import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text } from '@chakra-ui/react'
import { ReactChild } from 'react'

interface ItemsPropsTypes {
  title: string,
  content: ReactChild
}

interface AccordionListPropsTypes {
  items: ItemsPropsTypes[],
  withIndex?: boolean,
  withContent?: boolean
}

const AccordionList = ({ items, withIndex = false, withContent = true }: AccordionListPropsTypes) => (
  <Accordion
    allowToggle
    w={'100%'}
  >
    {items && items.map((item: ItemsPropsTypes, index: number) => (
      <AccordionItem
        key={item.title}
        w={'100%'}
      >
        <Text>
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
            {withContent && <AccordionIcon />}
          </AccordionButton>
        </Text>
        {withContent && (
          <AccordionPanel
            pb={4}
            px={0}
          >
            {item.content}
          </AccordionPanel>
        )}
      </AccordionItem>
    ))}
  </Accordion>
)

export default AccordionList
