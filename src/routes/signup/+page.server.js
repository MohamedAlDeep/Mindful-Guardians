import { redirect } from '@sveltejs/kit';
import { addUser } from '$lib';
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

        const username = `${first_name} ${last_name}`
        await addUser(email, username, password);

        if(!username || !password || !email){
            return json({message: "Missing  Name or Password"})
        }
        cookies.set('Status', `${username}-${password}`, {path: '/'})
		return redirect(302, '/dashboard')
	},
};