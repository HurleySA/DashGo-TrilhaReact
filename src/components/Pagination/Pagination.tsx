import { Flex, Icon, Box, Table, Button, Stack, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from "@chakra-ui/react"
import { PaginationItem } from "./PaginationItem"
export function Pagination(){
    return (
        <Stack direction={["column", "row"]}  spacing="6" mt="8" justify="space-between" align="center">
            <Box>
                0-10 de 199
            </Box>
            <Stack direction="row" spacing="2">
                <PaginationItem isCurrent number={1} />
                <PaginationItem number={2} />
                <PaginationItem number={3} />
                <PaginationItem number={4} />
            </Stack>
            

        </Stack>
    )
}