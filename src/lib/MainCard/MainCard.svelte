<script lang="ts">
  import ProfilePicture from '../../assets/profilePicture.jpeg'
  import Image from '../images/Image.svelte'
  import IconBar from '../IconBar/IconBar.svelte'
  import Particles from '$lib/Misc/Particles.svelte'
</script>

<div id="mainBox">
  <div class="particlesContainer">
    <Particles particlesId={'main-particles'} />
  </div>
  <div id="informationContainer">
    <div>
      <Image
        rounded={true}
        src={ProfilePicture}
        alt={'profilePicture'}
        width={130}
        height={130}
        id={'profilePicture'}
      />
    </div>
    <div class="textInformation">
      <span id="textInformation-name">Nicholas Yong</span>
      <br />
      <span id="textInformation-description"
        >Developer, writer and boulderer</span
      >
    </div>
    <div class="socialLinks">
      <IconBar iconSize={'md'} />
    </div>
  </div>
</div>

<style type="text/scss" lang="scss">
  @use '../../helpers/styles' as styles;
  #mainBox {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #informationContainer {
    display: flex;
    flex-direction: column;
    gap: styles.$margins-normal;
    padding: styles.$margins-normal;
    align-items: center;
    color: white;
    position: absolute;
  }

  .textInformation {
    text-align: center;
  }

  .particlesContainer {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    left: 0;
  }

  #textInformation-name {
    display: block;
  }

  #textInformation-description {
    margin-bottom: styles.$margins-small;
  }

  @media only screen and (min-width: styles.$breakpoint-tablet) {
    #textInformation-name {
      font-size: styles.$font-size-xxlarge;
    }

    #textInformation-description {
      font-size: styles.$font-size-xlarge;
    }

    :global(#profilePicture) {
      width: 150px;
      height: 150px;
    }
  }

  @media only screen and (max-width: styles.$breakpoint-tablet) {
    #textInformation-name {
      font-size: styles.$font-size-xxlarge;
      margin-bottom: 0;
    }

    #textInformation-description {
      font-size: styles.$font-size-xlarge;
    }

    :global(#profilePicture) {
      width: 125px;
      height: 125px;
    }
  }

  @media only screen and (max-width: styles.$breakpoint-mobile) {
    #textInformation-name {
      font-size: 4rem;
      line-height: 6rem;
      margin-bottom: 0;
    }

    #textInformation-description {
      font-size: styles.$font-size-large;
    }

    :global(#profilePicture) {
      width: 100px;
      height: 100px;
    }
  }
</style>
