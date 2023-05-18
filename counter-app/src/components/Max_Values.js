import { connect } from "react-redux"
import { updateMax } from "../store/action";

function Max_Values(props) {
    return (
        <div>
            <p>Max values</p>
            <button
                onClick={
                    () => props.dispatch(updateMax(15))
                }
            >
                15
            </button>

            <button
                onClick={
                    () => props.dispatch(updateMax(100))
                }
            >
                100
            </button>

            <button
                onClick={
                    () => props.dispatch(updateMax(200))
                }
            >
                200
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        step: state.step
    }

}
export default connect(mapStateToProps)(Max_Values);


