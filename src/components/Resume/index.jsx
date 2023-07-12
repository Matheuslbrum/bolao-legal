import { Box, Spinner } from '@chakra-ui/react';
import ResumeItem from '../ResumeItem';

function Resume(props) {
  const {
    userApiData,
    admApiData,
  } = props;

  function calcularPorcentagens(total, valor1) {
    const percentual = (valor1 / 100) * total;
    const percentualToFloat = parseFloat(percentual.toFixed(2));
    return percentualToFloat;
  }

  const userCount = userApiData.length * 10;

    return (
      <>
        <Box 
        maxW='1120px' 
        width='98%' 
        margin='0 auto' 
        display='flex' 
        gap='20px' 
        marginTop='-25px' 
        justifyContent='space-around' 
        paddingBottom='50px'
        flexWrap='wrap'
        >
          <ResumeItem textOnBox={"Número de Participantes"} numberOnBox={userApiData.length || 0} isDoubleText textOnDoubleBox={'Valor Total'} numberOnDoubleBox={(userApiData.length * 10).toFixed(2) || 0.00}/>
          {admApiData.length > 0 ? (
            <>
            <ResumeItem textOnBox={`Primeiro Prêmio (${admApiData[0].first_prize_percentage}%)`} numberOnBox={calcularPorcentagens(userCount, admApiData[0].first_prize_percentage)} isDoubleText textOnDoubleBox={`Segundo Premio(${admApiData[0].second_prize_percentage}%)`} numberOnDoubleBox={calcularPorcentagens(userCount, admApiData[0].second_prize_percentage)}/>
            <ResumeItem textOnBox={`Despesas (${admApiData[0].expenses_percentage}%)`} numberOnBox={calcularPorcentagens(userCount, admApiData[0].expenses_percentage)} isDoubleText textOnDoubleBox={`Fundo (${admApiData[0].pool_admin_percentage}%)`} numberOnDoubleBox={calcularPorcentagens(userCount, admApiData[0].pool_admin_percentage)}/>
            </>
          ) : (
            <ResumeItem textOnBox={`Primeiro Prêmio (25%)`} numberOnBox={0} isDoubleText textOnDoubleBox={`Segundo Premio (25%)`} numberOnDoubleBox={0}/>
          )}
        </Box>
    </>
    )
  }
  
  export default Resume;
  