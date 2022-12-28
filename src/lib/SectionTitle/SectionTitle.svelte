<script lang="ts">
    export let sectionTitle: string
</script>

<div class = "sectionTitle">
    <h2>{sectionTitle}</h2>
</div>

<style type="text/scss">
    @use "../../helpers/styles" as styles;
    .sectionTitle
    {
        width: 100%;
        text-align: center;
    }

    .sectionTitle > h2
    {
        font-size: styles.$font-size-large;
        line-height: 20px;
        padding: styles.$margins-normal 0;
    }
</style>
