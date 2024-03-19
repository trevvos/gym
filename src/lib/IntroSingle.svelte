<script>
// @ts-nocheck

    export let data;
    import autoAnimate from '@formkit/auto-animate';
	import { fly } from 'svelte/transition';
</script>

<div class="intro">
    <div class="intro__wrapper wrap">
        <div class="intro__info">
            <h1 in:fly={{
                y: -12, duration: 125, delay: 125
            }}>{data.name}</h1>
            
            <p in:fly={{
                y: -12, duration: 125, delay: 250
            }}>{data.content}</p>
        </div>
        <div class="intro__img">
            <img src="{data.img}" alt="">
        </div>
    </div>
</div>

<style>
    .intro__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        align-items: center;
        
    }
    .intro__img {
         margin-right: -20px;   
         position: relative;
    }
    .intro__img::before {
        content: '';
        display: block;
        position: absolute;
        inset: 0;
        background-color: var(__overlay);
        border-radius: 0 0 0 8px;
    }
    img {
        border-radius: 0 0 0 8px;
        height: 360px;
        object-fit: cover;
        margin-left: auto;
    }
    p {
        font-size: calc(18 / 16 * 1rem);
        margin-top: 8px;
    }

    @media(max-width: 800px) {
        .intro__wrapper {
            grid-template-columns: 1fr;
        }
        .intro__img {
            grid-row: 1;
            margin-left: -20%;
        }
        img {
            width: 100%;
            height: 240px;
            object-position: center;
        }
    }
</style>