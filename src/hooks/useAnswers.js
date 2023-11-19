import { useRef, useState } from "react";

export const useAnswers = () => {

    const [userAnswers, setUserAnswers] = useState([{
        userAnswer: '',
        author: '',
        indexInputRef: '',
    }])
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const inputRefs = useRef([]);

    const handleChange = ({ target }, author, i) => {
        const { value } = target;
        console.log({ value, author });

        setUserAnswers((prevAnswers) => [
            ...prevAnswers.slice(0, i),
            {
                userAnswer: value,
                author: author,
                indexInputRef: i,
            },
            ...prevAnswers.slice(i + 1),
        ]);

    }

    const checkAnswers = (e) => {
        e.preventDefault();
        let correctAnswersArray = [];
        userAnswers.map((answer) => {
            if (answer.userAnswer.toLowerCase() === answer.author.toLowerCase()) {
                inputRefs.current[answer.indexInputRef].style.border = '1px solid green';
            } else {
                inputRefs.current[answer.indexInputRef].style.border = '1px solid red';
                correctAnswersArray.push(answer.author);
            }
        })
        console.log({ correctAnswersArray });
        setCorrectAnswers(correctAnswersArray);
    }

    return {
        inputRefs,
        correctAnswers,
        handleChange,
        checkAnswers
    }

}
