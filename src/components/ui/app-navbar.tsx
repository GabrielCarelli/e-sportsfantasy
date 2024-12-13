import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";

export const AppNavbar = () => {
    return(
        <Navbar className="bg-gray-800 max-w-full" >
            <NavbarBrand>
                <h1 className="font-extrabold text-2xl text-white">CartoLOL</h1>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem className="font-extralight text-gray-300">
                    <Link className="text-white" href="/Leagues">
                        Leagues
                    </Link>
                </NavbarItem>
                <NavbarItem className="font-extralight text-gray-300">
                    <Link className="text-white" href="/Team">
                        Teams
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
            <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Se inscreva
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}