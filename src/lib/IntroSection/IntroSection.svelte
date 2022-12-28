<script>

</script>

<div class = "introductionBox">
    <div class = "textArea">
        <h1>Hey, </h1>
        <span>I'm Nicholas Yong, a fullstack developer currently working in Perth.
        <br/>
        I primarily focus on web and cloud technologies, but really I'm eager to learn about all areas of tech.
        <br/>
        My other hobbies involve gaming, bouldering and giving speeches in my local Toastmasters.
        </span>
    </div>
</div>

<style type="text/scss">
    @use "../../helpers/styles" as styles;

    .introductionBox
    {
        background-color: lightblue;
        height: 200px;
        display: flex;
        align-items: center;
    }

    .textArea
    {
        padding: styles.$margins-small styles.$margins-normal;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
    }

    .textArea > span
    {
        font-size: styles.$font-size-normal;
        line-height: 48px;
    }

    .textArea > h1
    {
        font-weight: 700;
        font-size: styles.$font-size-large;
        line-height: 24px;
        display: block;
        margin-bottom: styles.$margins-normal;
    }


    @media only screen and (max-width: styles.$breakpoint-tablet) {
        .textArea > span {
            font-size: styles.$font-size-normal;
            line-height: 30px;
        }
    }

    @media only screen and (max-width: styles.$breakpoint-mobile) {
        .textArea > span {
            font-size: styles.$font-size-small;
            line-height: 24px;
        }


        .textArea > h1
        {
            font-size: styles.$font-size-large;
            line-height: 24px;
        }
    }


</style>
