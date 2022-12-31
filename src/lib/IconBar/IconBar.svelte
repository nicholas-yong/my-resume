<script context="module" lang="ts">
  import Icon from "../Icons/Icon.svelte"

  export interface ExternalLinks
  {
     iconName: string 
     externalLink: string
  }


export const defaultIcons: Array<ExternalLinks> = [{
    iconName: 'github',
    externalLink: 'https://github.com/nicholas-yong'
 }, {
    iconName: 'stackOverflow',
    externalLink: 'https://stackoverflow.com/users/6099144/nicholas-yong',
  }, {
    iconName: 'linkedin',
    externalLink: 'https://www.linkedin.com/in/nicholasyong97/',
  }, {
    iconName: 'mail',
    externalLink: 'mailto:nickholas.yong@gmail.com'
  }]
</script>

<div class = "iconBar">
    {#each defaultIcons as icon, i}
    <a href = {icon.externalLink}>
        <div class = "iconContainer">
            <Icon iconName = {icon.iconName}/>
        </div>
    </a>
    {/each}
</div>

<style>
    .iconBar
    {
        display: flex;
        flex-direction: row;
        gap: 16px;
    }
</style>
