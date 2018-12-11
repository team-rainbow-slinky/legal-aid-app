import { connect } from 'react-redux';
import { getBookings } from '../selectors/bookings';
import { fetchBookings } from '../actions/bookings';
import { withFetch } from '../components/withFetch';
import { withList } from '../components/withList';
import Booking from '../components/bookings/Booking';

const mapStateToProps = state => ({
  list: getBookings(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchBookings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFetch(
    withList(
      Booking,
      { idKey: '_id', spread: true }
    ),
    { dataKey: 'bookings', defaultValue: [] }
  )
);
