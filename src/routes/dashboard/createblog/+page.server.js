import { redirect, json } from '@sveltejs/kit';
import { addUser } from '$lib/index.js';
export function load({request, cookies}) {
    
    let cookie = cookies.get('Status')
    if(!cookie){
        throw redirect(302, '/dashboard');
    }
}


export const actions = {
	blog: async ({ cookies, request }) => {
		const data = await request.formData();
        
        const title = data.get('title')
        const Content = data.get('content')
        console.log(title)
        console.log(Content)
	}
};