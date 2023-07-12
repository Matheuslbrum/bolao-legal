export const insertPoint = async (array1, array2, admData) => {
  if(array1.length > 0 && array2.length > 0 && admData[0].result > 0) {
    await array1.forEach((objetoPai) => {
      let pontos = 0;
      if(objetoPai.bet.length > 0) {
        objetoPai.bet.forEach((objetoFilho, index) => {
          const objeto2 = array2[index];
          const comparisonGame = array2.find(
            bet => objetoFilho.team_one ===  bet.team_one && objetoFilho.team_two === bet.team_two
          );
          const [time1Palpite, time2Palpite] = objetoFilho.result.split(/x/i);
          const [time1Real, time2Real] = objeto2.result.split(/x/i);
    
          if (comparisonGame && objetoFilho.result === comparisonGame.result) {
            pontos += 10;
          } else if (
            comparisonGame && (time1Palpite === time2Palpite && time1Real === time2Real)
          ) {
            console.log('teste')
            pontos += 7;
          } else {
            pontos += 0;
          }
        });
      }
      objetoPai.points = pontos;
    });
    return;
  }
  return array1;
}