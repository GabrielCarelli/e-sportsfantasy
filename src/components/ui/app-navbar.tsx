import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";

export const AppNavbar = () => {
    return(
        <Navbar className="h-16 inset-x-0 top-0 w-full bg-amber-950/70 border-b border-gray-700 backdrop-blur-lg transition-all" >
            <NavbarBrand className="flex h-16 items-center justify-between">
                <Link href="/" className="text-white font-bold flex z-40">
                    Carto<span className="font-extrabold text-red-600">LOL</span>
                </Link>
            </NavbarBrand>
            <NavbarContent className="h-full flex items-center space-x-4">
                <NavbarItem className="font-extralight text-gray-200 text-sm">
                    <Link className="text-white text-sm hover:text-red-700" href="/Leagues">
                        Leagues
                    </Link>
                </NavbarItem>
                <NavbarItem className="font-extralight text-gray-300">
                    <Link className="text-white text-sm hover:text-red-700" href="/Team">
                        Teams
                    </Link>
                </NavbarItem>
                <NavbarItem className="font-extralight text-gray-300">
                    <Link className="text-white text-sm  hover:text-red-700" href="/Team">
                        Jogadores
                    </Link>
                </NavbarItem>
                <NavbarItem className="font-extralight text-gray-300">
                    <Link className="text-white text-sm hover:text-red-700" href="/Team">
                        Pontuações
                    </Link>
                </NavbarItem>
                <NavbarItem className="font-extralight text-gray-300">
                    <Link className="text-white text-sm hover:text-red-700" href="/Team">
                        Leaderboard
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
            <NavbarItem>
                    <Button as={Link} href="/sign-up" variant="flat" className="bg-red-700/50 text-white">
                        Se inscreva
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}   