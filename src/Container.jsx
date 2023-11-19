import { useFetch } from "./hooks/useFetch";

export const Container = () => {

    const { data, isLoading, gameDifficulty } = useFetch();

    return (
        <>
        {
            isLoading ? 
            <button onClick={() => gameDifficulty(5)}> Easy </button>
            : data.map((p) => (
                <p>{p.quote}</p>
            ))
        }
        </>
    )
}
