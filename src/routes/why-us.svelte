<script>
    import GeneralTemplate from "../lib/layouts/GeneralTemplate.svelte";

    let blogs = [
        {name: "Kotug", summary: "Kotug assesses captains’ skills with Sogeti Power App.", image: "/images/blog-posts/kotug-355x215.png", tag: "Digital"},
        {name: "HP and Power Platform", summary: "HP transforms how it manages customer demos with a Microsoft Power Platform solution delivered by Sogeti.", image: "/images/blog-posts/hp-case-study-355x215.png", tag: "Digital"},
        {name: "Rabobank", summary: "Rabobank takes the next step on its digital transformation journey by implementing Microsoft Power Platform, delivered by Sogeti.", image: "/images/blog-posts/rpa-355x215.jpg", tag: "Digital"},
        {name: "Dutch National Library Koninklijke Bibliotheek", summary: "The Royal Dutch Library goes digital with MS Azure.", image: "/images/blog-posts/cloud_355x215.jpg", tag: "Cloud"},
        {name: "Enexis success story", summary: "Enexis goes agile with public cloud migration.", image: "/images/blog-posts/00095-003-enexis-menu-v0.1.png", tag: "Cloud"},
    ]
</script>

<svelte:head>
    <title>Proven Expertise</title>
</svelte:head>


<GeneralTemplate title="Proven Expertise" background="/images/backgrounds/header-why-us.jpg">

    <h2 class="mb-5">Quality for us is to deliver what our clients want. Get inspired by what other companies have as you move ahead on your road to cost-efficient innovation.</h2>

    {#each blogs as blog}
        <article class="pb-3 border-bottom mb-3 d-flex position-relative align-items-center">
            <div class="position-relative me-3">
                <img src={blog.image} alt="article image for {blog.name}" class="img-fluid" width="355" height="215">
                <div class="blog-tag">
                    <div><div class="blog-tag-title">Case Study</div></div>
                    <div><div class="blog-tag-info">{blog.tag}</div></div>
                </div><!-- tag -->
            </div><!-- column -->

            <div>
                <h3>{blog.name}</h3>
                <p>{blog.summary}</p>
                <p><a href="#" class="stretched-link">Read More</a></p>
            </div><!-- end content -->
        </article>
    {/each}

</GeneralTemplate>


<style>
    article img {
        max-width: 315px;
    }
    .blog-tag {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .blog-tag .blog-tag-title {
        background-color: #ff304c;
        color: #fff;
        display: inline-block;
        font-weight: 500;
        padding: 5px;
    }

    .blog-tag .blog-tag-info {
        background-color: #222;
        color: #fff;
        display: inline-block;
        font-weight: 500;
        padding: 5px;
    }
</style>