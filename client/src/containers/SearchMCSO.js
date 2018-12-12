import { connect } from 'react-redux';
import { getStateRecords } from '../selectors/stateRecords';
import { fetchStateRecords } from '../actions/stateRecords';
import { SearchMCSO } from '../components/searchMCSO/SearchMCSO';

const mapStateToProps = state => ({
  list: getStateRecords(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchStateRecords())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMCSO);
