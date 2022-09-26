<script>
    import FaGitHub from 'svelte-icons/fa/FaGithub.svelte'
    import FaStackOverfow from 'svelte-icons/fa/FaStackOverflow.svelte'
    import FaLinkedin from 'svelte-icons/fa/FaLinkedinIn.svelte'
    import MdEmail from 'svelte-icons/md/MdMail.svelte'

    export let iconName = '';
</script>

<div class = "iconContainer">
    {#if iconName === 'github'}
        <FaGitHub/>
    {:else if iconName === 'stackOverflow'}
        <FaStackOverfow/>
    {:else if iconName === 'linkedin'}
        <FaLinkedin/>
    {:else}
        <MdEmail/>
    {/if}
</div>

<style>
    .iconContainer
    {
        width: 30px;
        height: 30px;
    }
</style>
