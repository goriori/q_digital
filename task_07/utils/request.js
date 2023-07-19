import axios from "axios"

const username = 'Dev'
const password = 'qdprivate'

export const requestHandler = async (url = '', method = 'GET', input_data = {}, headers) => {
    try {
        const { data } = await axios({
            method,
            url,
            headers,
            data: input_data,
            auth: {
                username,
                password
            }
        })
        return data
    } catch (error) {
        console.log(error)
        throw error

    }
}