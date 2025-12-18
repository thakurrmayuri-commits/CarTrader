import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"

function MenubarDemo() {
    return (
        <div>
            <Menubar className="h-16 flex justify-center gap-8">
                <div className="w-40"><img src="/Car_logo.jpg" alt="logo" /></div>
                <div className="w-20"></div>
                <MenubarMenu>
                    <MenubarTrigger className="text-indigo-800 text-lg font-bold hover:text-orange-400">Brand</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            Contact Us
                        </MenubarItem>
                        <MenubarItem>
                            Office Hours
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-indigo-800 text-lg font-bold hover:text-orange-400">Who We Are</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            Mission
                        </MenubarItem>
                        <MenubarItem>
                            Vision
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-indigo-800 text-lg font-bold hover:text-orange-400">Insight</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            Auto Market
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            Market News
                        </MenubarItem>
                        <MenubarItem>
                            Press Release
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-indigo-800 text-lg font-bold hover:text-orange-400">What We Offer</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            About Us
                        </MenubarItem>
                        <MenubarItem>
                            Media
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar></div>
    )
}
export default MenubarDemo;
