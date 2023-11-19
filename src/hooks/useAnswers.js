import { useRef, useState } from "react"


export const useAnswers = () => {

    const [userAnswers, setUserAnswers] = useState([{
        userAnswer: '',
        author: '',
        indexInputRef: '',
    }]);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const inputsRef = useRef([]);
    return {}
}
