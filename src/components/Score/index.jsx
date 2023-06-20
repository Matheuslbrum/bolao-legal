import { Box, Text } from '@chakra-ui/react';

function Score(props) {
    const {
      teamOne,
      teamTwo,
      result,
      width
    } = props;
    return (
      <>
        <Box display='flex' justifyContent='center' alignItems='center' width={width} marginBottom='10px'>
          <Text marginRight='5px'>{teamOne}</Text>
          <Text fontSize='md'>{result}</Text>
          <Text marginLeft='5px'>{teamTwo}</Text>
        </Box>
      </>
    )
  }
  
  export default Score;
  