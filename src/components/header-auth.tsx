'use client';

import * as actions from '@/actions';

// import {auth } from '@/auth';    //server side
import {useSession} from 'next-auth/react'; //client side

import {
    NavbarItem,
    Button,
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@nextui-org/react';

export default function HeaderAuth(){
    // const session = await auth();    //server side
    const session = useSession();       //client side
    let authContent: React.ReactNode;

    if(session.status === "loading"){
        authContent = null;
    }
    else if(session.data?.user){
        authContent = 
          <Popover placement="left">
              <PopoverTrigger>
                  <Avatar src={session.data.user.image || ''}/>
              </PopoverTrigger>
              <PopoverContent>
                  <div className="p-4">
                      <form action={actions.signOut}>
                          <Button type="submit">Sign out</Button>
                      </form>
                  </div>
              </PopoverContent>
          </Popover>
      
      }else{
        authContent = <>
          <NavbarItem>
              <form action={actions.signIn}>
                  <Button type="submit" color="secondary" variant="bordered">
                      sign in
                  </Button>
              </form>
          </NavbarItem>
          <NavbarItem>
              <form action={actions.signOut}>
                  <Button type="submit" color="primary" variant="flat">
                      sign up
                  </Button>
              </form>
          </NavbarItem>
        </>
      }

    return authContent;
}