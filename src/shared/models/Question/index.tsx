import Answer from "../Answer";

interface Question {
    id: string,
    title: string,
    answers: Array<Answer>,
}

export default Question;