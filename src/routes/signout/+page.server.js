import {json} from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit';

export async function load({request, cookies}){
    cookies.delete("Status", {path: '/'})
    // Doing a trick
    throw redirect(302, '/')

}