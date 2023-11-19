import { Buttons } from "./components/Buttons";
import { Quotes } from "./components/Quotes";
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
            : <Quotes data={ data } />

        }
        </>
    )
}
