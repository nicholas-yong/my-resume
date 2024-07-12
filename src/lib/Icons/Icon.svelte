<script lang="ts">
  import FaGitHub from 'svelte-icons/fa/FaGithub.svelte'
  import FaStackOverfow from 'svelte-icons/fa/FaStackOverflow.svelte'
  import FaLinkedin from 'svelte-icons/fa/FaLinkedinIn.svelte'
  import FaBars from 'svelte-icons/fa/FaBars.svelte'
  import FaHome from 'svelte-icons/fa/FaHome.svelte'
  import FaQuestion from 'svelte-icons/fa/FaQuestion.svelte'
  import FaAddressBook from 'svelte-icons/fa/FaAddressBook.svelte'
  import FaBookOpen from 'svelte-icons/fa/FaBookOpen.svelte'
  import MdClose from 'svelte-icons/md/MdClose.svelte'
  import MdEmail from 'svelte-icons/md/MdEmail.svelte'

  import sevenNewsWebp from './images/7news.webp'
  import awsWebp from './images/aws.webp'
  import uwaWebp from './images/uwa.webp'
  import camcoWebp from './images/camco.webp'
  import goatPathWebp from './images/goatpath.webp'
  import getTwoKnowWebp from './images/get2know.webp'
  import domainWebp from './images/domain.webp';

  export let iconName: string = ''
  export let onClick: (e: MouseEvent) => void = () => null
  export let width: number = 30
  export let height: number = 30
  export let className: string = ''

  const returnImage = (iconName: string) => {
    switch (iconName) {
      case '7news':
        return sevenNewsWebp
      case 'aws':
        return awsWebp
      case 'uwa':
        return uwaWebp
      case 'camco':
        return camcoWebp
      case 'goatpath':
        return goatPathWebp
      case 'get2know':
        return getTwoKnowWebp
      case 'domain':
        return domainWebp
      default:
        return iconName
    }
  }
</script>

<div
  on:click={onClick}
  style="width: {width}px; height: {height}px;"
  class={className}
  role="button"
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
  {:else if iconName === 'close'}
    <MdClose />
  {:else if iconName === 'mail'}
    <MdEmail />
  {:else if iconName === 'education'}
    <FaBookOpen />
  {:else}
    <img src={returnImage(iconName)} alt={iconName} {width} {height} />
  {/if}
</div>
