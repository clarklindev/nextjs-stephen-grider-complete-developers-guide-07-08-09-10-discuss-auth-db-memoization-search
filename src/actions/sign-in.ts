'use server';

import * as auth from '@/auth';

export async function signIn(){
    return auth.signIn('github');   //passin what provider we want to signin with
}