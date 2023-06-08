import { FiSearch } from "react-icons/fi"
import { Input, Button, Box, Text, useBreakpointValue} from "@chakra-ui/react"
import Grid from "../Grid"
function Form() {

  const display = useBreakpointValue({base: 'flex', mg: 'grid'}, {fallback: 'lg'})

  const data = [
    {
      name: "Objeto 1",
      status: "Ativo",
      pt: 1
    },
    {
      name: "Objeto 2",
      status: "Inativo",
      pt: 2
    },
    {
      name: "Objeto 3",
      status: "Ativo",
      pt: 3
    },
    {
      name: "Objeto 4",
      status: "Inativo",
      pt: 4
    },
    {
      name: "Objeto 5",
      status: "Ativo",
      pt: 5
    },
    {
      name: "Objeto 6",
      status: "Inativo",
      pt: 6
    },
    {
      name: "Objeto 7",
      status: "Ativo",
      pt: 7
    },
    {
      name: "Objeto 8",
      status: "Inativo",
      pt: 8
    },
    {
      name: "Objeto 9",
      status: "Ativo",
      pt: 9
    },
    {
      name: "Objeto 10",
      status: "Inativo",
      pt: 10
    },
    {
      name: "Objeto 11",
      status: "Ativo",
      pt: 11
    },
    {
      name: "Objeto 12",
      status: "Inativo",
      pt: 12
    },
    {
      name: "Objeto 13",
      status: "Ativo",
      pt: 13
    },
    {
      name: "Objeto 14",
      status: "Inativo",
      pt: 14
    },
    {
      name: "Objeto 15",
      status: "Ativo",
      pt: 15
    },
    {
      name: "Objeto 16",
      status: "Inativo",
      pt: 16
    },
    {
      name: "Objeto 17",
      status: "Ativo",
      pt: 17
    },
    {
      name: "Objeto 18",
      status: "Inativo",
      pt: 18
    },
    {
      name: "Objeto 19",
      status: "Ativo",
      pt: 19
    },
    {
      name: "Objeto 20",
      status: "Inativo",
      pt: 20
    }
  ];

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
        p='15px 0px' 
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
            />
          </Box>
          <Button 
          colorScheme='teal' 
          variant='solid' 
          rightIcon={<FiSearch/>}
          >
                Pesquisar
          </Button>
        </Box>
        <Grid itemsPerPage={10} data={data}/>
      </Box>
    </>
  )
}

export default Form

