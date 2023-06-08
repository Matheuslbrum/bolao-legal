import { Box, Text, Image } from '@chakra-ui/react';

function Score(props) {
    const {
      teamOne,
      teamTwo,
      scoreOne,
      scoreTwo,
      width
    } = props;
    return (
      <>
        <Box display='flex' justifyContent='center' alignItems='center' width={width} marginBottom='10px'>
          <Text marginRight='5px'>{teamOne}</Text>
          <Text fontSize='md'>{scoreOne} X {scoreTwo}</Text>
          <Text marginLeft='5px'>{teamTwo}</Text>
        </Box>
      </>
    )
  }
  
  export default Score;
  