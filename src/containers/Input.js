import { connect } from 'react-redux';
import Input from '../components/Input';
import { changeField, savePosition } from '../actions/input';

// == Data / state
const mapStateToProps = (state) => ({
    searchValue: state.input.searchValue,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
    changeFieldValue: (value) => {
        dispatch(changeField(value));
    },
    savePosition: (value) => {
        dispatch(savePosition(value));
    },
});

// connect(redux)(react)
const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;