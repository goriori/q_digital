import React, { useEffect, useState } from 'react'
import { requestHandler } from '../../utils/request'
import { saveStore } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'

import AuthorizationError from '../messages/errors/authorization'
import AuthorizationSuccess from '../messages/success/authorization'


const SignIn = ({ setAuth }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [stateAuth, setStateAuth] = useState(0)
    const nav = useNavigate()


    const authorization = async () => {
        try {
            const data = { email, password }
            const response = await requestHandler('https://internsapi.public.osora.ru/api/auth/login', 'POST', data)
            console.log(response)
            saveStore('user_session', response.data)
            setEmail(' ')
            setPassword(' ')
            setStateAuth(200)
            setTimeout(() => {
                setStateAuth(0)
                nav('/test')
            }, 2000)

        } catch (error) {
            setEmail(' ')
            setPassword(' ')
            setStateAuth(500)
            console.log(error)
        }

    }


    return (
        <div className='signin p-10   border rounded   text-center  '>
            <div className="messagess">
                {
                    stateAuth >= 500 && stateAuth <= 600 ? <AuthorizationError message='Произошла ошибка, попробуйте снова' /> : ''
                }
                {
                    stateAuth >= 200 && stateAuth <= 300 ? <AuthorizationSuccess message='Вы успешно вошли в аккаунт' /> : ''
                }

            </div>
            <h1 className='font-bold'>Авторизация</h1>
            <div className="signin__form mt-4 mb-4">
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='p-2 m-2 border border-emerald-200 rounded text-center' /><br />
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='p-2 m-2 border rounded border-emerald-200 text-center' /><br />
            </div>
            <div className="actions text-[15px] mb-5">
                <span >До сих пор нет аккаунта? <span className='text-emerald-300 cursor-pointer' onClick={() => setAuth(false)}>Зарегистрироваться</span></span>
            </div>
            <button className='p-2 border rounded text-center bg-emerald-200 ' onClick={authorization}>Войти</button>

        </div>
    )
}



export default SignIn