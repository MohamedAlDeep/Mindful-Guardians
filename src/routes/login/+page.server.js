import { redirect } from "@sveltejs/kit";

export function load({cookies}) {
    let cookie = cookies.get('Status')
    while(cookie){
        throw redirect(302, '/dashboard');
    }
}