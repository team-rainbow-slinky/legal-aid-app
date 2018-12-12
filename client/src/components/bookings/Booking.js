import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './Booking.css';

export default function Booking({ _id, swisId, preferredName }) {
  return (
    //turn these bad boys into links to each booking's detail
    //does this need to dispatch an action?
    
    <>
      <div className={styles.orgBooking}>
        <h2>{swisId}</h2>
        <p>{preferredName}</p>
      </div>
    </>
  );
}
