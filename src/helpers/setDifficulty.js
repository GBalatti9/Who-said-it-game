import { useApi } from "../hooks/useApi";

export const useFetch = () => {

    const { data, isLoading, getApi } = useApi();

    const gameDifficulty = (num) => {
        const url = `https://api.breakingbadquotes.xyz/v1/quotes/${num}`;
        getApi(url);
    }


    return {
        data,
        isLoading,
        gameDifficulty,
    }

}
