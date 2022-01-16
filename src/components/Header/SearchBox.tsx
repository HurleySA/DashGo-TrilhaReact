import { Flex , Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from 'react-icons/ri'
export default function SearchBox() {
    const searchInputRef = useRef<HTMLInputElement>(null);
    console.log(searchInputRef.current.value)

    return (
        <Flex as="label" flex="1" py="4" px="8" ml="6" maxW={400} alignSelf="center" color="gray.200" position="relative" bg="gray.800" borderRadius="full">
            <Input color="gray.50" variant="unstyled" placeholder="Buscar na plataforma" _placeholder={{color: "gray.400"}} ref={searchInputRef} px="4" mr="4" />
            <Icon as={RiSearchLine} fontSize="20"/>
        </Flex>
    )
}
