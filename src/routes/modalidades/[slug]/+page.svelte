<script>
// @ts-nocheck

    import { page } from '$app/stores'
    import { modalidades } from '$lib/stores'

    let modalidade = $page.params.slug;

    let data = $modalidades.find(element => element.slug === modalidade)
</script>

<h1>{data.name}</h1>