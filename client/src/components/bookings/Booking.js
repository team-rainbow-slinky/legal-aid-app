import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function Booking({ _id, swisId, preferredName }) {
  return (
    <>
      <h2>{swisId}</h2>
      <p>{preferredName}</p>
    </>
  );
}
