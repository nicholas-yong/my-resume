<script lang="ts">
  import MainCard from '$lib/MainCard/MainCard.svelte'
  import IntroSection from '$lib/IntroSection/IntroSection.svelte'
  import SectionTitle from '$lib/SectionTitle/SectionTitle.svelte'
  import Timeline from '$lib/Timeline/Timeline.svelte'
  import Footer from '$lib/Footer/Footer.svelte'
  import { timelineData } from '$lib/static/timelineData'
  import { particlesInit } from '@tsparticles/svelte'
  import { loadSlim } from '@tsparticles/slim'

  void particlesInit(async (engine) => {
    await loadSlim(engine)
  })
</script>

<section>
  <MainCard />
  <IntroSection />
  <SectionTitle sectionTitle={'My Journey'} />
  <Timeline timelinePosts={timelineData} />
  <Footer />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>
