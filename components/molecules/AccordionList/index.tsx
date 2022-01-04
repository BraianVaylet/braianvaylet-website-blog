import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ItemsTypes {
  title: string,
  content: ReactNode | string
}

interface AccordionListTypes {
  items: ItemsTypes[]
}

const AccordionList = ({ items }: AccordionListTypes) => (
  <Accordion
    allowToggle
    w={'100%'}
  >
    {items && items.map((item: ItemsTypes) => (
      <AccordionItem
        key={item.title}
        w={'100%'}
      >
        <Text as={'h2'}>
          <AccordionButton>
            <Box
              flex='1'
              textAlign='left'
            >
              {item.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={4}>
          {item.content}
        </AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
)

export default AccordionList
