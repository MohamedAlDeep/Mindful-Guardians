<script lang="ts">
import "../../app.css";

import NavBar from "../../components/navBar/navBar.svelte";

</script>
<NavBar cookie={false} home={false}/>	
<main>
	<form method="POST" action="?/login">
		<div class="border-b border-gray-900/10 pb-12">
			<h2 class="create-account-header text-base font-semibold leading-7 text-gray-900 text-center mt-8">Log In</h2>  
			<div class="flex flex-col w-1/4 mt-10   gap-x-6 gap-y-8">
				<div class="flex flex-col ml-32 w-full">
					<div class="sm:col-span-4">
						<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
						<div class="mt-2">
						  <input id="email" name="email" required type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
						</div>
					</div>
					<div class="sm:col-span-4">
						<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Passowrd</label>
						<div class="mt-2">
						  <input id="password" name="password" type="password" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
						</div>
					</div>
				</div>
				<div class="sm:col-span-4 mx-auto">
					<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-l">Log in</button>
				</div>
			</div>
		</div>
	</form>
</main>



<style>
	
</style>