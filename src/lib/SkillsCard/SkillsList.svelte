<script lang="ts">
    import type { SkillList } from './Skills'
    export let skillsList: SkillList
</script>

<div>
    <h3>{skillsList.category}</h3>
    <div class="skillsList">
        {#each skillsList.skills as skill}
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
