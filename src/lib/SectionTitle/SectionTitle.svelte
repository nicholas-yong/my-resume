<script lang="ts">
    export let sectionTitle: string
</script>

<div class = "sectionTitle">
    <h2>{sectionTitle}</h2>
</div>

<style>
    .sectionTitle
    {
        width: 100%;
        text-align: center;
    }

    .sectionTitle > h2
    {
        font-size: 24px;
        line-height: 20px;
        padding: 16px 0;
    }
</style>
