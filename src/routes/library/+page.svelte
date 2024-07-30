<script>
    import NavBar from "../../components/navBar/navBar.svelte";
    import data from '../../assets/pdfs.json'
    // import pdfUrl from './pdfs/1.pdf?url';
</script>
<NavBar cookie={null}/>

<h2>Library</h2>

    <!-- <div class="main"> -->
        {#each data as book}
            <div class="rounded">
                <h2 class="num">Number: {book.number}</h2>
                <h2>Title</h2>
                <h3>{book.Name}</h3>
                <h2>Author</h2>
                <h3>{book.author}</h3>
                <a href={book.source}>Download</a>
            </div>
        {/each}
    <!-- </div> -->



<style>
    .num{
        font-size: 2rem;
    }
    div{
        margin: 2rem;
        /* height: 20rem; */
        padding: 2rem;   
        border-bottom: 1px solid black;
    }
    h2{
        margin: 1.4rem;
        font-size: 1.5rem;
        font-weight: 500;
    }
    h3{
        margin: 1.4rem;
        font-weight: 200;
        padding-left: 1.2rem;
    }
</style>