import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import Map from './component/map';

import {useJsApiLoader} from '@react-google-maps/api'


function App() {

  
  return (
    //flex: a box with display:flex & renders 'div' element 
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='100vh'
      w='100vw'
      bg={'white'}

      >
      <Map/>
   {/*  <Box postion='absolute' left={0} top={0} h='100%' w='100%'>
      {/*googlemap box container */}
      

  {/*   </Box> */}

{/*User Input Options box container */}
    <Box 
      p={4}
      borderRadius='lg'
      m={4}
      bgColor='white'
      shadow='base'
      minW='container.md'
      zIndex='1'
      bg={'white'}
      >
    {/*Hstack : stack elements in horizontal way */}
    <HStack spacing={4}>
      <Input type='text' placeholder='Origin' />
      <Input type='text' placeholder='Destination' />
      <ButtonGroup>
        {/*calculate route pink button */}
        <Button colorScheme='pink' type='submit'> 
        Calculate Route 
        </Button>
        {/*cancel button (x) */}
        <IconButton
          aria-label='center back'
          icon={<FaTimes />}
          onClick={() => alert(123)}
        />
      </ButtonGroup>
    </HStack>
    <HStack spacing={4} mt={4} justifyContent='space-between'>
      <Text> Distance: </Text>
      <Text> Duration </Text>

      {/*arrow pointer button */}
      <IconButton 
        aria-label='center back'
        icon={<FaLocationArrow />}
        isRound
        onClick={() => alert(123)}
        />
 
    </HStack>
  </Box>
</Flex>
  
  );
}

export default App;
