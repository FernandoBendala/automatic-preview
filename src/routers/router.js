import { useParams } from 'react-router-dom'

import DominationMain from '../pages/domination/domination-main'
import NotFound from '../pages/not-found/not-found'

const toolComponentMap = {
    'domination': DominationMain,
}

const RouterComponent = ( { isLoading } ) => {
    let { tool } = useParams()
    const Component = toolComponentMap[tool] || NotFound

    return <Component isLoading={isLoading} />
}

export default RouterComponent