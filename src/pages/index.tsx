
import { Flex, Stack, Button } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input"
export default function Home() {
  const {register, handleSubmit, formState} = useForm();

  type SignInFormData = {
    email: string,
    password: string,
  }

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) =>{
    await new Promise( resolve => setTimeout(resolve, 2000));
    console.log(values);
    
  }
  return (
    <Flex h="100vh" w="100vw" alignItems="center" justifyContent="center">
      <Flex as="form" width="100%" maxW={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing="4" > 
          <Input name="email" type="email" label="Email" {...register("email")}/>
          <Input name="password" type="password" label="Senha" {...register("password")}/>    
        </Stack>
        <Button type="submit" mt="6" colorScheme="red" size="lg" isLoading={formState.isSubmitting}> Enviar</Button>
      </Flex>
    </Flex>
  )
}
