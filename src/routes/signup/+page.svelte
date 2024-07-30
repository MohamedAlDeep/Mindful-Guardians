<script >
import "../../app.css";
import NavBar from "../../components/navBar/navBar.svelte";
</script>

<NavBar cookie={false}/>

<main>
	<form method="POST" action="?/signup" class="auth-form">
		<div class="border-b border-gray-900/10 pb-12">
			<h2 class="create-account-header text-base font-semibold leading-7 text-gray-900 text-center mt-6">Create Account</h2>  
			<div class="flex flex-col w-1/4 mt-10   gap-x-6 gap-y-8">
				<div class="flex flex-col ml-32 w-full">
					<div class="sm:col-span-3">
						<label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
						<div class="mt-2">
						  <input type="text" name="first-name" required id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
						</div>
					</div>
					<div class="sm:col-span-3">
						<label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
						<div class="mt-2">
						  <input type="text" name="last-name" required id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
						</div>
					</div>
			  
					<div class="sm:col-span-4">
						<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
						<div class="mt-2">
						  <input id="email" name="email" required type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
						</div>
					</div>
					<div class="sm:col-span-4">
						<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Passowrd</label>
						<div class="mt-2">
						  <input id="password" name="password" type="password" minlength="8" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
						</div>
					</div>
					
					<!-- Radio Button -->

					
					<label class="mt-5 font-medium">Gender</label>
					<div class="mt-5 flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
						<input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
						<label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-black dark:text-black">Male</label>
					</div>
					<div class="mt-5 flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
						<input id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
						<label for="bordered-radio-2" class="w-full py-4 ms-2 text-sm font-medium text-black dark:text-black">Female</label>
					</div>

					<!-- CheckBox Button -->
					
					

					<div class="flex mt-5">
						<div class="flex items-center h-5">
							<input name="parent" id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
						</div>
						<div class="ms-2 text-sm"> 
							<label for="helper-checkbox" class="font-medium  text-black dark:text-black">Parent</label>
							<p id="helper-checkbox-text" class="text-xs font-normal  text-slate-700 dark:text-grey-300">If you checked this box, this means that you are creating a parent account which is different than normal account.</p>
						</div>
					</div>

					



				</div>
				<div class="sm:col-span-4 mx-auto">
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-l">Sign Up</button>
				</div>
			</div>
		</div>
	</form>
	
</main>