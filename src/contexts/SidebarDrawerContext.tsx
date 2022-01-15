import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface SidebarDrawerContextProps{
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;
const sideBarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children} : SidebarDrawerContextProps){
    const disclosure = useDisclosure()
    return(
        <sideBarDrawerContext.Provider value={disclosure}>
            {children}
        </sideBarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(sideBarDrawerContext);