import { Table, TableContainer, Tbody, Thead, Tr, Th, Td, Button, Box, useDisclosure } from "@chakra-ui/react";
import { insertPoint } from "../../hooks/insertPoint";
import { useState } from "react";
import MyModal from "../Modal";

function Grid({itemsPerPage, filteredData, admData, scoreData}) {

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure()

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  insertPoint(filteredData, scoreData)
  const ordenedData = filteredData.sort((a, b) => b.points - a.points).map((data, index) => {
    return {
      ...data,
      position: `${index + 1}º`,
    }
  });
  const currentItems = ordenedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(ordenedData.length / itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

    return (
     <> {filteredData.length > 0 ? 
        (<>
        <TableContainer width='100%'>
          <Table size='md' bgColor='#e6ce8c' maxW='1120px' margin='0 auto'>
            <Thead>
              <Tr>
                <Th>Ranking</Th>
                <Th>Nome</Th>
                <Th>Pontuação Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentItems.map((item, index) => (
                <Tr key={index} onClick={() => handleRowClick(item)}>
                  <Td>{item.position}</Td>
                  <Td onClick={onOpen}>{item.name}</Td>
                  <Td>{item.points}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Box
        display='flex'
        padding='10px'
        >
          <Button
          onClick={goToPreviousPage}
          isDisabled={currentPage === 1}
          marginRight='10px'
          >
            Anterior
          </Button>
          <Button
          onClick={goToNextPage}
          isDisabled={currentPage === totalPages}
          >
            Proxima
          </Button>
        </Box>
        <MyModal onClose={onClose} size='xl' isOpen={isOpen} selectedRow={selectedRow.bet} scoreData={scoreData} admData={admData}/>
      </>) : 
      (<Box textAlign="center" p={4} backgroundColor='white'>
      Nenhuma informação disponível.
      </Box>)
    }
    </>
    )
}
  export default Grid;
  