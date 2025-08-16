<script>
import { base } from '$app/paths';
import "../app.css"
let {children} = $props();
</script>
<main>

	<nav>
		<a href={`/`}>home</a>
    <a href={`/quotes`}>quotes</a>
	</nav>
	
</main>

{@render children?.()}
