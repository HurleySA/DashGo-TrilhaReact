import { Flex, VStack, Box, Divider, Heading, SimpleGrid, HStack, Button,FormLabel } from "@chakra-ui/react"
import { Header } from "../../components/Header/Header"
import { SideBar } from "../../components/Sidebar/Sidebar"
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/Form/Input";
import { useRouter } from 'next/router'
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { queryCliente } from "../../services/mirage/queryCliente";

type CreateUserFormData = {
    nameCreate: string,
    emailCreate: string,
    passwordCreate: string,
    password_confirmation: string,
}

const createUserFormSchema = yup.object().shape({
    nameCreate: yup.string().required("Nome obrigatório"),
    emailCreate: yup.string().required("E-mail Obrigatório.").email("E-mail inválido."),
    passwordCreate: yup.string().required("Senha Obrigatória.").min(6, "No minimo 6 caracteres"),
    password_confirmation: yup.string().oneOf([yup.ref('passwordCreate'), null], "As senhas precisam ser iguais.")
  })

export default function UserCreate(){
    const createUsers = useMutation(async (user: CreateUserFormData) =>{
        const response = await api.post('users',{
            user:{
                name: user.nameCreate,
                email: user.emailCreate,
                created_at: String( new Date()),
            }
        })

        return response.data.user;
    },{
        onSuccess:() => {
            queryCliente.invalidateQueries('users');
        }
    });
    const router = useRouter();
    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createUserFormSchema)
    });
    const {errors} = formState;

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values)=>{
        await createUsers.mutateAsync(values)
        router.push('/users');
    }
    return(
        <Box>
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <SideBar/>
                <Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
                        <Heading size="lg" fontWeight="normal" >Criar Usuário</Heading>
                        <Divider my="6" borderColor="gray.700" />
                        <VStack spacing="8" >
                           <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                                    <Input name="nameCreate" id="nameCreate" placeholder="Nome Completo" label="Nome Completo" error={errors.nameCreate} {...register("nameCreate")}/>
                                    <Input name="emailCreate" id="emailCreate" placeholder="E-mail" label="E-mail" error={errors.emailCreate} {...register("emailCreate")}/>
                            </SimpleGrid> 
                           <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                                    <Input name="passwordCreate" id="passwordCreate" type="password" placeholder="Senha" label="Senha" error={errors.passwordCreate} {...register("passwordCreate")}/>
                                    <Input name="password_confirmation" id="password_confirmation" type="password" label="Confirmação da senha" placeholder="Confirmação da senha" error={errors.password_confirmation} {...register("password_confirmation")}/>
                            </SimpleGrid> 
                        </VStack>
                        <Flex mt="8" justify={["center", "flex-end"]}>
                            <HStack spacing="4">
                                <Link href="/users" passHref>
                                    <Button colorScheme="whiteAlpha" >Cancelar</Button>
                                </Link>
                                <Button type="submit" colorScheme="red" isLoading={formState.isSubmitting}>Salvar</Button>
                            </HStack>
                        </Flex> 

                    

                </Box>
            </Flex>
        </Box>
    )
}