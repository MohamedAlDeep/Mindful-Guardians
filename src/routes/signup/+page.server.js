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
        
        const radio = data.get('bordered-radio')
        let parent = data.get('parent');
        
        if(parent == null){
           parent = false
        }else{
            parent = true
        }
        console.log('Radio -> ',radio)
        const username = `${first_name} ${last_name}`
        let img = ''
        await addUser(email, username, password, parent, img);

        if(!username || !password || !email){
            return json({message: "Missing  Name or Password"})
        }
        cookies.set('Status', `${email}-${password}`, {path: '/'})
		return redirect(302, '/dashboard')
	},
};