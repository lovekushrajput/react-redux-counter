import { connect } from 'react-redux'
import {
    increment,
    decrement,
    reset
} from '../store/action';

function Counter(props) {
    return (
        <>
            <h2>{props.value}</h2>
            <div>
                <button
                    onClick={
                        () => props.max === 0 ? props.dispatch(increment())
                            :
                            props.value + props.step > props.max ? true : props.dispatch(increment())
                    }>
                    Increment
                </button>

                <button
                    onClick={
                        () => props.dispatch(decrement())
                    }>
                    Decrement
                </button>

                <button
                    onClick={
                        () => props.dispatch(reset())
                    }>
                    Reset
                </button>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Counter);