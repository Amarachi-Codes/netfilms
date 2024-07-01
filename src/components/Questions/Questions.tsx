import { useState } from "react";
import "./Questions.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

interface IQuestions{
    title: string
    answer: string
}

const Questions = ({title, answer}:IQuestions) => {


const [isVisible, setIsVisible]= useState(false);

  return (
    <div>
      <div className="questionWrapper">
                        <div className="question">
                            <p>{title}</p>
                            {isVisible ? <FaMinus onClick={() => setIsVisible(!isVisible)} /> : <FaPlus onClick={() => setIsVisible(!isVisible)}/>}
                        </div>
                        {isVisible && (
                        <div className="answer">
                            <p>{answer}</p>
                        </div>
                        )}
                    </div>
    </div>
  )
}

export default Questions
