import { Flex, VStack, Box, Divider, Input, Heading, SimpleGrid, HStack, Button, Checkbox, Tbody, Td, Text } from "@chakra-ui/react"
import { RiAddLine } from "react-icons/ri"
import { Header } from "../../components/Form/Header"
import { Pagination } from "../../components/Form/Pagination"
import { SideBar } from "../../components/Form/Sidebar"

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
                                <Input name="name" label="Nome Completo"/>
                                <Input name="email" label="E-mail"/>
                            </SimpleGrid> 
                           <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                                <Input name="password"  type="password" label="Senha"/>
                                <Input name="password_confimation" type="password"  label="Confirmação da senha"/>
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