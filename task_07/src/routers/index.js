import { createBrowserRouter } from 'react-router-dom'
import Authorization from '../pages/Authorization'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Authorization
    }
])


export default router