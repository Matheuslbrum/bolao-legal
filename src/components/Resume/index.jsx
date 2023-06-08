import { Box } from '@chakra-ui/react';
import ResumeItem from '../ResumeItem';

function Resume() {
    return (
      <>
        <Box 
        maxW='1120px' 
        width='98%' 
        margin='0 auto' 
        display='flex' 
        gap='20px' 
        marginTop='-50px' 
        justifyContent='space-around' 
        paddingBottom='50px'
        flexWrap='wrap'
        >
          <ResumeItem textOnBox={"Número de Participantes"} numberOnBox={50} isDoubleText textOnDoubleBox={'Prêmio acumulado'} numberOnDoubleBox={'520000'}/>
          <ResumeItem textOnBox='Vencedor em 1º' numberOnBox='João' isDoubleText textOnDoubleBox={'Vencedor em 2º'} numberOnDoubleBox={'Zeze'}/>
          <ResumeItem textOnBox='Primeiro Premio (75%)' numberOnBox='50000' isDoubleText textOnDoubleBox={'Segundo Premio(25%)'} numberOnDoubleBox={'2000'}/>
        </Box>
    </>
    )
  }
  
  export default Resume;
  