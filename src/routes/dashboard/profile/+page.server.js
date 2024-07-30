import { redirect } from '@sveltejs/kit';
import { getUser } from '$lib/index.js';
export async function load({cookies}) {
    let cookie = cookies.get('Status')
    if(!cookie){
        throw redirect(302, '/login');
    }
    
    let email = cookie.split('-')[0]
    
    async function User(email){
        let data = await getUser(email)
        return data
    }
    
    return {
        user: await User(email)
    }
}