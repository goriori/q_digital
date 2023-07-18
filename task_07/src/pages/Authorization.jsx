import React, { useState } from "react";
import SignIn from "../../components/forms/signin";
import SignUp from "../../components/forms/signup";

const Authorization = () => {
    const [auth, setAuth] = useState(true)
   

    return (
        <div className="AuthorizationPage  flex justify-center items-center ">
            <div className="">
                {
                    auth ? <SignIn setAuth={setAuth} /> : <SignUp setAuth={setAuth} />
                }
            </div>
        </div>
    )
}

export default Authorization