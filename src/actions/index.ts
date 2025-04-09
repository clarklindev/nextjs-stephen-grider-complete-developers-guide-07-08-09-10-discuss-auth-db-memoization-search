'use server';

import * as auth from '@/auth';

export async function signIn(){
    return auth.signIn('github');   //passin what provider we want to signin with
}

export async function signOut(){
    return auth.signOut();
}