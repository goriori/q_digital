import React from "react"
import { useNavigate } from 'react-router-dom'
import { clearStore } from "../../utils/storage"

const ResultTest = ({ resultTest }) => {
    const { points, questions, total_questions, type_game } = resultTest
    const nav = useNavigate()
    const logout = () => {
        clearStore()
        nav('/')
    }
    console.log(questions)
    return (
        <div className="result__tested text-center border rounded p-2 border-emerald-300 mt-5">
            <h3>SCORE: {points} </h3>
            <h3>TIMER: 0 </h3>
            <h3> END GAME</h3>
            <div className="result__table">
                <div className="table__category grid grid-cols-3 justify-center items-center border-b-2">
                    <div>Question</div>
                    <div>Answer</div>
                    <div>Correct</div>
                </div>
                {
                    questions.map((question, index) => {
                        return <div className="table__items grid grid-cols-3 justify-center items-center text-center cursor-pointer hover:bg-gray-300 transition hover:text-[20px]" key={index}>
                            <div className="table__item question">{question.question}</div>
                            <div className="table__item current_answer">{question.current_answer}</div>
                            <div className="table__item answer">{question.answer}</div>
                        </div>
                    })
                }
                <button className="p-3 border rounded  text-[15px] " onClick={logout}>GO BACK</button>
            </div>
        </div>
    )
}

export default ResultTest