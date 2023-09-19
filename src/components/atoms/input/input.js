import React from 'react'
import { useState } from 'react'

import './input.scss'

const ImageUpload = ( { id, type = 'text', onChange, initialValue } ) => {
    const [value, setValue] = useState( initialValue )

    const handleInputChange = ( data ) => {
        onChange( data.target.value )
        setValue( data.target.value )
    }

    return (
        <label
            htmlFor={id}
            className='input__container'
        >
            <input
                type={type}
                id={id}
                value={value}
                className='input'
                placeholder='Type some text...'
                onChange={handleInputChange}
            />
        </label>
    )
}

export default ImageUpload