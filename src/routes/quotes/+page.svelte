<script>
let { data } = $props();
import Quote from "$lib/Quote.svelte";
import { onMount } from "svelte";
let q = $state(null);
async function get_quote(){
  return data.zenquote;
}
onMount(()=>{
})
</script>

<div>
{#await get_quote() then qt }
  <Quote 
    data={qt}
    quote={qt[0].q}
    author={qt[0].a}
    content={qt[0].h}
  ></Quote>
{/await}

</div>

<style>

</style>