<script lang="ts">
  import Icon from "../Icons/Icon.svelte"
const defaultIcons = ['github', 'stackOverflow', 'linkedin', 'mail']
</script>

<div class = "iconBar">
    {#each defaultIcons as iconName, i}
    <div class = "iconContainer">
        <Icon iconName = {iconName}/>
    </div>
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
