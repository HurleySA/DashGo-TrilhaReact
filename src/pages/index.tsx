
import { Flex, Stack, Button } from "@chakra-ui/react"
import { Input } from "../components/Form/Input"
export default function Home() {
  return (
    <Flex h="100vh" w="100vw" alignItems="center" justifyContent="center">
      <Flex width="100%" maxW={360} bg="gray.800" p="8" border={8} flexDir="column" >
        <Stack spacing="4" > 
          <Input name="email" type="email" label="Email"/>
          <Input name="password" type="password" label="Senha"/>    
        </Stack>
        <Button type="submit" mt="6" colorScheme="red" size="lg"> Enviar</Button>
      </Flex>
    </Flex>
  )
}
