import React, { useState, useEffect } from "react"
import { requestHandler } from "../../utils/request"
import { getStore, getToken, clearStore } from "../../utils/storage"
import { useNavigate } from 'react-router-dom'
const TestSlide = ({ testData, updateTest, typeHard, finishTest, }) => {

    const [timer, setTimer] = useState(testData.time)
    const [answerHard, setAnswerHard] = useState()
    const nav = useNavigate()

    const sendAnswer = async (value) => {
        const token = getToken()
        const headers = {
            "X-Access-Token": token
        }
        const input_data = {
            answer: value,
            type_hard: typeHard,
            type: 2
        }
        const response = await requestHandler('https://internsapi.public.osora.ru/api/game/play', 'POST', input_data, headers)
        updateTest(response?.data)
    }

    useEffect(() => {
        console.log('update')
        if (testData.options == undefined) finishTest()
    }, [updateTest, finishTest])
    const logout = () => {
        clearStore()
        nav('/')
    }
    return (
        <div className="TestSlide text-center border rounded p-2 border-emerald-300 mt-5">
            <h3>SCORE: {testData.points} </h3>
            <h3>TIMER: {testData.timer}</h3>
            <h3> {testData.question} = ?</h3>

            {
                typeHard === 1
                    ?
                    <div className="answers flex justify-center items-center mb-2">
                        {
                            testData.options == undefined ? 'empty' : testData?.options.map((option, index) => {
                                return <div className="answers__item hover:bg-emerald-300 transition cursor-pointer border rounded p-2 mr-2" key={index} onClick={() => sendAnswer(option)} >{option}</div>
                            })

                        }
                    </div>
                    :
                    <div className="answer__hardType">
                        <input type="number" placeholder="Введите ответ" className="p-2 m-2 border border-emerald-200 rounded text-center" onChange={(e) => setAnswerHard(Number(e.target.value))} /><br />
                        <button className="p-3 border rounded  text-[15px]" onClick={() => sendAnswer(answerHard)}>Отправить</button>
                    </div>
            }
            <button className="p-3 border rounded  text-[15px] " onClick={logout}>GO BACK</button>
        </div>
    )
}

export default TestSlide