<script lang="ts">
  import { defaultIcons, type ExternalLinks } from '$lib/IconBar/types'
  import Particles from '$lib/Misc/Particles.svelte'

  const { externalLink: emailLink, rawValue: email } =
    defaultIcons.find(({ name }) => name === 'mail') || ({} as ExternalLinks)
  const { externalLink: linkedinLink, rawValue: linkedin } =
    defaultIcons.find(({ name }) => name === 'linkedin') ||
    ({} as ExternalLinks)
</script>

<div id="footer">
  <Particles particlesId="footerParticles" />
  <div class="rowContainer">
    <div class="innerRow">
      <h3>Contact Me</h3>
      <div class="contactInformation">
        <h4>Email:</h4>
        <a href={emailLink}>{email}</a>
        <h4>LinkedIn:</h4>
        <a href={linkedinLink}>{linkedin}</a>
      </div>
    </div>
  </div>
</div>

<style type="text/scss" lang="scss">
  @use '../../helpers/styles' as styles;
  #footer {
    position: relative;
    h3 {
      color: white;
      white-space: nowrap;
    }

    span {
      color: #faf9f6;
    }

    a {
      text-decoration: none;
      color: #00acff;
    }
  }

  :global(#footerParticles) {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    top: 0;
  }

  .rowContainer {
    padding-top: styles.$margins-large;
    padding-bottom: styles.$margins-large;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .innerRow {
    padding: styles.$margins-small;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    gap: styles.$margins-normal;
  }

  .contactInformation {
    display: flex;
    flex-direction: column;
    gap: styles.$margins-small;

    h4 {
      color: white;
    }
  }
</style>
