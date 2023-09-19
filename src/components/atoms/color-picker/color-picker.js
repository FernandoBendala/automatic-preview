import { useEffect, useState, useRef } from 'react'
import { SketchPicker } from 'react-color'
import { EditableInput } from 'react-color/lib/components/common'

import useEvent from '../../../utils/events'
import useConverter from '../../../utils/converters'

import './color-picker.scss'

const ColorPicker = ( { onChange, initialRgb } ) => {
    const [displayColorPicker, setDisplayColorPicker] = useState( false )
    const [rgbColor, setRgbColor] = useState( initialRgb )
    const [hexColor, setHexColor] = useState( '' )
    const [positionStyles, setPositionStyles] = useState( {} )
    const { r, g, b, a } = rgbColor
    const buttonRef = useRef( null )

    useEffect( () => {
        setHexColor( useConverter.RGBAToHexA( `rgba(${r},${g},${b},${a})` ) )
    }, [r, g, b, a] )

    const handleColorChange = ( newColor ) => {
        const { r, g, b, a } = newColor.rgb
        setHexColor( useConverter.RGBAToHexA( `rgba(${r},${g},${b},${a})` ) )

        onChange( newColor.rgb )
        setRgbColor( newColor.rgb )
    }

    const handleManualColorChange = ( newColor ) => {
        const rgbaColor = useConverter.hexAtoRGBA( newColor )

        if ( typeof rgbaColor !== 'string' ) {
            console.log( rgbaColor )
            setHexColor( newColor )
            setRgbColor( rgbaColor )
            onChange( rgbaColor )
        }
    }

    const handleClick = ( e ) => {
        if ( buttonRef.current && buttonRef.current.contains( e.target ) ) {
            setDisplayColorPicker( !displayColorPicker )
            positionColorPicker( e )
        }
    }

    const handleClickOutside = () => {
        setDisplayColorPicker( false )
    }

    const positionColorPicker = ( e ) => {
        const left = e.clientX
        const top = e.clientY

        setPositionStyles( {
            position: 'fixed',
            top: `${top}px`,
            left: `${left}px`,
            transform: 'translate(0, -50%)'
        } )
    }

    const reference = useEvent.outsideClick( handleClickOutside )

    return (
        <div className='color-picker'>
            {/* Button shows a square with selected color */}
            <button
                ref={buttonRef}
                className='color-picker__button'
                onClick={handleClick}
                style={{ backgroundColor: `rgba(${r},${g},${b},${a})` }}
            ></button>

            {/* Editable input for color picker */}
            <div className='color-picker__input'>
                <EditableInput
                    value={hexColor}
                    onChange={handleManualColorChange}
                />
            </div>

            {/* Show Color picker if button is clicked */}
            {displayColorPicker && (
                <div
                    ref={reference}
                    className='color-picker__dropdown'
                    style={positionStyles}
                >
                    <SketchPicker
                        color={rgbColor}
                        onChange={handleColorChange}
                    />
                </div>
            )}
        </div>
    )
}

export default ColorPicker