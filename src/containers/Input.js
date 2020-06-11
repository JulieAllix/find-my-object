import { connect } from 'react-redux';
import Input from '../components/Input';
import { changeField, searchShelf } from '../actions/input';

// == Data / state
const mapStateToProps = (state) => ({
    searchValue: state.input.searchValue,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
    changeFieldValue: (value) => {
        dispatch(changeField(value));
    },
    searchShelf: (value) => {
        dispatch(searchShelf(value));
    },
});

// connect(redux)(react)
const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;