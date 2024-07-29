import {json} from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit';

export async function GET({request, cookies}){
    cookies.delete("Status", {path: '/'})
    // Doing a trick
    throw redirect(302, '/dashboard') 

}