//  place files you want to import through the `$lib` alias in this folder.
export async function getUser(email){
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

export async function addUser(email, username, password, parent, img, selection){
    const uri = `https://eu-central-1.aws.data.mongodb-api.com/app/data-dwfvizn/endpoint/insert?email=${email}&password=${password}&username=${username}&parent=${parent}&image=${img}&Gender=${selection}`
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