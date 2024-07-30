<script>
    import NavBar from '../../../components/navBar/navBar.svelte';
</script>

<NavBar cookie={true}/>

<form method="POST" action="?/blog" class="auth-form">
    <h2>Title</h2>
    <input type="text" name="title">
    <h2>Content</h2>
    <textarea class="content" name="content" id=""></textarea>
    <button type="submit">Submit</button>
</form>


<style>
    .content{
        height: 200px;
        resize: vertical;
    }
</style>