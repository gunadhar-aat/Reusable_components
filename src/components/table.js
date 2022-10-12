import React from "react";
import {
  Table,
  Box,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Center,
  Stack,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const table = ({ data, col }) => {
  return (
    <Center>
      <Box>
        <Input placeholder="Search" />
        <TableContainer>
          <Table variant="striped" colorScheme={"pink"} size={"md"}>
            <Tbody>
              <Tr>
                {col?.map((item) => (
                  <Th>{item}</Th>
                ))}
              </Tr>
              {data?.map((row) => (
                <Tr>
                  {col?.map((item) => {
                    return <Td>{row[item]}</Td>;
                  })}
                  <Td>
                    <Stack spacing={4} direction="row" align="center">
                      <IconButton
                        aria-label="edit data"
                        colorScheme="teal"
                        icon={<AiFillEdit />}
                        onClick={() => {}}
                      />
                      <IconButton
                        aria-label="delete data"
                        colorScheme="teal"
                        icon={<AiFillDelete />}
                        onClick={() => {}}
                      />
                    </Stack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Center>
  );
};

export default table;
