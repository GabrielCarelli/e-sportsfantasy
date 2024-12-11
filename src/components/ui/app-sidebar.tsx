import { Home, SquareUser, Swords, User } from "lucide-react"
import{
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "./sidebar"

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home
    },
    {
        title: "Team",
        url: "/Team",
        icon: SquareUser
    },
    {
        title: "Games",
        url: "/Games",
        icon: Swords
    },
    {
        title: "Player",
        url: "/Player",
        icon: User
    },
]
export function AppSidebar(){
    return(
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>CartoLOL</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}