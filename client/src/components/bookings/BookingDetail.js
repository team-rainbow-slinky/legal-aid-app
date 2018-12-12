import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BOOKING_EDIT } from '../../actions/bookings';
import BookingEdit from './BookingEdit';
import BookingDisplay from './BookingDisplay';

export default class BookingDetail extends PureComponent {
  static propTypes = {
    editBooking: PropTypes.func,
    booking: PropTypes.object
  };

  state = {
    editing: false,
    // swisId: this.props.swisId,
    // preferredName: this.props.preferredName,
    // gender: this.props.gender,
    // pronouns: this.props.pronouns,
    // primaryOrgContact: this.props.primaryOrgContact,
    // contacts: this.props.contacts,
    // upcomingDates: this.props.upcomingDates,
    // notes: this.props.notes,
    // mcsoName: this.props.mcsoName,
    // mcsoAge: this.props.mcsoAge,
    // mcsoGender: this.props.mcsoGender,
    // mcsoRace: this.props.mcsoRace,
    // mcsoHeight: this.props.mcsoHeight,
    // mcsoWeight: this.props.mcsoWeight,
    // mcsoHair: this.props.mcsoHair,
    // mcsoEyes: this.props.mcsoEyes,
    // mcsoArrestingAgency: this.props.mcsoArrestingAgency,
    // mcsoBookingDate: this.props.mcsoBookingDate,
    // mcsoAssignedFacility: this.props.mcsoAssignedFacility,
    // mcsoProjectedReleaseDate: this.props.mcsoProjectedReleaseDate
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    const { editBooking } = this.props;
    const {
      swisId,
      preferredName,
      gender,
      pronouns,
      primaryOrgContact,
      contacts,
      upcomingDates,
      notes,
      mcsoName,
      mcsoAge,
      mcsoGender,
      mcsoRace,
      mcsoHeight,
      mcsoWeight,
      mcsoHair,
      mcsoEyes,
      mcsoArrestingAgency,
      mcsoBookingDate,
      mcsoAssignedFacility,
      mcsoProjectedReleaseDate
    } = this.state;

  };

  render() {

    const { booking } = this.props;
    console.log(booking);
    if(!booking) return null;
    console.log('DETAIL', booking);
    return (
      <>
        <h3>Booking</h3>
        <BookingDisplay booking={booking}/>
      </>
    );
  }
}
