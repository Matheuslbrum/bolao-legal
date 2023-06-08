import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Flex, Divider, Box, Text} from '@chakra-ui/react';
import Score from '../Score';

function MyModal(props) {
    const {
      onClose,
      size,
      isOpen,
      //playerBet
    } = props;

    const playerBet = [
      {
        id: 1,
        teamOneLinkImg: 'link1',
        teamOne: 2,
        teamTwoLinkImg: 'link2',
        teamTwo: 1
      },
      {
        id: 2,
        teamOneLinkImg: 'link3',
        teamOne: 0,
        teamTwoLinkImg: 'link4',
        teamTwo: 2
      },
      {
        id: 3,
        teamOneLinkImg: 'link5',
        teamOne: 3,
        teamTwoLinkImg: 'link6',
        teamTwo: 1
      },
      {
        id: 4,
        teamOneLinkImg: 'link7',
        teamOne: 1,
        teamTwoLinkImg: 'link8',
        teamTwo: 1
      },
      {
        id: 5,
        teamOneLinkImg: 'link9',
        teamOne: 2,
        teamTwoLinkImg: 'link10',
        teamTwo: 0
      },
      {
        id: 6,
        teamOneLinkImg: 'link11',
        teamOne: 0,
        teamTwoLinkImg: 'link12',
        teamTwo: 3
      }
    ];

    return (
      <>
        <Modal onClose={onClose} size={size} isOpen={isOpen} scrollBehavior='inside'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Apostas do Jogador</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex justify="space-evenly" flexWrap='wrap' width='100%'>
                {playerBet.map((score) => (
                  <Score key={score.id}
                  teamOne='Vasco'
                  scoreOne={score.teamOne}
                  teamTwo='Flamengo'
                  scoreTwo={score.teamTwo}
                  width='15rem'
                  />
                ))}                    
              </Flex>
              <Divider my='5'/>
              <Box paddingBottom='1rem'>
                  <Text fontSize='1.25rem' fontWeight='semibold'>
                    Resultado da Temporada
                  </Text>
              </Box>
              <Flex justify="space-evenly" flexWrap='wrap' width='100%'>
                {playerBet.map((score) => (
                  <Score key={score.id}
                  teamOne='Vasco'
                  scoreOne={score.teamOne}
                  teamTwo='Flamengo'
                  scoreTwo={score.teamTwo}
                  width='15rem'
                  />
                ))}                
              </Flex>
              <Divider my='5'/>
              <Box paddingBottom='1rem'>
                  <Text fontSize='1.25rem' fontWeight='semibold'>
                   Legenda da Pontuação
                  </Text>
              </Box>
              <Flex justify="space-evenly" alignItems='center' flexWrap='wrap' width='100%'>
                <Text width='12rem'>Placar certo: {} Pontos</Text>
                <Text>Errou o placar mas acertou quem ganhou: {} Pontos</Text>            
                <Text>Placar com empate: {} Pontos</Text>            
                <Text>Errou o placar e errou quem ganhou: {} Pontos</Text>            
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
  