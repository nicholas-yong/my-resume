<script lang="ts">
    export let title: string
    export let skills: Array<string>
</script>

<div>
    <h3>{title}</h3>
    <div class="skillsList">
        {#each skills as skill}
            <span>{skill}</span>
        {/each}
    </div>
</div>

<style>
    .skillsList
    {
        display: flex;
        flex-wrap: wrap;
    }
</style>
