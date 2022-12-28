<script>
    import SkillsList from "./SkillsList.svelte"
    import { Skills } from './Skills'
</script>

<div class = "SkillContainer">
    {#each Skills as skill}
        <SkillsList skillsList = {skill}/>
    {/each}
</div>

<style>
</style>
