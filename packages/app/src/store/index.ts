import { combineReducers } from 'redux'
import { globalCounterReducer, localCounterReducer } from './reducers/counterReducer'

export const rootReducer = combineReducers({
    globalCounter: globalCounterReducer,
    localCounter: localCounterReducer,
})

export type RootState = ReturnType<typeof rootReducer>