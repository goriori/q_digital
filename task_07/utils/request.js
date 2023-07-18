import axios from "axios"

const username = 'Dev'
const password = 'qdprivate'

export const requestHandler = async (url = '', method = 'GET', input_data = {}) => {
    try {
        const { data } = await axios({
            method,
            url,
            data: input_data,
            auth: {
                username,
                password
            }
        })
        return data
    } catch (error) {
        console.log(error)

    }
}