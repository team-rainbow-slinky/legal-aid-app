import React from 'react';

export default function BookingDisplay(props) {
  console.log('HIIIII', props);
  return (
    <>
     <p>HIIIII</p>
      {props.booking.preferredName}
    </>
  );
}
