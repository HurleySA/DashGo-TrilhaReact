
import { Flex, Stack, Button } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string,
  password: string,
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail Obrigatório.").email("E-mail inválido."),
  password: yup.string().required("Senha obrigatória."),
})
export default function SignIn() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema) });
  const {errors} = formState; 

  const handleSignIn: SubmitHandler<SignInFormData> = (values) =>{
    console.log(errors);
    
  }
  return (
    <Flex h="100vh" w="100vw" alignItems="center" justifyContent="center">
      <Flex as="form" width="100%" maxW={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing="4" > 
          <Input name="email" type="email" label="Email" error={errors.email} {...register("email")}/>
          <Input name="password" type="password" label="Senha" error={errors.password} {...register("password")}/>    
        </Stack>
        <Button type="submit" mt="6" colorScheme="red" size="lg" isLoading={formState.isSubmitting}> Enviar</Button>
      </Flex>
    </Flex>
  )
}
