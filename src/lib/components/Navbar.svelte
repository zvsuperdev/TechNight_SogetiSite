<script>
    let links = [
        {url: "/about-us", text: "About us"},
        {url: "/why-us", text: "Why Us?"},
        {url: "/services", text: "Services"},
        {url: "/explore", text: "Explore"},
        {url: "/join", text: "Join us"},
        {url: "/contact", text: "Contact us"},
    ]
</script>


<nav class="px-4 border-bottom">
    {#each links as link}
        <a href={link.url} class="d-inline-block p-3" sveltekit:prefetch>{link.text}</a>
    {/each}
</nav>


<style>
    a {
        text-decoration: none;
        color: #0070ad;
        font-weight: 600;
    }
</style>