<script>
  import SkillsList from './SkillsList.svelte'
  import { Skills } from './Skills'
</script>

<div class="SkillContainer">
  {#each Skills as skill}
    <SkillsList skillsList={skill} />
  {/each}
</div>

<style type="text/scss" lang="scss">
  @use '../../helpers/styles' as styles;
  .SkillContainer {
    padding-left: 30%;
    padding-right: 30%;
    padding-bottom: styles.$margins-normal;
  }
</style>
