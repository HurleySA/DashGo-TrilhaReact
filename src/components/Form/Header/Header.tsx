import {Flex, Icon, IconButton, useBreakpointValue} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../../contexts/SidebarDrawerContext';
import Logo from './Logo';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile';
import SearchBox from './SearchBox';
export function Header(){
    const {onOpen} = useSidebarDrawer();
    const isWideVersion = useBreakpointValue({
        base:false,
        lg: true,
    })
    
    return (
        <Flex as="header" w="100%" maxWidth={1480} h="20" marginX="auto" marginTop="4" align="center" paddingX="6">
            {!isWideVersion && (
                <IconButton aria-label='Open navigation' fontSize="24"  bg="gray.900"
                fontVariant="unstyled" onClick={onOpen} mr="2"  icon={<Icon as={RiMenuLine} />}></IconButton>
            )}
            <Logo/>
            {isWideVersion && <SearchBox/>}
            <Flex align="center" ml="auto">
                <NotificationsNav/>
                <Profile showProfileData={isWideVersion} />
                
            </Flex>
        </Flex>
    );
}