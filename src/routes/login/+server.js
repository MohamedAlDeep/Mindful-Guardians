import {json} from '@sveltejs/kit'
import { type } from 'os'

export async function POST({request, cookies}){
    const data = await request.json()
    const {username, password} = data
    let cookie = cookies.get('Status')
    if(cookie === ''){
        return json({message: "Already Logged In"})
    }
    if(!username || !password){
        return json({message: "Missing  Username or Password"})
    }

    async function getUser(username){
        const uri = `https://eu-central-1.aws.data.mongodb-api.com/app/data-dwfvizn/endpoint/getPost?username=${username}`
        const res = await fetch(uri, {
            headers: {
                    "Content-Type": "application/json",
                    "api-key": "9A6INzZMr8BiTTy4ZXRxVlZXv5yHNxvjBgp2qI7hRItmTnieT6TGfKiyHxrtJ95X"
            }
        })
        const data = await res.json()
        return data
    }

    const user = await getUser(username);

   
    return json({message: `Logged In! ${user}`})
}