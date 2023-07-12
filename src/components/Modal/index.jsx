/* eslint-disable react/prop-types */
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Flex, Divider, Box, Text,Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import Score from '../Score';
import { useEffect } from 'react';

function MyModal(props) {
    const {
      onClose,
      size,
      isOpen,
      selectedRow,
      scoreData,
      admData,
    } = props;

    const verifyPoints = (team1, team2, result) => {
      if (scoreData.length > 0 && admData[0].result > 0){
        const comparisonGame = scoreData.find(
        bet => bet.team_one === team1 && bet.team_two === team2
      );
      const [time1Palpite, time2Palpite] = result.split(/x/i);
      const [time1Real, time2Real] = comparisonGame.result.split(/x/i);
  
      if (comparisonGame && comparisonGame.result === result) {
        return '10';
      } else if (comparisonGame && (time1Palpite === time2Palpite && time1Real === time2Real)) {
        return '7'
      } else {
        return '0'
      }
    }
  
      return '-';
    };

    return (
      <>
        <Modal onClose={onClose} size={size} isOpen={isOpen} scrollBehavior='inside'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Apostas do Jogador</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              { isOpen && selectedRow.length > 0 ? 
                          (<Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>Time 1</Th>
                  <Th>Time 2</Th>
                  <Th>Placar</Th>
                  <Th>Pontos</Th>
                </Tr>
              </Thead>
              <Tbody>
                {selectedRow.map((row, index) => (
                  <Tr key={index}>
                    <Td>{row.team_one}</Td>
                    <Td>{row.team_two}</Td>
                    <Td>{row.result}</Td>
                    <Td>{verifyPoints(row.team_one, row.team_two, row.result)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>) : 
             (
              <Text>
                Sem resultados por enquanto
              </Text>
            )
            }
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
  