import {Flex, Text, Input, Icon, HStack, Box, Avatar} from '@chakra-ui/react'
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
export function Header(){
    return (
        <Flex as="header" w="100%" maxWidth={1480} h="20" marginX="auto" marginTop="4" align="center" paddingX="6">
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" >
                Dashgo
                <Text as="span" ml="1" color="red.500">.</Text>
            </Text>
            <Flex as="label" flex="1" py="4" px="8" ml="6" maxW={400} alignSelf="center" color="gray.200" position="relative" bg="gray.800" borderRadius="full">
                <Input color="gray.50" variant="unstyled" placeholder="Buscar na plataforma" _placeholder={{color: "gray.400"}} px="4" mr="4"/>
                <Icon as={RiSearchLine} fontSize="20"/>
            </Flex>

            <Flex align="center" ml="auto">
                
                <HStack spacing="6" mx="6" pr="6" py="1" color="gray.300" borderRightWidth={1} borderColor="gray.700">
                    <Icon as={RiNotificationLine}/>
                    <Icon as={RiUserAddLine}/>

                </HStack>
                <Flex align="center">
                    <Box mr="4" textAlign="center">
                        <Text>Matheus Eduardo</Text>
                        <Text color="gray.300" fontSize="small">matheuselineudo@hotmail.com</Text>
                    </Box>
                    <Avatar size="md" name="Matheus Eduardo" src="https://github.com/HurleySa.png"/>
                </Flex>
                
            </Flex>
        </Flex>
    );
}