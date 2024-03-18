<script>
	import Info from "$lib/Info.svelte";
	import Intro from "$lib/Intro.svelte";

</script>   

<Intro
    title="Conheça a academia que mais cresce na cidade!"
    content="Confira algumas das perguntas frequentes."
    img="exercicios"
    icon="weight"
    btn="Modalidades"
    href="/modalidades"
/>

<section class="faq">
    <div class="faq__wrapper wrap">
        <Info 
            question="Quanto custa a mensalidade ?"
            answer="Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text ever since 
            the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book."
        />

        <Info 
            question="Quanto custa a mensalidade ?"
            answer="Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text ever since 
            the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book."
        />

        <Info 
            question="Quanto custa a mensalidade ?"
            answer="Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text ever since 
            the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book."
        />
    </div>
</section>

<style>
    .faq {
        margin-top: 60px;
    }
    .faq__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    @media(max-width: 800px){
        .faq__wrapper {
            grid-template-columns: 1fr;
        }
    }
</style>