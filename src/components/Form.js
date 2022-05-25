import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Select,
    Text,
    FormHelperText,
    Input
  } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'
const Form = () => {

  return (
    <>
  
  <Grid templateColumns='repeat(3, 1fr)' gap={2} >
  <Grid templateRows='repeat(2, 1fr)' gap={10}></Grid>
  <Grid templateRows='repeat(10, 1fr)' gap={10}>
  <GridItem w='100%' h='10'  m={3}><Text fontSize='xl'>Student Form</Text></GridItem>
  <GridItem w='100%' h='10'  m={3}>
      <FormControl isRequired>
        <FormLabel htmlFor='name'>Name</FormLabel>
        <Input id='name' type='name' />
      </FormControl> 
 </GridItem>
 <GridItem w='100%' h='10'  m={3}>
      <FormControl isRequired>
        <FormLabel htmlFor='regNo'>Register No.</FormLabel>
        <Input id='regNo' type='regNo' />
      </FormControl> 
 </GridItem>
 <GridItem w='100%' h='10' m={3}>
      <FormControl isRequired>
        <FormLabel htmlFor='batch'>Batch</FormLabel>
        <FormHelperText>For example: 2019-2023</FormHelperText>
        <Input id='batch' type='batch' />
        
      </FormControl> 
 </GridItem>
 <GridItem w='100%' h='10'  m={3} >
      <FormControl isRequired>
        <FormLabel htmlFor='dept'>Department</FormLabel>     
            <Select id='dept' placeholder='Select Department'>
                <option>CSE</option>
                <option>ECE</option>
            </Select>
      </FormControl> 
 </GridItem>
  <GridItem w='100%' h='10' m={3}>
  <FormControl isRequired>
        <FormLabel htmlFor='email'>Email address</FormLabel>
        <Input id='email' type='email' />
    </FormControl>
  </GridItem>
  <GridItem w='100%' h='10'  m={3}>
      <FormControl isRequired>
        <FormLabel htmlFor='project'>Project Title</FormLabel>
        <Input id='Project' type='Project' />
      </FormControl> 
 </GridItem>
  <GridItem w='100%' h='10'  m={3}>
      <FormControl isRequired>
        <FormLabel htmlFor='domain'>Domain</FormLabel>
        <Input id='domain' type='domain' />
      </FormControl> 
 </GridItem>
  
  </Grid>
  <Grid templateRows='repeat(2, 1fr)' gap={10}></Grid>
</Grid>
    </>
  )
}

export default Form;