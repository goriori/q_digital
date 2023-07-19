import React, { useState } from 'react'
import { requestHandler } from '../../utils/request'
import { useNavigate } from 'react-router-dom'
const SignUp = ({ setAuth }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_Confirmation] = useState('')
    const nav = useNavigate()

    const validPassword = () => {
        const validation = password === password_confirmation ? true : false
        return validation
    }
    const registration = async () => {
        if (!validPassword()) {
            return console.log('valid password false')
        }
        const data = { name, email, password, password_confirmation }
        const response = await requestHandler('https://internsapi.public.osora.ru/api/auth/signup', 'POST', data)
        console.log(response)
        setName('')
        setEmail('')
        setPassword('')
        setPassword_Confirmation('')
        setAuth(true)
    }
    return (
        <div className='signup p-10  border rounded   text-center '>
            <h1 className='font-bold'>Регистрация</h1>
            <div className="signup__form mt-4 mb-10">
                <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} className='p-2 m-2 border border-emerald-200 rounded text-center' /><br />
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='p-2 m-2 border border-emerald-200 rounded text-center' /><br />
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='p-2 m-2 border border-emerald-200 rounded text-center' /><br />
                <input type="password" placeholder='Password Confirm' onChange={(e) => setPassword_Confirmation(e.target.value)} className='p-2 m-2 border border-emerald-200 rounded text-center' /><br />
            </div>
            <div className="actions text-[15px] mb-5">
                <span >Уже есть аккаунт? <span className='text-emerald-300 cursor-pointer' onClick={() => setAuth(true)}>Авторизоваться</span></span>
            </div>
            <button className='p-2 border rounded text-center bg-emerald-200' onClick={registration}>Зарегистрироваться</button>
        </div>
    )
}



export default SignUp