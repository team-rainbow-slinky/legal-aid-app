import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './Booking.css';

export default function Booking({ _id, preferredName, mcsoName, mcsoBookingDate, mcsoArrestingAgency }) {
  return (
    <Link key={_id} to={ROUTES.BOOKING_DETAIL.linkTo(_id)} className={styles.bookingLink}>
      <div className={styles.orgBooking}>
        <p><span>{preferredName || mcsoName}</span>, booked on {mcsoBookingDate} by {mcsoArrestingAgency}</p>
      </div>
    </Link>
  );
}
