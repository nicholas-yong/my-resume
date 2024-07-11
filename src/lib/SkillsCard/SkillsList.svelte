<script lang="ts">
  import type { SkillList } from './Skills'
  export let skillsList: SkillList

  const cleanSkillString = (skillString: Array<string>) =>
    skillString.reduce((prev, curr) => {
      return prev + ', ' + curr
    })
</script>

<div class="skillsContainer">
  <div class="heading">
    <h3>
      {skillsList.category.charAt(0).toUpperCase() +
        skillsList.category.substring(1)}
    </h3>
  </div>
  <div class="skillsList">
    <ul>
      {#each skillsList.skills as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>
</div>

<style type="text/scss" lang="scss">
  @use '../../helpers/styles' as styles;
  .skillsList {
    display: flex;
    margin-top: styles.$margins-normal;
    flex-wrap: wrap;
  }

  .heading {
    text-align: center;
  }

  .skillsContainer {
    margin-top: styles.$margins-normal-large;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      background-color: black;
      height: 1px;
      top: -10px;
    }
  }
</style>
