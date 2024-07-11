<script lang="ts">
  export let width: number
  export let height: number
  export let src: string
  export let alt: string
  export let rounded: boolean
  export let id: string;
</script>

<img
  {src}
  {alt}
  {width}
  {height}
  {id}
  style:border-radius={rounded ? '50%' : '0%'}
/>

<style>
</style>
