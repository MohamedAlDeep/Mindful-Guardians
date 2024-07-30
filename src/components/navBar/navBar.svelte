<script>
import Logo from '../../assets/Logo.png';

export let cookie
import ProfileImg from '../../assets/WhatsApp Image 2024-07-30 at 19.22.29_c8d945d1.jpg'
let isActive = true;
let isActiveMenu = false
function toggleClass() {
    isActive = !isActive;
}
function toggleMenu(){
    isActiveMenu = !isActiveMenu
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
        <li><a href="/blog" class="text-lg md:text-2xl  text-teal-60011 hover:text-teal-50011 colorCss"> Blog</a></li>
        <li><a href="/courses" class="text-lg md:text-2xl  text-teal-60011 hover:text-teal-50011 colorCss">Courses</a></li>
        <li><a href="/library" class="text-lg md:text-2xl  text-teal-60011 hover:text-teal-50011 colorCss">Library</a></li>
        <li><a href="/aboutus" class="text-lg md:text-2xl  text-teal-60011 hover:text-teal-50011 colorCss">About Us</a></li>
        </ul>
        <div class="flex flex-row md:flex-row items-center gap-4">
            {#if cookie == true}
            <button on:click={toggleMenu}>
                <img src={ProfileImg} class="profile" alt="">
            </button>
            <div id="myDropdown" class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            {:else}
            <a href="/signup" class="bgColorForSignUp bg-blue-500d hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded">Sign Up</a>
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

<style>
    .colorCss{
        color: rgb(87, 87, 231);
    }
  
    .profile{
        height: 5rem;
        border-radius: 2rem;
    }
    .bgColorForSignUp{
        background-color: rgb(87, 87, 231);
    }

   header{
    background-color: #FBF6F0;
   }
</style>
