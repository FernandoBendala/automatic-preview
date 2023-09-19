import { configureStore } from '@reduxjs/toolkit'
import counterReducer, { sumOne } from '../redux/counterReducer'

describe( 'store', () => {
    let testStore

    beforeEach( () => {
        testStore = configureStore( {
            reducer: {
                counter: counterReducer,
            },
        } )
    } )

    test( 'initial store state', () => {
        const initialState = testStore.getState()

        // Verify that the initial state of the counter is correct
        expect( initialState.counter.clicks ).toBe( 0 )
    } )

    test( 'dispatches sumOne action correctly', () => {
        testStore.dispatch( sumOne( 2 ) )

        const currentState = testStore.getState()

        // Verify that the "sumOne" action correctly updates the clicks
        expect( currentState.counter.clicks ).toBe( 3 )
    } )
} )
