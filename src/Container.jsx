import { Buttons } from "./components/Buttons";
import { Quotes } from "./components/Quotes";
import { useFetch } from "./helpers/setDifficulty";

export const Container = () => {

    const { data, isLoading, gameDifficulty } = useFetch();

    const buttonInfo = [
        { name: 'Easy', color: 'primary', value: 5 },
        { name: 'Mid', color: 'danger', value: 10 },
        { name: 'Hard', color: 'warning', value: 15 },
    ]

    return (
        <>

            <div className="d-flex align-items-center justify-content-center">
                <div className="col-12 col-lg-6 container-fluid">
                    <div className="text-center vh-20">
                        <h1>Breaking Bad Quotes</h1>
                        <h3>Who said it</h3>
                    </div>
                    <hr />


                    {
                        isLoading ?
                            <Buttons info={buttonInfo} fn={gameDifficulty} />
                            : <Quotes data={data} />

                    }
                </div>
            </div>
        </>
    )
}
