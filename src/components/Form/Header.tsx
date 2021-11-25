import {Flex, Text, Input} from '@chakra-ui/react'
import { RiSearchLine} from 'react-icons/ri'
export function Header(){
    return (
        <Flex as="header" w="100%" maxWidth={1480} h="20" marginX="auto" marginTop="4" align="center" paddingX="6">
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" >
                Dashgo
                <Text as="span" ml="1" color="red.500">.</Text>
            </Text>
            <Flex as="label" flex="1" py="4" px="8" ml="6" maxW={400} alignSelf="center" color="gray.200" position="relative" bg="gray.800" borderRadius="full">
                <Input color="gray.50" variant="unstyled" placeholder="Buscar na plataforma" _placeholder={{color: "gray.400"}} px="4" mr="4">
                
                </Input>
            </Flex>
        </Flex>
    );
}