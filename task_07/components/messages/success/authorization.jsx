import React from "react"

const AuthorizationSuccess = ({ message = 'Success' }) => {
    return (

        <div className="AuthorizationSuccess flex justify-center items-center p-2 rounded transition bg-emerald-300 ">{message}</div>
    )
}

export default AuthorizationSuccess