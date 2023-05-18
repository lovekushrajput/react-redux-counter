import { createStore } from 'redux'

function reducer(state = { value: 0, step: 1, max: 0 }, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...state, value: state.value + state.step 
            }
        case 'decrement':
            return { ...state, value: (state.value > 0) ? state.value - state.step : 0 }
        case 'reset':
            return {value: 0, step: 1, max: 0  }
        case 'changeStep':
            return { ...state, step: action.payload }
        case 'changeMax':
            return { ...state, max: action.payload }
        default:
            return state
    }
}

let store = createStore(reducer)
export default store

