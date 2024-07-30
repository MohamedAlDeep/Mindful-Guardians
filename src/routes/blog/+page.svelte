<script>
    import NavBar from "../../components/navBar/navBar.svelte";
    export let data
    console.log(data.blogs)
</script>
<NavBar cookie={null}/>

<h1>Blogs</h1>
{#each data.blogs as blog}
    <div class="blog rounded">
        <h2>Id</h2>
        <h3>{blog._id}</h3>
        <h2>Title</h2>
        <h3>{blog.title}</h3>
        <h2>Author</h2>
        <h3>{blog.Author}</h3>
        <h2>Date</h2>
        <h3>{blog.Date}</h3>
    </div>
{/each}


<style>
    .blog{
        background-color: antiquewhite;
        padding: 2rem;
        width: 20rem;
    }
    h1{
        font-size: 3rem;
        margin: 2rem;
    }
    .blog{
        margin: 2rem;
    }
    h2{
        font-size: 1.5rem;
        font-weight: 300;
    }
    h3{
        font-size: 1;
        
    }
</style>