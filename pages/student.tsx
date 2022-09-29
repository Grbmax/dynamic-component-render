import { InferGetServerSidePropsType } from "next";

type Cards = {
    id : string
    name : string
    grade : string
}

export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/data`)
    const cards: Cards[] = await res.json()
    console.log(cards)
    return {
        props: {
            cards,
        },
    }
}

function Student({ cards }: InferGetServerSidePropsType<typeof getStaticProps>) {
    return (
        <h1>{cards.map(cards => {
            return (
                <p></p>
            )
        })}</h1>
    )
}

export default Student