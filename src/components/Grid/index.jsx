import { Table, TableContainer, Tbody, Thead, Tr, Th, Td, Button, Box, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import MyModal from "../Modal";

function Grid({itemsPerPage, data}) {
  const [currentPage, setCurrentPage] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

    return (
      <>
        <TableContainer width='100%'>
          <Table size='md' bgColor='#e6ce8c' maxW='1120px' margin='0 auto'>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Status</Th>
                <Th >Pontuação Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentItems.map((item, index) => (
                <Tr key={index}>
                  <Td onClick={onOpen}>{item.name}</Td>
                  <Td>{item.status}</Td>
                  <Td>{item.pt}</Td>
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
        <MyModal onClose={onClose} size='xl' isOpen={isOpen}/>
      </>
    )
  }
  
  export default Grid;
  