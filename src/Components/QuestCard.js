import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react"

function QuestCard(props) {
  return (
    <Card maxW='md' boxShadow='2xl'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name={props.issuer} />

        <Box>
          <Heading size='sm'>{props.issuer}</Heading>
          <Text>{props.job}</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        // icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      {props.act}
    </Text>
  </CardBody>
  <Image
    objectFit='cover'
    src={props.image}
    alt='Chakra UI'
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    
    <Button flex='1' variant='ghost' >
      Like
    </Button>
    <Button flex='1' variant='ghost' >
      Comment
    </Button>
    <Button flex='1' variant='ghost' >
      Share
    </Button>
  </CardFooter>
  <Divider bg="gray.200" mb="20px"></Divider>
</Card>

  )
}

export default QuestCard;