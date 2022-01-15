import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { RiDashboardLine, RiGitMergeLine, RiInputMethodLine, RiUserLine } from "react-icons/ri"
export function SidebarNav(){
    return(
        <Stack spacing="12" align="flex-start">
        <NavSection title="Geral">
            <NavLink icone={RiDashboardLine} title="Dashboard" link="/dashboard"/>
            <NavLink icone={RiUserLine} title="Usuarios" link="/users"/>
        </NavSection>
            
        <NavSection title="Automação">
            <NavLink icone={RiInputMethodLine} title="Formulários" link="/forms"/>
            <NavLink icone={RiGitMergeLine} title="Automação" link="/automation"/>
        </NavSection>
    </Stack>
    )
}