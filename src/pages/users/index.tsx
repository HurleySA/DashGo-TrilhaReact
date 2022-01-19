import { Flex, Icon, Box, Table, Button, Heading, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, Spinner } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Header } from "../../components/Header/Header"
import { Pagination } from "../../components/Pagination/Pagination"
import { SideBar } from "../../components/Sidebar/Sidebar"
import Link from "next/link";
import { useUsers } from "../../hooks/useUsers"

export default function UserList(){
    const {data, isLoading, isFetching ,error} = useUsers();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <SideBar/>
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            {!isLoading &&  isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
                        </Heading>
                        <Link href="/users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiAddLine}></Icon>}>Criar Novo</Button>    
                        </Link>
                        
                    </Flex>

                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner/>
                        </Flex>
                    ) : error ?(
                        <Flex justify="center">
                            <Text>Erro ao carregar os dados.</Text>
                        </Flex>
                    ) : (
                        <>
                           <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="red" />
                                </Th>
                                <Th>
                                    Usuários
                                </Th>
                                {isWideVersion &&  <Th>
                                    Data de cadastro
                                </Th>}
                               
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map(user => 
                                (<Tr key={user.id}>
                                <Td px={["4", "4", "6"]}>
                                <Checkbox colorScheme="red" />
                                </Td>
                                <Td>
                                    <Box >
                                        <Text fontWeight="bold">{user.name}</Text>
                                        <Text fz="sm" color="gray.300">{user.email}</Text>
                                    </Box>
                                </Td>
                                <Td>
                                {isWideVersion &&  <Text fontWeight="bold">{user.createdAt}</Text>}
                                </Td>
                                <Td>
                                    <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiPencilLine}></Icon>}>{isWideVersion && 'Editar'}</Button> 
                                </Td>
                            </Tr>)
                            ) }
                        </Tbody>
                    </Table>
                    <Pagination/>
                        </>
                    )
                    }

                </Box>
            </Flex>
        </Box>
    )
}