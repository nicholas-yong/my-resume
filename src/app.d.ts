// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    userid: string
  }

  // interface Platform {}

  // interface PrivateEnv {}

  // interface PublicEnv {}

  // interface Session {}

  // interface Stuff {}
}

declare module 'svelte-icons/fa/*.svelte' {
  import { SvelteComponentTyped } from 'svelte'
  export default class extends SvelteComponentTyped<{}> {}
}

declare module 'svelte-icons/md/*.svelte' {
  import { SvelteComponentTyped } from 'svelte'
  export default class extends SvelteComponentTyped<{}> {}
}
