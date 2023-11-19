

export const Buttons = ({ info, fn }) => {
    console.log({info});
    return (
        <div className="d-flex justify-content-around col-10 m-auto">
            {
                info.map((info, i) => (
                    <button 
                        key       = {info + i} 
                        className = {`btn btn-${info.color} p-2 col-2`} 
                        name      = {`${info.name}`} 
                        onClick   = {() => fn(info.value)}> 
                        {info.name} 
                        </button>
                ))
            }
        </div>
    )
}
