<script >
let username = ''
let password = ''
let message = ''
const  handleSubmit = async() => {
	message = ''
	const response = await fetch('/signup', {
		method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
	})
	const data = await response.json()
	message = data.message
}
</script>


<main>
	<h1>Create an account</h1>
	<form on:submit={handleSubmit} class="auth-form">
		<h2>Username</h2>
		<input class="bg-slate-300" type="text" name="username" bind:value={username}/>
		<h2>Password</h2>
		<input class="bg-slate-300" type="password" name="password" bind:value={password}/>
		<button class="btn btn-primary bg-slate-300">Sign Up</button>
	</form>
</main>

<h1>{message}</h1>