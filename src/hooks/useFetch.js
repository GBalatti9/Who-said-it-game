import { useEffect, useState } from "react"

export const useFetch = () => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
    })

    const getApi = async () => {

        const url = `https://api.breakingbadquotes.xyz/v1/quotes/`;

        setState({
            ...state,
            isLoading: true,
        })

        try {
            const resp = await fetch(url);
            const data = await resp.json();

            setState({
                data: data,
                isLoading: false,
            })

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getApi();
    }, []);

    console.log(state);
    


    return {
        data: state.data,
        isLoading: state.isLoading,
    }

}
