// import { useRef, useState } from "react";

import { useAnswers } from "../hooks/useAnswers"

export const Quotes = ({ data }) => {

    const { inputRefs, correctAnswers, handleChange, checkAnswers } = useAnswers();

    return (
        <form action="">
            {
                data.map((q, i) => (
                    <div key={q + i} className="input-container">
                        <p className="mt-2 fw-semibold">{q.quote}</p>
                        <input
                            className="form-control"
                            type="text"
                            name="answer"
                            id="answer"
                            placeholder="Who said it?"
                            ref={(el) => (inputRefs.current[i] = el)}
                            onChange={(e) => handleChange(e, q.author, i)} />
                        {
                            correctAnswers.includes(q.author) && (
                                <span className="text-danger">{q.author}</span>
                            )
                        }
                    </div>
                ))
            }
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary m-2 col-4" onClick={checkAnswers}>Verify</button>
            </div>
        </form>
    )
}
