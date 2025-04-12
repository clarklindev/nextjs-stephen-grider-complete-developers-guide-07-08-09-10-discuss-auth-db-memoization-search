import Link from 'next/link';
import {auth } from '@/auth';

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
    Button,
    Avatar
} from '@nextui-org/react';

export default async function Header(){
    const session = await auth();

    return (
        <Navbar className="shadow mb-6">
            <NavbarBrand>
                <Link href="/" className="font-bold">Discuss</Link>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Input/>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    {
                        session?.user ? <div>signed in</div>: <div>signed out</div>
                    }
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}