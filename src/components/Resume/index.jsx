import { Box, Spinner } from '@chakra-ui/react';
import ResumeItem from '../ResumeItem';

function Resume(props) {
  const {
    userApiData,
    admApiData,
  } = props;

  const information = false;

  console.log(admApiData)

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
          <ResumeItem textOnBox={"Número de Participantes"} numberOnBox={userApiData.length || 0} isDoubleText textOnDoubleBox={'Valor Total'} numberOnDoubleBox={userApiData.length * 10 || 0}/>
          {
            information &&
            <ResumeItem textOnBox='Vencedor em 1º' numberOnBox='João' isDoubleText textOnDoubleBox={'Vencedor em 2º'} numberOnDoubleBox={'Zeze'}/>
          }
          {admApiData.length > 0 ? (
            <ResumeItem textOnBox={`Primeiro Prêmio (${admApiData[0].first_prize_percentage}%)`} numberOnBox={(admApiData[0].first_prize_percentage / 100) * userApiData.length * 10} isDoubleText textOnDoubleBox={`Segundo Premio(${admApiData[0].second_prize_percentage}%)`} numberOnDoubleBox={(((admApiData[0].first_prize_percentage / 100) * userApiData.length * 10) * admApiData[0].second_prize_percentage) / 100}/>
          ) : (
            <ResumeItem textOnBox={`Primeiro Prêmio (25%)`} numberOnBox={0} isDoubleText textOnDoubleBox={`Segundo Premio (25%)`} numberOnDoubleBox={0}/>
          )}
        </Box>
    </>
    )
  }
  
  export default Resume;
  