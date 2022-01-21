<script>
    export let title = "";
    export let background;
</script>


<style>
    .header {
        padding: 300px 0 100px 0;
        background-color: #eff0f2;
        background-size: cover;
        background-position: center;
    }

    .header h1 {
        background-color: #fff;
        font-size: 60px;
        display: inline-block;
        font-weight: 700;
        padding: 8px;
        margin-left: 45px;
    }

    .main {
        background-color: #fff;
        margin-top: -60px;
        padding: 45px;
    }
</style>


<div class="header" style={background && 'background-image: url("' + background + '")'}>
    <div class="container">
        <h1>{title}</h1>
    </div><!-- end container -->
</div><!-- end header -->


<div class="container">
    <div class="main">
        <slot></slot>
    </div><!-- end main -->
</div><!-- end container -->
