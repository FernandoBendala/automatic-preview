import { useEffect, useState } from 'react'

import ImageUpload from '../../atoms/image-upload/image-upload'

import iconTrash from '../../../assets/images/icon-trash.svg'

import './images-upload.scss'

const ImagesUpload = ( { initialImage, onChange } ) => {
    const [allImages, setAllImages] = useState( [] )
    const [draggingIndex, setDraggingIndex] = useState( null )
    const [dropIndex, setDropIndex] = useState( null )
    const [dragImage, setDragImage] = useState( null )

    useEffect( () => {
        if ( initialImage ) {
            setAllImages( initialImage )
        }
    }, [initialImage] )

    const includeImage = ( data ) => {
        setAllImages( [...allImages, data] )
        onChange( [...allImages, data] )
    }

    const removeImage = ( index ) => {
        const newImages = allImages.filter( ( _, i ) => i !== index )
        setAllImages( newImages )
        onChange( newImages )
    }

    const handleDragStart = ( e, index ) => {
        const dragImageRef = e.target

        setDraggingIndex( index )
        setDragImage( dragImageRef )

        e.dataTransfer.setDragImage( dragImageRef, 0, 0 )
        e.dataTransfer.setData( 'image/plain', index )

    }

    const handleDragOver = ( e, index ) => {
        e.preventDefault()
        setDropIndex( index )

        handleDragAndDropStyles.remove()
        handleDragAndDropStyles.add( e )
    }

    const handleDrop = ( e ) => {
        const draggedImage = allImages[draggingIndex]
        const remainingImages = allImages.filter( ( _, index ) => index !== draggingIndex )
        const reorderedImages = [...remainingImages.slice( 0, dropIndex ), draggedImage, ...remainingImages.slice( dropIndex ),]

        setAllImages( reorderedImages )
        onChange( reorderedImages )
        setDraggingIndex( null )
        setDropIndex( null )

        handleDragAndDropStyles.remove()
    }

    const handleDragAndDropStyles = {
        add: ( e ) => {
            const imageRef = e.target
            imageRef.classList.add( 'images-upload__figure--drag-over' )
        },
        remove: () => {
            const figures = document.querySelectorAll( '.images-upload__figure--drag-over' )
            figures.forEach( ( figure ) => figure.classList.remove( 'images-upload__figure--drag-over' ) )
        }
    }

    return (
        <div className='images-upload__container'>
            {allImages.length
                ? allImages.map( ( image, i ) => {
                    const index = i + 1
                    return (
                        <figure
                            key={index}
                            className='images-upload__figure'
                            onDragOver={( e ) => handleDragOver( e, i )}
                            onDrop={handleDrop}
                            onDragEnd={() => setDragImage( null )}
                        >
                            <figcaption className='images-upload__figure__caption'>
                                <span className='images-upload__info'>{index}</span>
                                <img
                                    src={iconTrash}
                                    alt='remove'
                                    className='images-upload__remove'
                                    onClick={() => removeImage( i )}
                                />
                            </figcaption>
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                className='images-upload__figure__preview'
                                draggable
                                onDragStart={( e ) => handleDragStart( e, i )}
                            />
                        </figure>
                    )
                } )
                : null
            }
            <ImageUpload id='adsImages' onChange={includeImage} />
            {!allImages.length &&
                <p className='images-upload__no-results'>Upload some images</p>
            }
        </div>
    )
}

export default ImagesUpload
