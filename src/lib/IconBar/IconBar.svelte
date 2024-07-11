<script lang="ts">
  import Icon from '../Icons/Icon.svelte'
  import { defaultIcons, type IconSize } from './types'
  export let iconSize: IconSize = 'md';

  const mapIconSizeToWidthHeight = (iconSize: IconSize) => {
    switch(iconSize) {
      case 'md': 
        return {
          width: 30,
          height: 30,
        }
      case 'sm': 
        return {
          width: 20,
          height: 20,
        }
    }
  }


  const { width, height }  = mapIconSizeToWidthHeight(iconSize);
</script>

<div class="iconBar">
  {#each defaultIcons as icon, i}
    <a href={icon.externalLink}>
      <div class="iconContainer">
        <Icon iconName={icon.name} className={'bar-icon'} width={width} height={height}/>
      </div>
    </a>
  {/each}
</div>

<style>
  .iconBar {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  :global(.bar-icon) {
    color: white;
  }
</style>
