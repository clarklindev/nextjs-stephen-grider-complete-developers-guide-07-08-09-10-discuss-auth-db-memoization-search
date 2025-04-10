import {Button} from '@nextui-org/react';
import * as actions from '@/actions';
import {auth} from '@/auth';
import Profile from '@/components/profile';

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>      
        <Button type="submit">sign in</Button>
      </form>
      <form action={actions.signOut}>      
        <Button type="submit">sign out</Button>
      </form>

      {session?.user ? <div>{JSON.stringify(session.user)}</div>: <div>signed out</div>}

      <Profile/>
    </div>
  );
}
