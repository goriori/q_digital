
export const saveStore = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value))
}

export const getStore = (name) => {
    return JSON.parse(localStorage.getItem(name))
}


export const clearStore = () => {
    localStorage.clear()
}


export const getToken = () => {
    const getSessionUser = getStore('user_session')
    if (getSessionUser === null) return false
    const token = getSessionUser.token_type + ' ' + getSessionUser.access_token
    return token
}