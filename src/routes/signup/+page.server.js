import { redirect, json } from '@sveltejs/kit';
import { addUser } from '$lib/index.js';
export function load({request, cookies}) {
    
    let cookie = cookies.get('Status')
    if(cookie){
        throw redirect(302, '/dashboard');
    }
}


export const actions = {
	signup: async ({ cookies, request }) => {
		const data = await request.formData();

        const email = data.get('email');
		const first_name = data.get('first-name');
		const last_name = data.get('last-name');
		const password = data.get('password');
        
        const selection = data.get('selection')
        let parent = data.get('parent');
        
        if(parent == null){
           parent = false
        }else{
            parent = true
        }
        console.log('Data-> ',data)
        const username = `${first_name} ${last_name}`
        let img = ''
        await addUser(email, username, password, parent, img, selection);

        cookies.set('Status', `${email}-${password}`, {path: '/'})
		return redirect(302, '/dashboard')
	},
};