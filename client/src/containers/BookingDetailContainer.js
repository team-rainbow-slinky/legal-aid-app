import { connect } from 'react-redux';
import BookingDetail from '../components/bookings/BookingDetail';
import { editBooking, fetchBookings } from '../actions/bookings';
import { getBooking } from '../selectors/bookings';
import { withFetch } from '../components/withFetch';

const mapStateToProps = (state, props) => {
  return {
    booking: getBooking(state, props.match.params.id)
  };
};

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchBookings()),
  editBooking: booking => dispatch(editBooking(booking))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withFetch(BookingDetail));
