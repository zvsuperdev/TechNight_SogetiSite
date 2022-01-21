<script>
    import GeneralTemplate from "../lib/layouts/GeneralTemplate.svelte";
    import IconCard from "$lib/components/IconCard.svelte";

    let values = [
        {title: "Honesty", description: "Integrity, sincerity and respect for what we say and the commitments we make; ethical behaviour, refusal of dishonest representation of our company.", image: "/images/values/honesty-round-150x150.png"},
        {title: "Boldness", description: "A taste for undertaking things, taking risks, questioning where we are going, all with wisdom not recklessness.", image: "/images/values/boldness-round-150x150.png"},
        {title: "Trust", description: "The desire to give people and teams responsibility, to make sure decisions are taken closely to those who have to execute them, founded on open communication. Trust also consists of ensuring total openness amongst people within the company.", image: "/images/values/trust-round-150x150.png"},
        {title: "Team Spirit", description: "Solidarity, friendship, loyalty and transparency, resulting in efficient work with each other and our customers and the sharing of the fruits of collective work.", image: "/images/values/team-spirit-round-150x150.png"},
        {title: "Modesty", description: "Avoiding pretentiousness, arrogance and boastfulness, exercising discretion and listening and accepting others.", image: "/images/values/modesty-round-150x150.png"},
        {title: "Fun", description: "Enjoy working together, being part of a team, achieving our objectives and celebrating our successes, a sense of warmth.", image: "/images/values/fun-round-150x150.png"},
        {title: "Freedom", description: "Independence in thought, judgment and deeds, and entrepreneurial spirit, creativity. It also means tolerance, respect for others, for different cultures and customs: an essential quality in a Group of over 270,000 people of around 120 different nationalities.", image: "/images/values/freedom-round-150x150.png"},
    ]
</script>

<svelte:head>
    <title>Join Sogeti</title>
</svelte:head>


<GeneralTemplate title="Join Sogeti" background="/images/backgrounds/header-join.jpg">

    <h2>Working at Sogeti</h2>

    <p>We believe it is the responsibility of all employees to ensure that an environment of equality and diversity is maintained and celebrated, even against a backdrop that is fast paced and incredibly varied.</p>

    <p class="mb-100">To provide a solid platform, Sogeti has developed seven values that sum up the company’s culture and approach. This helps employees to understand what is expected of them and what they should expect from the company. These were established early in the company’s history, but they remain just as relevant today:</p>

    <div class="row justify-content-center">
        {#each values as value}
            <article class="col-xl-4 position-relative">
                <IconCard image={value.image} title={value.title} description={value.description} />
            </article>
        {/each}
    </div>


</GeneralTemplate>


<style>
    .mb-100 {margin-bottom: 100px}
    article {
        margin-bottom: 100px;
    }
</style>