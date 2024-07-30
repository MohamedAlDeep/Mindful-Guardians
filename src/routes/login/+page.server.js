import { json, redirect } from "@sveltejs/kit";
import {getUser} from "$lib/index.js";
export function load({cookies}) {
    let cookie = cookies.get('Status')
    while(cookie){
        throw redirect(302, '/dashboard');
    }
}


export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		
		const password = data.get('password');

        const user = await getUser(email);
    
        if(user.password == password && user.email == email){
            cookies.set('Status', `${user.username}-${password}`, {path: '/'})
            return redirect(302, '/dashboard')
        }else if(user.password != password && user.email != email){
            return json({message: `Wrong email or password`})
        }
        
		return { success: true };
	},
	
};