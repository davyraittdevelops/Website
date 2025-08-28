<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/x-icon" href="/favicon.ico" />
	<title>👨‍💻 CodingDoneRaitt - Cloud & DevOps Engineer</title>
	<meta name="description" content="Cloud & DevOps Engineer specializing in AWS, full-stack development, and modern web technologies." />
</svelte:head>

{@render children?.()}
