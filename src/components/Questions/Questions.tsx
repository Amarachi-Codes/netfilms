import "./Questions.css";
import { FaPlus } from "react-icons/fa6";

interface IQuestions{
    title: string
    answer: string
}

const Questions = ({title, answer}:IQuestions) => {
  return (
    <div>
      <div className="questionWrapper">
                        <div className="question">
                            <p>{title}</p>
                            <FaPlus />

                        </div>
                        <div className="answer">
                            <p>{answer}</p>
                        </div>
                    </div>
    </div>
  )
}

export default Questions
