<script>
let {
  data = null,
  quote = null,
  author = null,
  content = null,
} = $props();
</script>

<div>
  <pre>{JSON.stringify(data,null,2)}</pre>
  <div class="quote">{quote}</div>
  <div class="author">{author}</div>
  <div class="content">{@html content}</div>
</div>

<style>

</style>