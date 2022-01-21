<script>
    let countries = [
        "USA",
        "Italy",
        "France",
        "Spain"
    ];
</script>


<style>
    img {
        max-width: 100px;
        height: 54px;
    }
</style>


<div class="d-flex align-items-center px-4 py-2">
    <div class="col-auto">
        <a href="/" sveltekit:prefetch><img src="/images/logo.svg" alt="Logo" class="img-fluid"></a>
    </div>

    <div class="col-auto ms-auto">
        <button class="btn btn-light">Search</button>
    </div>

    <div class="col-auto">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Worldwide
            </button>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {#each countries as country}
                    <li><a class="dropdown-item" href="#">{country}</a></li>
                {/each}
            </ul>
        </div>
    </div>
</div>