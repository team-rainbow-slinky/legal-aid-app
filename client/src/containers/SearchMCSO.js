import { connect } from 'react-redux';
import { getStateRecords } from '../selectors/stateRecords';
import { fetchStateRecords, addStateRecords } from '../actions/stateRecords';
import { SearchMCSO } from '../components/searchMCSO/SearchMCSO';
import { getOrgId } from '../selectors/session';

const mapStateToProps = state => ({
  list: getStateRecords(state),
  org: getOrgId(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: query => dispatch(fetchStateRecords(query)),
  onSubmit(recordsToAdd) {
    const action = addStateRecords(recordsToAdd);
    dispatch(action);
    return action.payload; //????
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMCSO);
