import { Home, SquareUser, Swords, Trophy, User } from "lucide-react"
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
import { Archivo_Black } from "next/font/google"

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
    {
        title: "Leagues",
        url: "/Leagues",
        icon: Trophy
    },
]

const archivoFont = Archivo_Black({
    subsets:['latin'],
    weight: "400",
  })
export function AppSidebar(){
    return(
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xl font-bold">CartoLOL</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} className="text-xl">
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span className="text-lg">{item.title}</span>

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