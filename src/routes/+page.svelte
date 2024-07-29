<script>
    import MainImage from '../assets/happy-teenagers-foreground.jpg'

</script>
<style>
    .image-container {
  position: relative;
  display: inline-block; /* Ensures container only takes up as much space as the image */
}

.image-container:before {
  content: ''; /* Required for pseudo-elements */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust transparency as needed */
  z-index: 1; /* Ensures the overlay is above the image */
}
</style>
<div class="relative">
    <div class="image-container">
        <img src={MainImage} alt="main image">
    </div>
    <div class="absolute top-1/4 left-5 z-10 flex flex-col justify-center items-center">
        <h2 class="text-6xl font-bold text-white mb-20">Protecting Your Peace, Every Step of the Way</h2>
        <a href="/signup" class="bg-teal-700 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded text-2xl">Book A Session</a>
    </div>
</div>


