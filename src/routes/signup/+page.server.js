import { redirect, json } from '@sveltejs/kit';

export function load({request, cookies}) {
    let cookie = cookies.get('Status')
    if(cookie){
        throw redirect(302, '/dashboard');
    }
}

async function addUser(email, username, password){
    const uri = `https://eu-central-1.aws.data.mongodb-api.com/app/data-dwfvizn/endpoint/insert?email=${email}&password=${password}&username=${username}`
    const res = await fetch(uri, {
        method: "POST",
        headers: {
                "Content-Type": "application/json",
                "api-key": "9A6INzZMr8BiTTy4ZXRxVlZXv5yHNxvjBgp2qI7hRItmTnieT6TGfKiyHxrtJ95X"
        }
    })
    const data = await res.json()
    return data
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