import React from 'react'

import { useEffect, useState } from 'react'

import './clock.scss'

const Clock = () => {
    const [hour, setHour] = useState( new Date() )

    useEffect( () => {
        const timerId = setInterval( getHour, 1000 )
        const cleanInterval = () => clearInterval( timerId )
        return cleanInterval
    }, [] )

    const getHour = () => {
        setHour( new Date() )
    }

    const readHour = ( data ) => {
        return data
            .toLocaleTimeString()
            .slice( 0, 5 )
    }

    return (
        <time className='clock'>{readHour( hour )}</time>
    )
}

export default Clock