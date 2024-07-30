<script>
    export let data
    import NavBar from '../../../components/navBar/navBar.svelte';
    import NoImg from '../../../assets/user-3331257.svg'
</script>

<NavBar cookie={true} home={false}/>

{#if data.user.image == ''}
    <img src={NoImg} alt="Generic User Image (No image)">
{:else}
    <img src={data.user.image} alt="User Image">
{/if}

<h1>Username: </h1>
<h2>{data.user.username}</h2>
<h1>Email: </h1>
<h2>{data.user.email}</h2>

{#if data.user.parent == 'true'}
    <h1>Status</h1>
    <h2>Parent Account</h2>
{:else}
    
{/if}
<h1>Gender</h1>
<h2>{data.user.Gender}</h2>
<style>
    h2{
        color: green;
    }
    img{
        height: 5rem;
        border-radius: 1.2rem;
    }
    
</style>