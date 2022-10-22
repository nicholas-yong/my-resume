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
        padding: 0.5rem 1rem;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
    }

    .textArea > span
    {
        font-size: 18px;
        line-height: 48px;
    }

    .textArea > h1
    {
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        display: block;
        margin-bottom: 16px;
    }


    @media only screen and (max-width: styles.$breakpoint-tablet) {
        .textArea > span {
            font-size: 16px;
            line-height: 30px;
        }
    }

    @media only screen and (max-width: styles.$breakpoint-mobile) {
        .textArea > span {
            font-size: 13px;
            line-height: 24px;
        }


        .textArea > h1
        {
            font-size: 24px;
            line-height: 24px;
        }
    }


</style>
