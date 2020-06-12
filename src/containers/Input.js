import { connect } from 'react-redux';
import Input from '../components/Input';
import { changeField, savePosition, changeOpacityStatus } from '../actions/input';

// == Data / state
const mapStateToProps = (state) => ({
    searchValue: state.input.searchValue,
    opacityStatus: state.input.opacityStatus,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
    changeFieldValue: (value) => {
        dispatch(changeField(value));
    },
    savePosition: (value) => {
        dispatch(savePosition(value));
    },
    changeOpacityStatus: (bool) => {
        dispatch(changeOpacityStatus(bool));
    },
});

// connect(redux)(react)
const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;