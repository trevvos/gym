<script>
    import '../global.css'
    import '@fontsource-variable/roboto-condensed';
    import '@fontsource-variable/cabin';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />
<slot />
<Footer />