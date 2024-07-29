import {json} from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit';

export async function GET({request, cookies}){
    cookies.delete("Status", {path: '/'})
}