


export async function load({ fetch , params }) {
    async function getUser(){
        const uri = `https://eu-central-1.aws.data.mongodb-api.com/app/data-dwfvizn/endpoint/getPost?username=Mohamed`
        const res = await fetch(uri, {
            headers: {
                    "Content-Type": "application/json",
                    "api-key": "9A6INzZMr8BiTTy4ZXRxVlZXv5yHNxvjBgp2qI7hRItmTnieT6TGfKiyHxrtJ95X"
            }
        })
        const data = await res.json()
        return data
    }
    return {
        user: await getUser()
    }
}