<script>
    import img from '$lib/assets/musculacao.avif'
    export let description;

    let siteName = 'Academia Local'
    let separator = ' - '
</script>

<svelte:head>
    <title>{siteName}{separator}A Academia pertinho de você!</title>
    <meta name="description" content="{description}">
    <meta property="og:title" content="A Academia pertinho de você!">
    <meta property="og:description" content="{description}" />
    <meta property="og:image" content="{img}" />
</svelte:head>

