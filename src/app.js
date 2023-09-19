import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeMain from './pages/home/home-main'
import LayoutApp from './layout/layout-app/layout-app'
import RouterComponent from './routers/router'
import './app.scss'

const App = () => {
    let element = useRoutes( [
        {
            path: '/',
            element: <LayoutApp />,
            children: [
                { path: 'tool/:tool', element: <RouterComponent /> },
                { path: '*', element: <HomeMain /> },
                { path: '/', element: <HomeMain /> },
            ],
        },
    ] )

    return element
}

export default App
