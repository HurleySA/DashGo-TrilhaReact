import { Flex, Icon, Box, Table, Button, Heading, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from "@chakra-ui/react"
import { RiAddLine } from "react-icons/ri"
import { Header } from "../../components/Form/Header"
import { Pagination } from "../../components/Form/Pagination"
import { SideBar } from "../../components/Form/Sidebar"

export default function UserList(){
    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <SideBar/>
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal" >Usuários</Heading>
                        <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiAddLine}></Icon>}>Criar Novo</Button>    

                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="red" />
                                </Th>
                                <Th>
                                    Usuários
                                </Th>
                                <Th>
                                    Data de cadastro
                                </Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                <Checkbox colorScheme="red" />
                                </Td>
                                <Td>
                                    <Box >
                                        <Text fontWeight="bold">Matheus Eduardo</Text>
                                        <Text fz="sm" color="gray.300">matheuselineudo@hotmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                        <Text fontWeight="bold">28 de Novembro, 2021</Text>
                                </Td>
                                <Td>
                                    <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiAddLine}></Icon>}>Editar</Button> 
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>

                </Box>
            </Flex>
        </Box>
    )
}