import React from "react"

const AuthorizationError = ({ message = 'Error' }) => {
    return (

        <div className="AuthorizationError flex justify-center items-center p-2 rounded transition bg-red-300 ">{message}</div>
    )
}

export default AuthorizationError