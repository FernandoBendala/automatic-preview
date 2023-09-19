import React from 'react'
import { useState } from 'react'
import getBase64 from 'getbase64data'

import iconPlus from '../../../assets/images/icon-plus.svg'

import './image-upload.scss'

const ImageUpload = ( { id, onChange, initialImage } ) => {
    const [image, setImage] = useState( initialImage )
    const [imageName, setImageName] = useState( '' )

    const handleInputChange = ( data ) => {
        handleImageUpload( data.target?.files[0] )
        setImageName( data.target?.files[0]?.name )
    }

    const handleImageUpload = async ( file ) => {
        const base64 = await getBase64.fromFile( file )
        onChange( base64 )
        setImage( base64 )
    }

    return (
        <label
            htmlFor={id}
            className='image-upload'
        >
            <input
                type='file'
                id={id}
                name='img'
                accept='image/*'
                className='image-upload__input'
                onChange={handleInputChange}
            />
            {initialImage && image
                ? <img
                    src={image}
                    alt={imageName}
                    className='image-upload__image'
                />
                : <img
                    src={iconPlus}
                    alt='Add image'
                    className='image-upload__image icon-plus'
                />
            }
        </label>
    )
}

export default ImageUpload