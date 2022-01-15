import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps{
    icone: IconType,
    title:string,
    link: string,
}
export function NavLink({icone, title, link, ...rest}:NavLinkProps){
    return(
       <ActiveLink href={link} passHref>
        <ChakraLink display="flex" align="center"> 
            <Icon as={icone} fontSize="20"></Icon> 
            <Text ml="4" fontWeight="medium">{title}</Text>
        </ChakraLink>
       </ActiveLink>
        
    )
}