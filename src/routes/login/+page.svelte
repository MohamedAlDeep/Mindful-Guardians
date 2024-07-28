<script>
	 export let data
</script>
<main>
	<h1>Login</h1>
	<form action="?/login" method="POST" class="auth-form">
		<label for=""> Email </label>
		<input type="text" name="email" />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button type="submit" class="btn btn-primary">Login</button>
	</form>
</main>


<h1 class = "mb-4">Home</h1>
<div>
   {data.user.username}
   {data.user.password}
</div>