import { useState } from "react"


export const useAnswers = () => {

    const [userAnswers, setUserAnswers] = useState([{
        userAnswer: '',
        author: '',
        indexInputRef: '',
    }])
    return {}
}
