// Colors
// more info: https://css-tricks.com/converting-color-spaces-in-javascript/
const RGBAToHexA = ( rgba ) => {
    let sep = rgba.indexOf( ',' ) > -1 ? ',' : ' '
    rgba = rgba.substr( 5 ).split( ')' )[0].split( sep )

    // Strip the slash if using space-separated syntax
    if ( rgba.indexOf( '/' ) > -1 ) rgba.splice( 3, 1 )


    for ( let R in rgba ) {
        let r = rgba[R]
        if ( r.indexOf( '%' ) > -1 ) {
            let p = r.substr( 0, r.length - 1 ) / 100

            if ( R < 3 ) rgba[R] = Math.round( p * 255 )
            else rgba[R] = p
        }
    }

    let r = ( +rgba[0] ).toString( 16 ),
        g = ( +rgba[1] ).toString( 16 ),
        b = ( +rgba[2] ).toString( 16 ),
        a = Math.round( +rgba[3] * 255 ).toString( 16 )

    if ( r.length === 1 )
        r = '0' + r
    if ( g.length === 1 )
        g = '0' + g
    if ( b.length === 1 )
        b = '0' + b
    if ( a.length === 1 )
        a = '0' + a

    if ( a === 'ff' )
        return '#' + r + g + b
    else
        return '#' + r + g + b + a
}

const hexAtoRGBA = ( h, isPct ) => {
    const hex = h.replace( '#', '' )
    let r, g, b, a = 1

    if ( hex.length === 3 ) {
        r = parseInt( hex[0] + hex[0], 16 )
        g = parseInt( hex[1] + hex[1], 16 )
        b = parseInt( hex[2] + hex[2], 16 )
    } else if ( hex.length === 6 ) {
        r = parseInt( hex.substr( 0, 2 ), 16 )
        g = parseInt( hex.substr( 2, 2 ), 16 )
        b = parseInt( hex.substr( 4, 2 ), 16 )
    } else {
        return h // Devuelve el valor anterior si el valor hexadecimal no es válido
    }

    isPct = isPct === true

    if ( isPct ) {
        r = +( r / 255 * 100 ).toFixed( 1 )
        g = +( g / 255 * 100 ).toFixed( 1 )
        b = +( b / 255 * 100 ).toFixed( 1 )
    }

    // Comprueba si los valores de color son NaN y devuelve el valor anterior en ese caso
    if ( isNaN( r ) || isNaN( g ) || isNaN( b ) ) {
        return h
    }

    return isPct ? { r, g, b, a } : { r, g, b, a: +a }
}



// Strings
const removeSpecialChars = ( string ) => {
    return string.replace( /[^a-zA-Z0-9 ]/g, '' )
}

// Numbers
const addCero = ( number ) => {
    return number < 10 ? '0' + number : number
}

const useConverter = { RGBAToHexA, hexAtoRGBA, removeSpecialChars, addCero }
export default useConverter

