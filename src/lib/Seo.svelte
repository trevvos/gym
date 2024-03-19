<script>
    export let name;
    export let description;

    let siteName = 'Academia Local'
    let separator = ' - '
</script>

<svelte:head>
    <title>{name}{separator}{siteName}</title>
    <meta name="description" content="{description}">
</svelte:head>