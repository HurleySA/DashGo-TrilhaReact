import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools} from "react-query/devtools"
import { queryCliente } from '../services/mirage/queryCliente'
if(process.env.NODE_ENV === 'development'){
  makeServer();
}
function MyApp({ Component, pageProps  }: AppProps) {
  return(
  <ChakraProvider theme={theme}>
    <SidebarDrawerProvider>
      <QueryClientProvider client={queryCliente}>
        <ReactQueryDevtools/>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SidebarDrawerProvider>
  </ChakraProvider>  
  )
}

export default MyApp
