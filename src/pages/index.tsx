
import { Flex, FormControl, Stack, FormLabel, Input, Button } from "@chakra-ui/react"
export default function Home() {
  return (
    <Flex h="100vh" w="100vw" alignItems="center" justifyContent="center">
      <Flex width="100%" maxW={360} bg="gray.800" p="8" border={8} flexDir="column" >
        <Stack spacing="4" > 
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="text" name="email" id="email" focusBorderColor="red.500" bgColor="gray.900" _hover={{bgColor:"gray.900"}} size="lg" />  
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="senha">Senha</FormLabel>
            <Input type="password" name="senha" id="senha" focusBorderColor="red.500" bgColor="gray.900" _hover={{bgColor:"gray.900"}} size="lg" />  
          </FormControl>
        </Stack>
        <Button type="submit" mt="6" colorScheme="red" size="lg"> Enviar</Button>
      </Flex>
    </Flex>
  )
}
