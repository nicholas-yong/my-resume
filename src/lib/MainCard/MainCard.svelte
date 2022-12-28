<script>
    import ProfilePicture from '../../assets/profilePicture.jpeg'
    import Image from '../images/Image.svelte'
    import IconBar from '../IconBar/IconBar.svelte'
</script>


<div id = "mainBox">
    <div id = "informationContainer">
        <div>
            <Image rounded = {true} src = {ProfilePicture} alt = {"profilePicture"} width = {100} height = {100}/>
        </div>
        <div class = "textInformation">
            <span id = "textInformation-name">Nicholas Yong</span>
            <br/>
            <span id = "textInformation-description">Developer, writer and boulderer</span>
        </div>
        <div class = "socialLinks">
            <IconBar/>
        </div>
    </div>
</div>

<style type="text/scss">
    @use "../../helpers/styles" as styles;
    #mainBox
    {
        margin: 0 auto;
        padding: styles.$margins-xlarge;
    }

    #informationContainer
    {
        display: flex;
        flex-direction: column;
        gap: styles.$margins-normal;
        padding: styles.$margins-normal;
        align-items: center;
    }

    .textInformation
    {
        text-align: center;
    }

    #textInformation-name
    {
        font-size: styles.$font-size-xlarge;
        display: block;
        margin-bottom: styles.$margins-small;
    }

    #textInformation-description
    {
        font-size: styles.$font-size-large;
        margin-bottom: styles.$margins-small;
    }
</style>
