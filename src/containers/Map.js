import { connect } from 'react-redux';
import Map from '../components/Map';

// == Data / state
const mapStateToProps = (state) => ({
    highlightedShelf: state.map.highlightedShelf,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({});

// connect(redux)(react)
const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapContainer;