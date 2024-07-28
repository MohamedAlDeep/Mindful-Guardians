import {json} from '@sveltejs/kit'
import { type } from 'os'

export async function POST({request, cookies}){
    const data = await request.json()
    const {username, password} = data
    if(!username || !password){
        return json({message: "Missing  Username or Password"})
    }

    async function addUser(username, password){
        const uri = `https://eu-central-1.aws.data.mongodb-api.com/app/data-dwfvizn/endpoint/insert?username=${username}&password=${password}`
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

    const user = await addUser(username, password);

    cookies.set('Status', `${username}-${password}`, {path: '/'})
    return json({message: `Logged In! ${user}`})
}