import { Flex, Icon, Box, Table, Button, Heading, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, Spinner, Link } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Header } from "../../components/Header/Header"
import { SideBar } from "../../components/Sidebar/Sidebar"
import NextLink from "next/link";
import { useUsers } from "../../hooks/useUsers"
import { PaginationItem } from "../../components/Pagination/PaginationItem";
import { Pagination } from "../../components/Pagination/Pagination";
import { useState } from "react";
import { queryCliente } from "../../services/mirage/queryCliente";
import { api } from "../../services/api";

export default function UserList(){
    const [page, setPage] = useState(1);
    const {data, isLoading, isFetching ,error} = useUsers(page);
    console.log(data)
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    async function handlePrefetchUser(userId: string){
        await queryCliente.prefetchQuery(['user',userId], async () =>{
            const response = await api.get(`users/${userId}`)
            return response.data;
        },{
            staleTime:1000*60*10,
        })
    }
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
                        <NextLink href="/users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiAddLine}></Icon>}>Criar Novo</Button>    
                        </NextLink>
                        
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
                            {data.users.map(user => 
                                (<Tr key={user.id}>
                                <Td px={["4", "4", "6"]}>
                                <Checkbox colorScheme="red" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                                            <Text fontWeight="bold">{user.name}</Text>
                                        </Link>
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
                    <Pagination totalCountOfRegisters={data.totalCount} currentPage={page} onPageChange={setPage}/>
                    </>
                    )
                    }

                </Box>
            </Flex>
        </Box>
    )
}
