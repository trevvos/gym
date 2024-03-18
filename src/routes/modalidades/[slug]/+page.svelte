<script>

    import { page } from '$app/stores'
	import IntroSingle from '$lib/IntroSingle.svelte';
    import { modalidades } from '$lib/stores'

    let modalidade = $page.params.slug;

    let data = $modalidades.find(element => element.slug === modalidade)
</script>

<IntroSingle data={data} 

/>