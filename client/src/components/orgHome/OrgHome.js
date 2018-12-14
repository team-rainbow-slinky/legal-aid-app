import React from 'react';
import Header from '../../containers/header/Header';
import Bookings from '../../containers/Bookings';
import Footer from '../footer/Footer';

export default function OrgHome() {
  return (
    <>
      <Header/>
      <h1>Organization Records</h1>
      <Bookings />
      <Footer />
    </>
  );
}
