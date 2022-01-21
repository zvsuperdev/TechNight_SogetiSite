<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                title: status,
                message: error.message
            }
        };
    }
</script>

<script>
    import GeneralTemplate from "../lib/layouts/GeneralTemplate.svelte";
    export let title;
    export let message;
</script>

<svelte:head>
    <title>Error</title>
</svelte:head>


<GeneralTemplate title="Error" background="/images/backgrounds/header-research.jpg">

    <h2>{title}</h2>
    <h3>{message}</h3>

</GeneralTemplate>
