

export const Quotes = ({ data }) => {
    console.log("FROM QUOTES: ", { data });
    return (
        <form action="">
            {
                data.map((p, i) => (
                    <div key={p + i}>
                        <p className="mt-2 fw-semibold">{p.quote}</p>
                        <input type="text" />
                    </div>
                ))
            }
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary m-2 col-4">Verify</button>
            </div>
        </form>
    )
}
