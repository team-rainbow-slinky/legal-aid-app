import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './Booking.css';

export default function Booking({ _id, swisId, preferredName }) {
  return (
    <>
      <div className={styles.orgBooking}>
        <h2>{swisId}</h2>
        <p>{preferredName}</p>
      </div>
    </>
  );
}
