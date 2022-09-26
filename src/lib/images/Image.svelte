<script lang="ts">
    export let width: number
    export let height: number
    export let src: string
    export let alt: string
    export let rounded: boolean
</script>

<img 
    src = {src} 
    alt={alt} 
    width={width}
    height = {height}
    style:border-radius = {rounded?'50%': '0%'}/>

<style>
</style>
