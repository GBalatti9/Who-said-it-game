import { Buttons } from "./components/Buttons";
import { useFetch } from "./helpers/setDifficulty";

export const Container = () => {

    const { data, isLoading, gameDifficulty } = useFetch();

    const buttonInfo = [
        {name: 'Easy', color:'primary', value: 5},
        {name: 'Mid', color:'danger', value: 10},
        {name: 'Hard', color:'warning', value: 15},
    ]

    return (
        <>
        {
            isLoading ?
            <Buttons info={ buttonInfo } fn={ gameDifficulty } />
            : data.map((p) => (
                <>
                <p>{p.quote}</p>
                <input type="text" />
                </>
            ))
        }
        </>
    )
}
