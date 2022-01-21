<script>
    import Image from "$lib/components/Image.svelte";
</script>


<svelte:head>
    <title>Homepage</title>
</svelte:head>


<div class="container">
    <div id="intro">
        <div class="component-1">
            <h1>New Changes to Development</h1>
            <h1>Making the future</h1>
            <p>At Sogeti, we know how to make value from technology, it's our passion. Join us in making the future.</p>

            <a href="#" class="btn btn-light">Services</a>

            <a href="#" class="btn btn-light">Join Us</a>
        </div>

        <div class="component-2">
            <h2>Unlock your value</h2>
            <p>The ability of your business to realize rapid value from existing and future technology is crucial today. At Sogeti, we unlock technology’s possibilities. That’s because making value from technology is our passion, whether we’re ensuring end-to-end quality in your application lifecycle, minimizing the risk of security threats, reducing time-to-market with cloud, or protecting the environment using Artificial Intelligence.</p>
        </div>
    </div>



    <Image src="/images/homepage-hero-banners/biking.jpg" alt="Biking" additionalClasses="mb-5" />

    <Image src="/images/homepage-hero-banners/e-sports.jpg" alt="e-sports" additionalClasses="mb-5" />

    <Image src="/images/homepage-hero-banners/trees.jpg" alt="Trees" additionalClasses="mb-5" />
</div><!-- end container -->


<style>
    #intro {
        background-image: url("/images/homepage-bg.png");
        min-height: 750px;
        padding: 60px 100px;
        background-repeat: no-repeat;
        margin-bottom: 60px;
    }

    .component-1 {
        font-size: 26px;
        max-width: 400px;
        margin-bottom: 220px;
        color: #fff;
    }

    .component-2 {
        font-size: 18px;
        margin-left: 350px;
    }
</style>