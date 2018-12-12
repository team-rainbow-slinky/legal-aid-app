import { connect } from 'react-redux';
import BookingDetail from '../components/bookings/BookingDetail';
import { editBooking } from '../actions/bookings';
import { getBooking } from '../selectors/bookings';

const mapStateToProps = (state, props) => {
  return {
    booking: getBooking(state, props.match.params.id)
  };
};

const mapDispatchToProps = dispatch => ({
  editBooking: booking => dispatch(editBooking(booking))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail);
