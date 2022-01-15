import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData: boolean,
}

export default function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                 <Box mr="4" textAlign="center">
                    <Text>Matheus Eduardo</Text>
                    <Text color="gray.300" fontSize="small">matheuselineudo@hotmail.com</Text>
                 </Box>
            )}
           
            <Avatar size="md" name="Matheus Eduardo" src="https://github.com/HurleySa.png"/>
        </Flex>
    )
}
