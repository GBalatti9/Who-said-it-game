import { useState } from "react"

export const useApi = () => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
    })

    const getApi = async (url) => {

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
    
    return{
        data: state.data,
        isLoading: state.isLoading,
        getApi,
    }
}
