<script>
    export let image = "";
    export let title = "";
    export let description = "";
</script>


<div class="service-bg">
    <img src={image} alt="Image for service {title}" class="img-fluid d-block mx-auto">
    <h3>{title}</h3>
    <p>{description}</p>
</div><!-- end service bg -->


<style>
    .service-bg {
        background-color: #0070AD;
        color: #fff;
        padding: 25px 25px 25px 25px;
        height: 100%;
    }

    .service-bg img {
        margin-top: -104px;
    }
</style>