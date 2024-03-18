// @ts-ignore
let modalidades = [
    {
        name: 'Musculação',
        slug: 'musculacao',
        img: '/musculacao.avif',
        content: 'Treinos de musculação individual ou em grupo.'
    },
    {
        name: 'Crossfit',
        slug: 'crossfit',
        img: '/crossfit.avif',
        content: 'Treinos de crossfit individual ou em grupo.'
    },
    {
        name: 'Alongamento',
        slug: 'alongamento',
        img: '/alongamento.avif',
        content: 'Treinos de alongamento individual ou em grupo.'
    },
    {
        name: 'Exercícios',
        slug: 'exercicios',
        img: '/exercicios.avif',
        content: 'Treinos de exercicios individual ou em grupo.'
    },
    {
        name: 'Natação',
        slug: 'natacao',
        img: '/natacao.avif',
        content: 'Treinos de natação individual ou em grupo.'
    },
]


export function load({params}) {
    let data = modalidades.find(element => element.slug === params.slug)
    return data
}