<script>
    import GeneralTemplate from "../lib/layouts/GeneralTemplate.svelte";
    import IconCard from "$lib/components/IconCard.svelte";

    let services = [
        {name: "Analytics", description: "We connect all your teams to our high-performance collaborative workplace. They can work anytime, anyplace, anywhere.", image: "/images/services/analytics-analytics-round-icon-150x150.png"},
        {name: "Artificial Intelligence", description: "Our solution to drive out bring new business value and business functionality, and deliver new customer experiences at speed.", image: "/images/services/ai-synthetic-data-capability-round-icon-150x150.png"},
        {name: "Automation", description: "Our solution to drive out bring new business value and business functionality, and deliver new customer experiences at speed.", image: "/images/services/automation-rpa-build-round-icon-150x150.png"},
        {name: "Cloud Services", description: "Our world-class solution that automates and optimizes your migration path, app by app. Meaning you can get to value faster.", image: "/images/services/cloud-strategy-round-icon-150x150.png"},
        {name: "Cybersecurity", description: "Our solution to drive out bring new business value and business functionality, and deliver new customer experiences at speed.", image: "/images/services/cybersecurity-cybersecurity-consulting-round-icon-150x150.png"},
        {name: "Quality Engineering and Testing", description: "Our value focused, public cloud planning and implementation. Designed and implemented to your specific needs.", image: "/images/services/digital-assurance-testing-customer--experience-150x150.png"},
        {name: "Digital", description: "We ensure the availability and performance of your application landscape in a cost-optimised model. Then you can focus on your core business.", image: "/images/services/digital-digital-experiences-150x150.png"},
    ]
</script>

<svelte:head>
    <title>Services Overview</title>
</svelte:head>


<GeneralTemplate title="Services Overview" background="/images/backgrounds/header-services-bg.png">

    <h2>Quality for us is to deliver what our clients want. Get inspired by what other companies have as you move ahead on your road to cost-efficient innovation.</h2>

    <div class="row justify-content-center">
        {#each services as service}
            <article class="col-xl-4 position-relative">
                <IconCard image={service.image} title={service.name} description={service.description} />
            </article>
        {/each}
    </div>

</GeneralTemplate>


<style>
    h2 {
        margin-bottom: 100px;
    }
    article {
        margin-bottom: 100px;
    }
</style>