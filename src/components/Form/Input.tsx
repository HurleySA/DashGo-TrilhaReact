import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
    name: string,
    label?: string,
}

export function Input({name, label, ...rest}: InputProps){
    return(
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput type="text" name="email" id="email" focusBorderColor="red.500" bgColor="gray.900" _hover={{bgColor:"gray.900", borderColor:"red.500"}} size="lg" {...rest}/>  
         </FormControl>
    )
}