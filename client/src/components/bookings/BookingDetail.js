import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../app/App.css';
import Header from '../../containers/header/Header';
import Footer from '../footer/Footer';
import ReactModal from 'react-modal';

if(process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');

export default class BookingDetail extends PureComponent {
  static propTypes = {
    editBooking: PropTypes.func,
    deleteBooking: PropTypes.func,
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
    showModal: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.booking && prevProps !== this.props) {
      this.revertState();
    }
  }

  revertState = () => {
    const { booking } = this.props;
    this.setState({
      preferredName: booking.preferredName || '',
      gender: booking.gender || '',
      pronouns: booking.pronouns || '',
      primaryOrgContact: booking.primaryOrgContact || '',
      contacts: booking.contacts || '',
      upcomingDates: booking.upcomingDates || '',
      notes: booking.notes || ''
    });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleDelete = () => {  
    return this.props.deleteBooking({ ...this.props.booking, ...this.state })
      .then(() => {
        return this.props.history.push('/');
      });
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
    if (!booking) return null;
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
        <div className={styles.detailWrapper}>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <h3>Organization Data</h3>

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
                <button onClick={this.showModal}>Delete Booking</button>
              </>
            }     
            <ReactModal className={styles.deleteConfirm} isOpen={this.state.showModal} contentLabel='Confirm delete alert'>
              <p>Are you sure you want to delete this booking? This action can not be undone.</p>
              <button onClick={this.hideModal}>Cancel</button>
              <button onClick={this.handleDelete}>Yes, delete this booking</button>
            </ReactModal>
            {!editing &&
              <button onClick={this.handleEdit}>Edit Booking</button>
            }
          </form>

          <div className={styles.stateData}>
            <h3>Multnomah County Sheriff&#39;s Office Data</h3>
            <p><span>SwisID: </span> {booking.swisId}</p>
            <p><span>Legal Name: </span> {booking.mcsoName}</p>
            <p><span>Age: </span> {booking.mcsoAge}</p>
            <p><span>State Assigned Gender: </span> {booking.mcsoGender}</p>
            <p><span>Race: </span> {booking.mcsoRace}</p>
            <p><span>Height: </span> {booking.mcsoHeight}</p>
            <p><span>Weight:</span> {booking.mcsoWeight}</p>
            <p><span>Hair:</span> {booking.mcsoHair}</p>
            <p><span>Eyes: </span> {booking.mcsoEyes}</p>
            <p><span>Arresting Agency:</span> {booking.mcsoArrestingAgency}</p>
            <p><span>Booking Date:</span> {booking.mcsoBookingDate}</p>
            <p><span>Assigned Facility: </span> {booking.mcsoAssignedFacility}</p>
            <p><span>Projected Release Date: </span> {booking.mcsoProjectedReleaseDate}</p>
            <p dangerouslySetInnerHTML={{ __html: booking.chargesHTML }}></p>
          </div>
        </div>
      </>
    );
  }
}
