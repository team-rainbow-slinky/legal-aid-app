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
    preferredName: '',
    gender: '',
    pronouns: '',
    primaryOrgContact: '',
    contacts: '',
    upcomingDates: '',
    notes: '',
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

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props){
      const { booking } = this.props;
      this.setState({
        preferredName: booking.preferredName,
        gender: booking.gender,
        pronouns: booking.pronouns,
        primaryOrgContact: booking.primaryOrgContact,
        contacts: booking.contacts,
        upcomingDates: booking.upcomingDates,
        notes: booking.notes
      });
    }
  }
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
    if(!booking) return null;
    const {
      editing,
      preferredName,
      gender,
      pronouns,
      primaryOrgContact,
      contacts,
      upcomingDates,
      notes
    } = this.state;

    return (
      <>
        <h3>Booking</h3>
        <div>
          <h3>MCSO Data</h3>
          <p>SwisID: {booking.swisId}</p>
          <p>Legal Name: {booking.mcsoName}</p>
          <p>Age: {booking.mcsoAge}</p>
          <p>Gender: {booking.mcsoGender}</p>
          <p>Race: {booking.mcsoRace}</p>
          <p>Height: {booking.mcsoHeight}</p>
          <p>Weight: {booking.mcsoWeight}</p>
          <p>Hair: {booking.mcsoHair}</p>
          <p>Eyes: {booking.mcsoEyes}</p>
          <p>Arresting Agency: {booking.mcsoArrestingAgency}</p>
          <p>Booking Date: {booking.mcsoBookingDate}</p>
          <p>Assigned Facility: {booking.mcsoAssignedFacility}</p>
          <p>Projected Release Date: {booking.mcsoProjectedReleaseDate}</p>
        </div>

        <form>
          <fieldset>
            <legend>NLG Data</legend>
            <label htmlFor="preferredName">Preferred Name: </label>
            <input name="preferredName" onChange={this.handleChange} value={preferredName}></input>

            <label htmlFor="gender">Gender: </label>
            <input name="gender" onChange={this.handleChange} value={gender}></input>

            <label htmlFor="pronouns">Pronouns: </label>
            <input name="pronouns" onChange={this.handleChange} value={pronouns}></input>

            <label htmlFor="primaryOrgContact">Primary Contact at NLG: </label>
            <input name="primaryOrgContact" onChange={this.handleChange} value={primaryOrgContact}></input>

            <label htmlFor="contacts">Contacts: </label>
            <input name="contacts" onChange={this.handleChange} value={contacts}></input>

            <label htmlFor="upcomingDates">Upcoming Dates: </label>
            <input name="upcomingDates" onChange={this.handleChange} value={upcomingDates}></input>

            <label htmlFor="notes">Notes: </label>
            <input name="notes" onChange={this.handleChange} value={notes}></input>

          </fieldset>
        </form>
        {/* {editing ?
          <BookingEdit booking={booking}/> : */}
          {/* // <BookingDisplay booking={booking}/>} */}
      </>
    );
  }
}
