import { redirect } from '@sveltejs/kit';
import { getUser } from '$lib/index.js';
export async function load({cookies}) {
    let cookie = cookies.get('Status')
    if(!cookie){
        throw redirect(302, '/login');
    }
}