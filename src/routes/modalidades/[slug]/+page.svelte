<script>

    import { page } from '$app/stores'
	import Card from '$lib/Card.svelte';
	import IntroSingle from '$lib/IntroSingle.svelte';
    import { modalidades } from '$lib/stores'

    import autoAnimate from '@formkit/auto-animate';

    //let modalidade = $page.params.slug;

    //let data = $modalidades.find(element => element.slug === modalidade)
    export let data;
</script>

{#key data}
<IntroSingle data={data} />
{/key}

<section class="related">
    <div class="related__wrapper wrap">
        <h3>Outras modalidades:</h3>
        <div class="list" use:autoAnimate>
            {#each $modalidades as info}
                {#if info.slug !== $page.params.slug}
                <Card info={info} />
                {/if}
            {/each}
        </div>
    </div>
</section>

<style>
    .related {
        margin-top: 40px;
    }
    .list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        margin-top: 16px;
    }
</style>