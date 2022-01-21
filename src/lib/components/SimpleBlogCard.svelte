<script>
    export let src = "";
    export let title = "";
</script>

<article class="mb-5 position-relative">
    <img {src} alt="Image for article {title}" class="img-fluid d-block mb-3" width="388" height="235"/>
    <h3>{title}</h3>
    <p><a href="#" class="stretched-link">Read More</a></p>
</article>