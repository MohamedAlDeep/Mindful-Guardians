import { redirect } from '@sveltejs/kit';

export function load({request, cookies}) {
    let cookie = cookies.get('Status')
    if(cookie){
        throw redirect(302, '/dashboard');
    }
}