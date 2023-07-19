
import React, { useState, useEffect } from "react"
import Difficulty from "../../components/selects/difficulty"
import axios from 'axios'
import { requestHandler } from "../../utils/request"
import { getStore, getToken } from "../../utils/storage"
import TestSlide from "../../components/tests/numeric-example"
import ResultTest from "../../components/tables/result"
import { validUserSessionStore } from "../../utils/validation"
import { useNavigate } from 'react-router-dom'
const PassingTest = () => {
    const token = getToken()
    const [typeHard, setTypeHard] = useState()
    const [visibilityTest, setVisibilityTest] = useState(false)
    const [testData, setTestData] = useState({})
    const [endTest, setEndTest] = useState(false)
    const [resultTest, setResultTest] = useState()
    const nav = useNavigate()
    const updateTest = (data) => {
        setTestData(data)
    }

    const startTest = async (type_hard) => {
        const input_data = {
            type_hard,
            type: 1
        }
        const headers = {
            "X-Access-Token": token
        }
        const response = await requestHandler("https://internsapi.public.osora.ru/api/game/play", 'POST', input_data, headers)
        if (!response?.status) return new Error('Err request for start test game')
        setTestData(response.data)
        setTypeHard(type_hard)
        setVisibilityTest(true)
    }


    const finishTest = () => {
        setResultTest(testData)
        setVisibilityTest(false)
        setEndTest(true)
    }
    useEffect(() => {
        validUserSessionStore(() => '', () => nav("/"))
    }, [token])
    return (
        <div className="PassingTestPage  flex justify-center items-center">
            <div>


                {
                    visibilityTest ? <TestSlide testData={testData} updateTest={updateTest} typeHard={typeHard} finishTest={finishTest} /> : <Difficulty startTest={startTest} />
                }
                {
                    endTest ? <ResultTest resultTest={resultTest} /> : false
                }

            </div>
        </div>
    )
}





export default PassingTest