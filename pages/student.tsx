import { InferGetServerSidePropsType } from "next";

type Cards = {
    id : string
    s_name : string
    s_grade : string
}

export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/data`)
    const cards: Cards[] = await res.json()
    return {
        props: {
            cards,
        },
    }
}

function Student({ cards }: InferGetServerSidePropsType<typeof getStaticProps>) {
    return(
        <>
        <div>
        <h1>Students</h1>
        <ul>
            {cards.map(card => {
                return (
                    <>
                        <br />
                        <li key={card.id}>
                            {card.s_name}
                            <br />
                            {card.s_grade}
                        </li>
                    </>
                );
            })}
        </ul>
        </div>
        
        <div>
        <h1>Subject</h1>
        </div>
        </>

        
    )
}

export default Student