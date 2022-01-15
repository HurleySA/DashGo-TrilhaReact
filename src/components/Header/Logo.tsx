import { HStack, Icon, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
export default function Logo() {
    return (
        <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterSpacing="tight" >
                Dashgo
                <Text as="span" ml="1" color="red.500">.</Text>
        </Text>
    )
}
