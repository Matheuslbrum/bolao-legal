/* eslint-disable react/prop-types */
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Flex, Divider, Box, Text} from '@chakra-ui/react';
import Score from '../Score';

function MyModal(props) {
    const {
      onClose,
      size,
      isOpen,
      selectedRow,
      scoreData,
      admData,
    } = props;

    return (
      <>
        <Modal onClose={onClose} size={size} isOpen={isOpen} scrollBehavior='inside'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Apostas do Jogador</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex justify="space-evenly" flexWrap='wrap' width='100%'>
                  { selectedRow  ?
                  ( selectedRow.map((row, index) => (
                    <Score key={index}
                    teamOne={row.team_one}
                    teamTwo={row.team_two}
                    result={row.result}
                    width='15rem'
                    />
                  ))
                ) : (
                  <Text>
                    Sem resultados por enquanto
                  </Text>
                )
                }
              </Flex>
                    <Divider my='5'/>
                    <Box paddingBottom='1rem'>
                      <Text fontSize='1.25rem' fontWeight='semibold'>
                        Resultado da Temporada
                      </Text>
                    </Box>
                      <Flex justify="space-evenly" flexWrap='wrap' width='100%'>
                        {scoreData.length > 0 ? 
                        (scoreData.map((score) => (
                          <Score key={score.id}
                          teamOne={score.team_one}
                          teamTwo={score.team_two}
                          result={score.result}
                          width='15rem'
                          />
                          ))) : (
                            <Text>
                              Sem resultados por enquanto
                            </Text>
                          )}                
                      </Flex>
                      <Divider my='5'/>
                      <Box paddingBottom='1rem'>
                          <Text fontSize='1.25rem' fontWeight='semibold'>
                          Legenda da Pontuação
                          </Text>
                      </Box>
                      <Flex justify="space-evenly" alignItems='center' flexWrap='wrap' width='100%'>
                        {admData.length > 0 ?
                       ( <>
                        <Text width='12rem'>Placar certo: {admData[0].correct_score} Pontos</Text>
                        <Text>Errou o placar mas acertou quem ganhou: {admData[0].partially_wrong_score} Pontos</Text>            
                        <Text>Placar com empate: {admData[0].draw_score} Pontos</Text>            
                        <Text>Errou o placar e errou quem ganhou: {admData[0].completely_wrong_score} Pontos</Text>  
                        </>
                        ) : 
                        (
                          <Text>
                          Sem resultados por enquanto
                        </Text>
                        )
                        }          
                      </Flex>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  
  export default MyModal;
  