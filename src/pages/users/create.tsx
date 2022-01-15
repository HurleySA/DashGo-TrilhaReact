import { Flex, VStack, Box, Divider, Input, Heading, SimpleGrid, HStack, Button, Checkbox, Tbody, Td, Text, FormLabel } from "@chakra-ui/react"
import { RiAddLine } from "react-icons/ri"
import { Header } from "../../components/Form/Header/Header"
import { Pagination } from "../../components/Form/Pagination"
import { SideBar } from "../../components/Form/Sidebar/Sidebar"

export default function UserCreate(){
    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <SideBar/>
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                        <Heading size="lg" fontWeight="normal" >Criar Usuário</Heading>
                        <Divider my="6" borderColor="gray.700" />
                        <VStack spacing="8" >
                           <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                                <Box>
                                    <FormLabel htmlFor='name'>Nome Completo</FormLabel>
                                    <Input name="name" id="name" placeholder="Nome Completo" />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor='email'>E-mail</FormLabel>
                                    <Input name="email" id="email" placeholder="E-mail"/>
                                </Box>
                                
                            </SimpleGrid> 
                           <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                                <Box>
                                    <FormLabel htmlFor='password'>Senha</FormLabel>
                                    <Input name="password" id="password" placeholder="E-mail"/>
                                </Box>
                                <Box>
                                    <FormLabel htmlFor='password_confimation'>Confirmação da senha</FormLabel>
                                    <Input name="password_confimation" id="password_confimation" type="password"  label="Confirmação da senha"  placeholder="Confirmação da senha"/>
                                </Box>
                            </SimpleGrid> 
                        </VStack>
                        <Flex mt="8" justify="flex-end">
                            <HStack spacing="4">
                                <Button colorScheme="whiteAlpha" >Cancelar</Button>
                                <Button colorScheme="red" >Salvar</Button>
                            </HStack>
                        </Flex> 

                    

                </Box>
            </Flex>
        </Box>
    )
}