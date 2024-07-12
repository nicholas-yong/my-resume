<script lang="ts">
  import Particles from '@tsparticles/svelte'
  import { config as particlesConfig } from './particlesConfig'
  import type { Container } from '@tsparticles/engine'

  export let particlesId: string = ''

  let onParticlesLoaded = (
    _event: CustomEvent<{
      container: Container
    }>,
  ) => {}
  const typedConfig =
    particlesConfig as unknown as import('@tsparticles/engine').RecursivePartial<
      import('@tsparticles/engine').IOptions
    >
</script>

<Particles
  id={particlesId}
  class="tsParticles"
  options={typedConfig}
  style="height: 100%; width: 100%;"
  on:particlesLoaded={onParticlesLoaded}
/>
