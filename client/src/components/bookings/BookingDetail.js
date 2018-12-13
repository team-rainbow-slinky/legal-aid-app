import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../app/App.css';
import Header from '../../containers/header/Header';

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
  };

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props){
      this.revertState();
    }
  }

  revertState = () => {
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
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleCancel = () => {
    this.setState({ editing: false });
    this.revertState();
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.editBooking({ ...this.props.booking, ...this.state });
    this.setState({ editing: false });
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
        <Header />
        <div className={styles.detailWrapper}>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <legend>NLG Data</legend>
            <label htmlFor="preferredName">Preferred Name: </label>
            <input name="preferredName" onChange={this.handleChange} value={preferredName} disabled={editing ? false : true}></input>

            <label htmlFor="gender">Gender: </label>
            <input name="gender" onChange={this.handleChange} value={gender} disabled={editing ? false : true}></input>

            <label htmlFor="pronouns">Pronouns: </label>
            <input name="pronouns" onChange={this.handleChange} value={pronouns} disabled={editing ? false : true}></input>

            <label htmlFor="contacts">Personal Contacts: </label>
            <input name="contacts" onChange={this.handleChange} value={contacts} disabled={editing ? false : true}></input>

            <label htmlFor="primaryOrgContact">Primary Contact at NLG: </label>
            <input name="primaryOrgContact" onChange={this.handleChange} value={primaryOrgContact} disabled={editing ? false : true}></input>

            <label htmlFor="upcomingDates">Upcoming Dates: </label>
            <input name="upcomingDates" onChange={this.handleChange} value={upcomingDates} disabled={editing ? false : true}></input>

            <label htmlFor="notes">Notes: </label>
            <input name="notes" onChange={this.handleChange} value={notes} disabled={editing ? false : true}></input>

            {editing &&
              <>
                <button type="reset" onClick={this.handleCancel}>Cancel</button>
                <button type="submit">Save Changes</button>
              </>
            }
            {!editing &&
              <button onClick={this.handleEdit}>Edit Booking</button>
            }
          </form>

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
        </div>
      </>
    );
  }
}
