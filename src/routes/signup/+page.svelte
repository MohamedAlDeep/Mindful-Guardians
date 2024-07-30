<script >
import "../../app.css";
import NavBar from "../../components/navBar/navBar.svelte";
let username = ''
let password = ''
let email = ''
let message = ''
const  handleSubmit = async() => {
	message = ''
	const response = await fetch('/signup', {
		method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password,email }),
	})
	const data = await response.json()
	message = data.message
}
</script>

<NavBar cookie={false}/>

<main>
	<h1>Create an account</h1>
	<form on:submit={handleSubmit} class="auth-form">
		<h2>Username</h2>
		<input class="bg-slate-300" type="text" name="username" bind:value={username}/>
		<h2>Password</h2>
		<input class="bg-slate-300" type="password" name="password" bind:value={password}/>
		<h2>email</h2>
		<input class="bg-slate-300" type="email" name="email" bind:value={email}/>
		<button class="btn btn-primary bg-slate-300">Sign Up</button>
	</form>
</main>