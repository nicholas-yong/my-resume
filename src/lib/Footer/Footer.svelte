<script lang="ts">
    import { menuItems } from '../../routes/__layout.svelte'
    import { defaultIcons, type ExternalLinks } from '../IconBar/IconBar.svelte'

    // There are probably better ways of doing this.
    const extractIcon = (linkToFind: string, iconArray: Array<ExternalLinks>) => {
        return iconArray.filter((icon) => icon.iconName === linkToFind)[0].externalLink
    }
</script>


<div class = "footerContainer">
    <div class = "rowContainer">
        <div class = "firstRow">
            <div class = "innerRow">
                <h3>Contact Me</h3>
                <div class = "contactInformation">
                    <span>Email:</span><a href = {extractIcon('mail', defaultIcons)}>&nbsp;nickholas.yong@gmail.com</a>
                    <br/>
                    <span>LinkedIn:</span><a href = {extractIcon('linkedin', defaultIcons)}>&nbsp;My LinkedIn</a>
                </div>
            </div>
            <div class = "innerRow">
                <h3>Site Map</h3>
                {#each menuItems as {title}}
                    <span>{title}</span>
                {/each}
            </div>
        </div>
        <div class = "secondRow">
            <div class = "copyrightInformation">
            </div>
        </div>
    </div>
</div>

<style type="text/scss">
    @use "../../helpers/styles" as styles;
    .footerContainer
    {
        background-color: black;

        h3 {
            color: white;
        }

        span {
            color: #FAF9F6;
        }

        a {
            text-decoration: none;
            color: #00acff;
        }
    }

    .rowContainer 
    {
        padding-top: styles.$margins-large;
        padding-bottom: styles.$margins-large;
        display: flex;
        flex-direction: column;
    }

    .firstRow
    {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        gap: 10%;
    }

    .innerRow 
    {
        padding: styles.$margins-small;
        display: flex;
        flex-direction: column;
        align-content: space-between;
        gap: styles.$margins-small;
    }

</style>
