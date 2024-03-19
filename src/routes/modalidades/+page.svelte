<script>
	import Card from "$lib/Card.svelte";
	import Intro from "$lib/Intro.svelte";
	import Seo from "$lib/Seo.svelte";
    import { modalidades } from '$lib/stores'
</script>

<Seo 
    name="Modalidades"
    description="A Academia Local tem várias modalidades para que você tem a melhor experiencia possivel"
/>

<Intro 
    title="Temos a modalidade certa para você"
    content="Descubra as diversas modalidades da nossa academia."
    img="alongamento"
    icon="weight"
    href="/"
/>

<section class="modalidades">
    <div class="modalidades__wrapper wrap">
        
        {#each $modalidades as modalidade}
            <Card 
                info={modalidade}
            />
        {/each}
    </div>    
</section>

<style>
    .modalidades {
        margin-top: 60px;
    } 
    .modalidades__wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
</style>