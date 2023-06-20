import { Input, Box, Text, useBreakpointValue} from "@chakra-ui/react"
import Grid from "../Grid"
import { useState } from "react"

function Form({userData, admData, scoreData}) {

  const display = useBreakpointValue({base: 'flex', mg: 'grid'}, {fallback: 'lg'})
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = userData.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Box
        borderRadius='5px'
        boxShadow='base'
        display={display} 
        maxW='1120px' 
        m='20px auto' 
        w="98%" 
        bgColor='#fff' 
        p='15px 15px' 
        justifyContent='space-evenly' 
        gap='10px'
        alignItems='center'
        >
          <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='center'
          width='75%'
          >
            <Text 
            marginRight='10px' 
            width='25%'
            >
              Nome do Jogador:
            </Text>
            <Input 
            width='75%'
            placeholder='Ex: joão da vila'
            value={searchTerm}
            onChange={handleSearchTermChange}
            />
          </Box>
        </Box>
        <Grid itemsPerPage={10} filteredData={filteredData} scoreData={scoreData} admData={admData} />
      </Box>
    </>
  )
}

export default Form

