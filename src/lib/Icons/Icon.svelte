<script lang="ts">
  import FaGitHub from 'svelte-icons/fa/FaGithub.svelte'
  import FaStackOverfow from 'svelte-icons/fa/FaStackOverflow.svelte'
  import FaLinkedin from 'svelte-icons/fa/FaLinkedinIn.svelte'
  import FaBars from 'svelte-icons/fa/FaBars.svelte'
  import FaHome from 'svelte-icons/fa/FaHome.svelte'
  import FaQuestion from 'svelte-icons/fa/FaQuestion.svelte'
  import FaAddressBook from 'svelte-icons/fa/FaAddressBook.svelte'
  import FaBookOpen from 'svelte-icons/fa/FaBookOpen.svelte'
  import FaAWS from 'svelte-icons/fa/FaAws.svelte'
  import FaDesktop from 'svelte-icons/fa/FaDesktop.svelte'
  import MdEmail from 'svelte-icons/md/MdMail.svelte'
  import MdClose from 'svelte-icons/md/MdClose.svelte'

  export let iconName: string = ''
  // Unsure if this typing is kinda unnessary, someone more experienced can comment
  export let onClick: (e: MouseEvent) => void = () => null
  export let width: number = 30
  export let height: number = 30
  export let className: string = ''
</script>

<div
  on:click={onClick}
  style="width: {width}px; height: {height}px;"
  class={className}
>
  {#if iconName === 'github'}
    <FaGitHub />
  {:else if iconName === 'stackOverflow'}
    <FaStackOverfow />
  {:else if iconName === 'linkedin'}
    <FaLinkedin />
  {:else if iconName === 'hamburger'}
    <FaBars />
  {:else if iconName === 'home'}
    <FaHome />
  {:else if iconName === 'about'}
    <FaQuestion />
  {:else if iconName === 'contact'}
    <FaAddressBook />
  {:else if iconName === 'aws'}
    <FaAWS />
  {:else if iconName === 'work'}
    <FaDesktop />
  {:else if iconName === 'education'}
    <FaBookOpen />
  {:else if iconName === 'close'}
    <MdClose />
  {:else}
    <MdEmail />
  {/if}
</div>
