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

<style>
    #mainBox
    {
        margin: 0 auto;
        padding: 2rem;
    }

    #informationContainer
    {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        align-items: center;
    }

    .textInformation
    {
        text-align: center;
    }

    #textInformation-name
    {
        font-size: 2rem;
        display: block;
        margin-bottom: 0.5rem;
    }

    #textInformation-description
    {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
</style>
