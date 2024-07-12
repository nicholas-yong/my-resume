<script lang="ts">
  import Particles from '$lib/Misc/Particles.svelte'
  export let sectionTitle: string
</script>

<div class="sectionTitle">
  <div class="title-particles-container">
    <Particles particlesId={`${sectionTitle}-particles`} />
  </div>
  <h2>{sectionTitle}</h2>
</div>

<style type="text/scss" lang="scss">
  @use '../../helpers/styles' as styles;
  .sectionTitle {
    width: 100%;
    text-align: center;
    position: relative;
    padding: 4rem 0;
    vertical-align: middle;
  }

  .sectionTitle > h2 {
    font-size: styles.$font-size-xlarge;
    line-height: 20px;
    padding: styles.$margins-small 0;
    color: white;
  }

  .title-particles-container {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    top: 0;
  }
</style>
