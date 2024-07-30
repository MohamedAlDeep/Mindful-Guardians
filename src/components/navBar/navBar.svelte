<script>
import Logo from './Logo.png';

export let cookie
console.log(cookie)
let isActive = true;
// async function handleSignOut(){
//     const response = await fetch('/signout', {
// 		method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
// 	})
// 	return response
// }
function toggleClass() {
    isActive = !isActive;
}
</script>
<header class="flex flex-wrap items-center justify-evenly p-4 gap-16 border-b-4 border-gray-400 border-opacity-75 sticky top-0 w-full bg-white">
    <div class="flex-shrink-0">
        <a href="/">
        <img src={Logo} alt="Logo" class="w-40 h-auto md:w-72" />
        </a>
    </div>
    <nav class="flex flex-col-reverse md:flex-row items-center gap-16 mt-4 md:mt-0 mx-auto realtive ">
        <ul class="flex flex-col md:flex-row gap-4 align-center {isActive ? '' : 'hidden'}">
        <li><a href="" class="text-lg md:text-2xl font-bold text-teal-600 hover:text-teal-500">Blog</a></li>
        <li><a href="" class="text-lg md:text-2xl font-bold text-teal-600 hover:text-teal-500">Sessions</a></li>
        <li><a href="" class="text-lg md:text-2xl font-bold text-teal-600 hover:text-teal-500">Library</a></li>
        <li><a href="" class="text-lg md:text-2xl font-bold text-teal-600 hover:text-teal-500">About Us</a></li>
        </ul>
        <div class="flex flex-row md:flex-row items-center gap-4">
            {#if cookie == true}
                <a href="/signout" class="bg-green-200">Sign Out</a> 
            {:else}
            <a href="/signup" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</a>
            <a href="/login" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Log In</a>  
            {/if}
        </div>  
    </nav>
    <div class="flex-shrink-0 md:hidden">
        <button on:click={toggleClass} class="p-2 text-2xl">
        <i class="fa-solid fa-bars"></i>
        </button>
    </div>
</header>

