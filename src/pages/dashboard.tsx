import { Flex, SimpleGrid, Box, Text, theme  } from "@chakra-ui/react"
import { Header } from "../components/Header/Header"
import { SideBar } from "../components/Sidebar/Sidebar"
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
const options = {
    chart: {
        toolbar:{
            show: false,
        },
        zoom:{
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid:{
        show: false,
    },
    dataLabels:{
        enabled: false,
    },
    tooltip:{
        enabled: false
    },
    xaxis:{
        type:"datetime",
        axisBorder: {
            color: theme.colors.gray[600],
        },
        axisTicks:{
            color: theme.colors.gray[600],
        },
        categories:[
            '2021-11-20T00:00:00.000Z',
            '2021-11-21T00:00:00.000Z',
            '2021-11-22T00:00:00.000Z',
            '2021-11-23T00:00:00.000Z',
            '2021-11-24T00:00:00.000Z',
            '2021-11-25T00:00:00.000Z',
            '2021-11-26T00:00:00.000Z'
        ]
    },
    fill:{
        opacity: 0.3,
        type: 'gradient',
        gradient:{
            shade: 'dark',
            opacityFrom: .8,
            opacityTo: 0.3,
        }
    }
};

const series = [{ name:'teste', data:[10,15,40,20,50,34,23]}]

export default function dashboard() {

    return (
        <Flex direction="column" h="100vh" >
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <SideBar/>
                <SimpleGrid flex="1" gap="4" minChildWidth="320px">
                    <Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
                        <Text fontSize="lg" mb="4" >Inscritos da Semana</Text>
                        <ApexCharts options={options} series={series} type="area" height={160} />
                    </Box>
                    <Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
                        <Text fontSize="lg" mb="4" >Taxa de Abertura</Text>
                        <ApexCharts options={options} series={series} type="area" height={160} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
       
    )
}
