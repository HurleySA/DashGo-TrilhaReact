import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { QueryClient, QueryClientProvider } from 'react-query'

if(process.env.NODE_ENV === 'development'){
  makeServer();
}
const queryCliente = new QueryClient();

function MyApp({ Component, pageProps  }: AppProps) {
  return(
  <ChakraProvider theme={theme}>
    <SidebarDrawerProvider>
      <QueryClientProvider client={queryCliente}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SidebarDrawerProvider>
  </ChakraProvider>  
  )
}

export default MyApp
