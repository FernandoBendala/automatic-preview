import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import dominationReducer from './reducers/domination'
import homeReducer from './reducers/home'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedDominationReducer = persistReducer( persistConfig, dominationReducer )
const persistedHomeReducer = persistReducer( persistConfig, homeReducer )

export { persistedDominationReducer, persistedHomeReducer }
