import { createBrowserRouter } from 'react-router-dom'
import Authorization from '../pages/Authorization'
import PassingTest from '../pages/PassTest'
const router = createBrowserRouter([
    {
        path: '/',
        Component: Authorization
    },
    {
        path: '/test',
        Component: PassingTest
    }
])


export default router