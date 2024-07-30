export async function load({params}) {
    const param = params.id
    async function getBlogs(){
        const uri = 'https://eu-central-1.aws.data.mongodb-api.com/app/data-dwfvizn/endpoint/getBlogs'
        const res = await fetch(uri, {
            method: 'GET', 
            headers: {
                    "Content-Type": "application/json",
                    "api-key": "9A6INzZMr8BiTTy4ZXRxVlZXv5yHNxvjBgp2qI7hRItmTnieT6TGfKiyHxrtJ95X"
            }
        })
        const data = await res.json()
        return data
    }
    
    return {
        blogs: await getBlogs()
    }
}