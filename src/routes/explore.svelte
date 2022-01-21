<script>
    import GeneralTemplate from "../lib/layouts/GeneralTemplate.svelte";
    import SimpleBlogCard from "$lib/components/SimpleBlogCard.svelte";

    let featured = [
        {title: "World Quality Report 2021-22", description: "A new realism in QA.", image: "1.jpg"},
        {title: "State of AI applied to Quality Engineering 2021-22", description: "AI is becoming essential for Quality Engineering.", image: "2.png"},
        {title: "State of Worldwide Business Assurance for SAP solutions", description: "SAP customers are in the midst of two major transformations: moving to S/4HANA and migrating to the cloud. A ground breaking new report from Tricentis, Capgemini, and Sogeti shows whose testing strategies are up to the challenges ahead.", image: "3.jpg"},
        {title: "6 tips to integrate security into your DevOps practices", description: "Modern App Development and Enterprise DevOps Series.", image: "4.png"},
        {title: "Infinite Machine Creativity", description: "Rethink creativity in the era of Artificial Intelligence.", image: "5.gif"},
        {title: "Climate AI", description: "How artificial intelligence can power your climate action strategy.", image: "6.png"},
    ];

    let futureOfTechnology = [
        {title: "World InsurTech Report 2021", image: "7.png"},
        {title: "Next Destination: Software", image: "8.png"},
        {title: "Conversations for Tomorrow #2", image: "9.png"},
        {title: "World Wealth Report 2021", image: "10.png"},
        {title: "Accelerating the 5G Industrial Revolution", image: "11.png"},
        {title: "Sustainable Operations", image: "12.png"},
        {title: "CyberSeChronicles", image: "13.png"},
        {title: "The Age of Insight", image: "14.png"},
        {title: "World FinTech Report 2021", image: "15.png"},
    ];
</script>

<svelte:head>
    <title>Research</title>
</svelte:head>


<GeneralTemplate title="Research" background="/images/backgrounds/header-research.jpg">

    <h2>Thought Leadership and Innovation</h2>

    <p>Our passion for technology puts us in the forefront when it comes to thought leadership around technology innovations and the impact they have. To share our knowledge we have created SogetiLabs and VINT which produce original research into the likely impact and innovative application of new technologies, trends and IT systems for organisations worldwide. As a part of the Capgemini Group we also share interesting reports and Point of Views from our other experts within the Group.</p>

    <h3>Featured</h3>

    <div class="row justify-content-center mb-5">
        {#each featured as item}
            <article class="col-xl-4 position-relative mb-4">
                <div class="featured-bg">
                    <img src="/images/research/{item.image}" alt="Image for article {item.title}" class="img-fluid d-block w-100" width="381" height="231" />
                    <div class="p-3">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div><!-- end bg -->
            </article>
        {/each}
    </div>


    <h3>Future of Technology</h3>


    <div class="row justify-content-center mb-5">
        {#each futureOfTechnology as item}
            <div class="col-xl-4 position-relative">
                <SimpleBlogCard src="/images/research/{item.image}" title={item.title} />
            </div>
        {/each}
    </div>

</GeneralTemplate>


<style>
    .featured-bg {
        background-color: #0070AD;
        color: #fff;
        height: 100%;
    }
</style>