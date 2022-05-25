//profile
import { Avatar, AvatarBadge, AvatarGroup,WrapItem,Box,Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
const Form = () => {

  return (
    <>
  
  <Grid templateColumns='repeat(2, 1fr)' gap={2} >
  <Grid templateRows='repeat(2, 1fr)' gap={10}>
  <WrapItem>
  <Box m={[20,20]}>
    <Text fontSize='xl' pl={20} pt={20}>Name</Text>
  </Box>
  </WrapItem>
  </Grid>
  <Grid templateRows='repeat(2, 1fr)' gap={10}>
  <Box m={[5,20]}>
    <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/prosper-baba' />{' '}
  </Box>
  </Grid>
</Grid>
    </>
  )
}

export default Form;