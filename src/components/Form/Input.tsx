import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps{
    name: string,
    label?: string,
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, ...rest} , ref) => {
    return(
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput type="text" name={name} id={name} focusBorderColor="red.500" bgColor="gray.900" _hover={{bgColor:"gray.900", borderColor:"red.500"}} size="lg" ref={ref} {...rest}/>  
         </FormControl>
    )
}

export const Input = forwardRef(InputBase);