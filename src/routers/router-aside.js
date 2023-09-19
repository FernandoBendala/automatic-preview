import { useParams } from 'react-router-dom'

import DominationAside from '../pages/domination/domination-aside'
import NotFound from '../pages/not-found/not-found'

const toolComponentMap = {
    'domination': DominationAside,
}

const RouterAside = ( { isLoading } ) => {
    let { tool } = useParams()
    const Component = toolComponentMap[tool] || NotFound

    return <Component isLoading={isLoading} />
}

export default RouterAside