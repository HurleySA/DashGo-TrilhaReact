import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerContextProps{
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;
const sideBarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children} : SidebarDrawerContextProps){
    const disclosure = useDisclosure();
    const router = useRouter();

    useEffect(() => {
        disclosure.onClose();
    }, [router.asPath])
    return(
        <sideBarDrawerContext.Provider value={disclosure}>
            {children}
        </sideBarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(sideBarDrawerContext);