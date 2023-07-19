
import { getStore } from "./storage"
export const validUserSessionStore = (handler = function () { }, errHandler = function () { }) => {
    const findUserSession = getStore('user_session')
    if (findUserSession) {
        return handler()
    } else {
        return errHandler()
    }
}


