import React from 'react';
import Header from '../../containers/header/Header';
import Bookings from '../../containers/Bookings';

export default function OrgHome() {
  return (
    <>
      <Header/>
      <h1>HOME</h1>
      <Bookings />
    </>
  );
}
