import { configureStore } from '@reduxjs/toolkit'
import { persistStore, REHYDRATE, PERSIST } from 'redux-persist'
import { persistedDominationReducer, persistedHomeReducer } from './persist'
import { useLogger } from '../hooks/useLogger'

const rootReducer = {
    home: persistedHomeReducer,
    domination: persistedDominationReducer,
}

const store = configureStore( {
    reducer: rootReducer,
    middleware: ( getDefaultMiddleware ) =>
        getDefaultMiddleware( {
            serializableCheck: {
                ignoredActions: [PERSIST, REHYDRATE],
            },
        } ),
} )

const persistor = persistStore( store )

useLogger( ( 'initial store:', store.getState() ), 'info' )
export { store, persistor }