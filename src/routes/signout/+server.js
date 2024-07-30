import {json} from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit';

export async function DELETE({request, cookies}){
    cookies.delete("Status", {path: '/'})
    // Doing a trick
    return redirect(302, '/') 

}