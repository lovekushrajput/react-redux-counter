import { connect } from "react-redux"
import { updateStep } from "../store/action";

function Steps(props) {
    return (
        <div>
            <p>Steps</p>
            <button
                onClick={
                    () => props.dispatch(updateStep(5))
                }
            >
                5
            </button>

            <button
                onClick={
                    () => props.dispatch(updateStep(10))
                }
            >
                10
            </button>

            <button
                onClick={
                    () => props.dispatch(updateStep(15))
                }
            >
                15
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        step: state.step
    }

}
export default connect(mapStateToProps)(Steps);


