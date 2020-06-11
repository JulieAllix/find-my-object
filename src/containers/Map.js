import { connect } from 'react-redux';
import Map from '../components/Map';
import { changeField } from '../actions/input';

// == Data / state
const mapStateToProps = (state) => ({
    highlightedShelf: state.map.highlightedShelf,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
    changeFieldValue: (value) => {
        dispatch(changeField(value));
      },
});

// connect(redux)(react)
const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapContainer;