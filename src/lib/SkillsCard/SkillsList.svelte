<script lang="ts">
  import type { SkillList } from './Skills'
  export let skillsList: SkillList

  const cleanSkillString = (skillString: Array<string>) =>
    skillString.reduce((prev, curr) => {
      return prev + ', ' + curr
    })
</script>

<div class="skillsContainer">
  <h3>
    {skillsList.category.charAt(0).toUpperCase() +
      skillsList.category.substring(1) +
      '.'}
  </h3>
  <div class="skillsList">
    <span>{cleanSkillString(skillsList.skills)}</span>&nbsp;
  </div>
</div>

<style type="text/scss" lang="scss">
  @use '../../helpers/styles' as styles;
  .skillsList {
    display: flex;
    margin-top: styles.$margins-normal;
    flex-wrap: wrap;
  }

  .skillsContainer {
    margin-top: styles.$margins-large;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 40%;
      background-color: black;
      height: 1px;
      top: -10px;
    }
  }
</style>
