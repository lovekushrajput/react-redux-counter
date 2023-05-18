export function increment() {
    return {
        'type': 'increment'
    }
}


export function decrement() {
    return {
        'type': 'decrement'
    }
}


export function reset() {
    return {
        'type': 'reset'
    }
}


export function updateStep(step) {
    return {
        'type': 'changeStep',
        'payload': step
    }
}


export function updateMax(Max_Val) {
    return {
        'type': 'changeMax',
        'payload': Max_Val
    }
}