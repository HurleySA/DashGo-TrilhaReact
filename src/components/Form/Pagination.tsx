import { Flex, Icon, Box, Table, Button, Stack, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from "@chakra-ui/react"
export function Pagination(){
    return (
        <Stack direction="row"  spacing="6" mt="8" justify="space-between" align="center">
            <Box>
                0-10 de 199
            </Box>
            <Stack direction="row" spacing="2">
                <Button size="sm" fontSize="xs" width="4" colorScheme="red" disabled _disabled={{bgColor:'red.500', cursor:"default"}}>1</Button>
                <Button size="sm" fontSize="xs" width="4" bg="gray.700" _hover={{bgColor:"red.700"}}>2</Button>
                <Button size="sm" fontSize="xs" width="4" bg="gray.700" _hover={{bgColor:"red.700"}}>3</Button>
            </Stack>
            

        </Stack>
    )
}