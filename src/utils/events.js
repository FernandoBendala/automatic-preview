// More info: https://www.robinwieruch.de/react-hook-detect-click-outside-component/
import { useEffect, useRef } from 'react'

const outsideClick = ( callback ) => {
    const ref = useRef()

    useEffect( () => {
        const handleClick = ( event ) => {
            if ( ref.current && !ref.current.contains( event.target ) ) {
                callback()
            }
        }

        document.addEventListener( 'click', handleClick, true )

        return () => {
            document.removeEventListener( 'click', handleClick, true )
        }
    }, [ref] )

    return ref
}

const useEvent = { outsideClick }
export default useEvent