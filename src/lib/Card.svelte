<script>
// @ts-nocheck
    export let info;
   // import {page} from '$app/stores'

   // let archive = $page.route.id

</script>

<a href="/modalidades/{info.slug}" class="card">
    <img src="{info.img}" alt="" width="120" height="120">
    <h2>{info.name}</h2>
</a>

<style>
    img {
        object-fit: cover;
        border-radius: 4px;
    }
    h2 {
        padding: 8px 16px;
    }
    .card {
        border: 1px solid var(--subtle);
        padding: 4px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        flex-basis: calc(50% - 10px);
    }
    a {
        color: var(--white);
        transition: 250ms;
    }
    a:hover {
        border-color: var(--white);
        transition: 125ms;
    }

    @media(max-width: 800px){
        .card {
            flex-basis: 100%;
        }
    }
</style>