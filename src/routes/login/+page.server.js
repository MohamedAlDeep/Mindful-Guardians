import { json, redirect } from "@sveltejs/kit";

export function load({cookies}) {
    let cookie = cookies.get('Status')
    while(cookie){
        throw redirect(302, '/dashboard');
    }
}

async function getUser(email){
    const uri = `https://eu-central-1.aws.data.mongodb-api.com/app/data-dwfvizn/endpoint/getPost?email=${email}`
    const res = await fetch(uri, {
        headers: {
                "Content-Type": "application/json",
                "api-key": "9A6INzZMr8BiTTy4ZXRxVlZXv5yHNxvjBgp2qI7hRItmTnieT6TGfKiyHxrtJ95X"
        }
    })
    const data = await res.json()
    return data
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