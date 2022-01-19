import { Button } from "@chakra-ui/react"

interface PaginationItemProps{
    isCurrent?:boolean,
    number: number,
    onPageChange:(page: number) => void;
}

export function PaginationItem({isCurrent = false,number, onPageChange}:PaginationItemProps){
    if(isCurrent) return(<Button size="sm" fontSize="xs" width="4" colorScheme="red" disabled _disabled={{bgColor:'red.500', cursor:"default"}}>{number}</Button>)
     
    return ( <Button size="sm" fontSize="xs" width="4" bg="gray.700" _hover={{bgColor:"red.700"}} onClick={() => onPageChange(number)} >{number}</Button>)
}