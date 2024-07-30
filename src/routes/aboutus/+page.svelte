<script>
    import NavBar from '../../components/navBar/navBar.svelte'
</script>

<NavBar cookie={false}/>

<center>
    <div class="first">
        <h1 class="Maintitle">About Us</h1>
        <p>Protecting Your Peace, Every Step of the Way</p>
        
    </div>
    <div class="second">
        <h1 >Who We Are ?</h1>
        <p>
            We are Mindful guardians
            We hope to help people who are being bullied, especially teenagers
            We also hope to help parents know how to understand the child and reduce the psychological damage resulting from bullying to the maximum extent.
            In short, we want a world without bullying
        </p>
        
    </div>
    <div class="third">
        <h1 >Team members</h1>
        <br>
        <!-- Presenter -->
        <h2 >Abdelrahman Abdelwahab</h2>
        
        <!-- Researcher -->
        <h2>Amir El-Sayd</h2>
        
        
        <!-- Leader -->
        <h2>Mazen Mahmoud</h2>
        <!-- Designer -->
        <h2>Karim Metwally</h2>
        
        <!-- Developer -->
        <h2>Mohamed Samir</h2>
    </div>
</center>

<style>
    h1{
        font-size: 3rem;
        font-weight: 500;
    }
    h2{
        font-size: 1.5rem;
        padding: 1.2rem;
        font-weight: 200;

    }
    p{
        font-size: 1rem;
        font-weight: 200;
        /* width: ; */
    }
    center{
        color: #5757E7;
        /* color: #3B82F6; */
        /* color: #8051A3; */
        /* background-color: #F8EBDF; */
    }
    div{
        padding: 1.4rem;
        margin-left: 1.2rem;
        margin-right: 1.2rem;
        margin-bottom: 4rem;
    }
    
    .Maintitle{
        font-size: 5rem;
    }
    .first{
        border-bottom: 1px solid #303099;
        

    }
    .second{
        border-bottom: 1px solid #5757E7;
    }
    .third{
        border-bottom: 1px solid #5757E7;
    }
</style>