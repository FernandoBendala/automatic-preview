import axios from 'axios'
let token = null

const handleRequest = async ( request ) => {
    try {
        const response = await request
        return response.data
    } catch ( exception ) {
        console.log( exception )
        throw exception
    }
}

const setToken = ( newToken ) => {
    token = `Bearer ${newToken}`
}

const get = async ( url ) => {
    const request = await axios
        .get( url )

    return handleRequest( request )
}

const create = async ( url, object ) => {
    const config = { headers: { Authorization: token } }

    const request = await axios
        .post( url, object, config )

    return handleRequest( request )
}

const remove = async ( url, id ) => {
    const config = { headers: { Authorization: token } }

    const request = await axios
        .delete( `${url}/${id}`, config )

    return handleRequest( request )
}

const update = async ( url, id, object ) => {
    const config = { headers: { Authorization: token } }

    const request = await axios
        .put( `${url}/${id}`, object, config )

    return handleRequest( request )
}

export default {
    get,
    create,
    remove,
    update,
    setToken,
}
