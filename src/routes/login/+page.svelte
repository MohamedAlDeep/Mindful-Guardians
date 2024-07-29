<script lang="ts">
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


<h1 class = "mb-4">Home</h1>
