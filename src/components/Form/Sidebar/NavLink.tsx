import { Icon, Link, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface NavLinkProps{
    icone: IconType,
    title:string,
}
export function NavLink({icone, title}:NavLinkProps){
    return(
        <Link display="flex" align="center"> 
        <Icon as={icone} fontSize="20"></Icon> 
        <Text ml="4" fontWeight="medium">{title}</Text>
    </Link>
    )
}