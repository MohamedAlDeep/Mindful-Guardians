<script lang="ts">
import "../../app.css";

import NavBar from "../../components/navBar/navBar.svelte";
let username:string, password:string, email = ""
const  handleSubmit = async() => {
	const response = await fetch('/login', {
		method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password,email }),
	})
	const data = await response.json()
}
</script>
<NavBar cookie={false}/>	
<main>
	<h1>Login</h1>
	<form on:submit={handleSubmit} class="auth-form">
		<label for=""> Email </label>
		<input type="text" name="email" bind:value={email}/>
		
		<label for="" > Username </label>
		<input type="text" name="username" bind:value={username}/>
		
		<label for=""> Password </label>
		<input type="password" name="password" bind:value={password}/>
		<button type="submit" class="btn btn-primary">Login</button>
	</form>
</main>



