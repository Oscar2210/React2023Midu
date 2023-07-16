import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


/** *Renderizado de listas, */
const user = [{
    userName: "Oscar2210",
    name: "Oscar Zambrano",
    isFollowing: true,
},
{
    userName: "JennyAliss",
    name: "Jenny Vanegas",
    isFollowing: false,
},
{
    userName: "Kardashan",
    name: "Aliss Mendieta",
    isFollowing: true,
},
{
    userName: "NaneZAm",
    name: "Daphne McAlister",
    isFollowing: false,
}
]

export function App() {
    return (
        <section className='App'>
            {
                user.map(({ userName, name, isFollowing }) => ( //destructurin
                    <TwitterFollowCard
                        key={userName} //siempre debe pasarse una key y debe ser un valor unico
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
    /* return (
        <section className='App'>
            <TwitterFollowCard userName="Oscar2210" name="Oscar Zambrano" />
            <TwitterFollowCard userName="JennyAliss" name="Jenny Vanegas" />
            <TwitterFollowCard userName="Kardashan" name="Aliss Mendieta" />
            <TwitterFollowCard userName="NaneZAm" name="Daphne McAlister" />
        </section>
    ) */
}
