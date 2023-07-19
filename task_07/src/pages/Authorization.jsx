import React, { useState, useEffect } from "react";
import SignIn from "../../components/forms/signin";
import SignUp from "../../components/forms/signup";
import { getStore } from "../../utils/storage";
import { useNavigate } from 'react-router-dom'
import { validUserSessionStore } from "../../utils/validation";
const Authorization = () => {
    const [auth, setAuth] = useState(true)
    const nav = useNavigate()
    useEffect(() => {
        validUserSessionStore(() => nav('/test'), () => nav('/'))
    }, [auth])
    return (
        <div className="AuthorizationPage  flex justify-center items-center" >

            <div className="">

                {
                    auth ? <SignIn setAuth={setAuth} /> : <SignUp setAuth={setAuth} />
                }
            </div>
        </div>
    )
}

export default Authorization