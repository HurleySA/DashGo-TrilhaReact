import { Flex, VStack, Box, Divider, Input, Heading, SimpleGrid, HStack, Button, Checkbox, Tbody, Td, Text, FormLabel } from "@chakra-ui/react"
import { Header } from "../../components/Header/Header"
import { SideBar } from "../../components/Sidebar/Sidebar"
import Link from "next/link";

export default function UserCreate(){
    return(
        <Box>
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <SideBar/>
                <Box flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
                        <Heading size="lg" fontWeight="normal" >Criar Usuário</Heading>
                        <Divider my="6" borderColor="gray.700" />
                        <VStack spacing="8" >
                           <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                                <Box>
                                    <FormLabel htmlFor='name'>Nome Completo</FormLabel>
                                    <Input name="name" id="name" placeholder="Nome Completo" />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor='email'>E-mail</FormLabel>
                                    <Input name="email" id="email" placeholder="E-mail"/>
                                </Box>
                                
                            </SimpleGrid> 
                           <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
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
                        <Flex mt="8" justify={["center", "flex-end"]}>
                            <HStack spacing="4">
                                <Link href="/users" passHref>
                                    <Button colorScheme="whiteAlpha" >Cancelar</Button>
                                </Link>
                                <Button colorScheme="red" >Salvar</Button>
                            </HStack>
                        </Flex> 

                    

                </Box>
            </Flex>
        </Box>
    )
}