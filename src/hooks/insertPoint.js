export const insertPoint = async (array1, array2) => {
  if(array1.length > 0 && array2.length > 0) {
    await array1.forEach((objetoPai) => {
      let pontos = 0;
      objetoPai.bet.forEach((objetoFilho, index) => {
        const objeto2 = array2[index];
        const [time1Palpite, time2Palpite] = objetoFilho.result.split('x');
        const [time1Real, time2Real] = objeto2.result.split('x');
  
        if (time1Palpite === time1Real && time2Palpite === time2Real) {
          pontos += 10;
        } else if (
          (time1Palpite > time2Palpite && time1Real > time2Real) ||
          (time1Palpite < time2Palpite && time1Real < time2Real) 
        ) {
          pontos += 7;
        } else if (time1Palpite === time2Palpite && time1Real === time2Real) {
          pontos += 5;
        } else {
          pontos += 0;
        }
      });
      objetoPai.points = pontos;
    });
    return;
  }
  return array1;
}