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
    let authContent: React.ReactNode;
    if(session?.user){
      authContent = <Avatar src={session.user.image || ''}/>
    }else{
      authContent = <>
        <NavbarItem>
            <Button type="submit" color="secondary" variant="bordered">
                sign in
            </Button>
        </NavbarItem>
        <NavbarItem>
            <Button type="submit" color="primary" variant="flat">
                sign up
            </Button>
        </NavbarItem>
      </>
    }

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
                {
                    authContent
                }
            </NavbarContent>
        </Navbar>
    );
}