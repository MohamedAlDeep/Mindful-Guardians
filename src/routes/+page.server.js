// import { redirect } from '@sveltejs/kit';
import { json, redirect } from '@sveltejs/kit'
export function load({cookies}) {
    let cookie = cookies.get('Status')
    
    if(cookie){
        return {
            status: true,
        }
    }else{
        return {status: false}
    }
}