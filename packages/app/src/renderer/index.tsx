import { render } from 'react-dom';
import App from './App';

import { createStore } from 'redux'
import { rootReducer } from '../store'
import { stateSyncEnhancer } from 'electron-redux/renderer'
import {
    decrementGlobalCounter,
    decrementLocalCounter,
    incrementGlobalCounter,
    incrementLocalCounter,
} from '../store/actions'

const store = createStore(rootReducer, stateSyncEnhancer())

const registerClickHandler = (id: string, handler: () => void) =>
    document.getElementById(id)!.addEventListener('click', handler)

const registerEvents = () => {
    registerClickHandler('incrementGlobalCounter', () => store.dispatch(incrementGlobalCounter()))
    registerClickHandler('decrementGlobalCounter', () => store.dispatch(decrementGlobalCounter()))
    registerClickHandler('incrementLocalCounter', () => store.dispatch(incrementLocalCounter()))
    registerClickHandler('decrementLocalCounter', () => store.dispatch(decrementLocalCounter()))
}

const globalCounterEl = document.getElementById('globalCounter')!
const localCounterEl = document.getElementById('localCounter')!

const stateRender = () => {
    const { globalCounter, localCounter } = store.getState()
    globalCounterEl.innerHTML = globalCounter.toString()
    localCounterEl.innerHTML = localCounter.toString()
    return (
        <App />
    )
}

store.subscribe(stateRender)
render(stateRender(), document.getElementById('root')) // initial render
registerEvents() // register click events to dispatch actions

