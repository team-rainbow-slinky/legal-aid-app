import { get } from './request';

export const getBookings = () => {
  // return get('/api/bookings');
  return Promise.resolve([
    {
      swisId: '12345',
      preferredName: 'Boomer Smith',
      gender: 'Non-binary',
      pronouns: 'he/him',
      primaryOrgContact: 'Molly Helper',
      contacts: 'Mother:  503-123-1234',
      upcomingDates: 'Arraignment on 12/30/2018',
      notes: 'Not even part of protest.',
      mcsoName: 'Smith, Henry James',
      mcsoAge: 32,
      mcsoGender: 'M',
      mcsoRace: 'White',
      mcsoHeight: '5 ft 10 in',
      mcsoWeight: '160 lbs',
      mcsoHair: 'Brown',
      mcsoEyes: 'Blue',
      mcsoArrestingAgency: 'Portland Police, Central Precinct',
      mcsoBookingDate: '10/20/2018 6:33 PM',
      mcsoAssignedFacility: 'MCDC',
      mcsoProjectedReleaseDate: 'Unknown'
    },
    {
      swisId: '67890',
      preferredName: 'Slice McGee',
      gender: 'Non-binary',
      pronouns: 'they/them',
      primaryOrgContact: 'Molly Helper',
      contacts: 'Mother:  503-123-1234',
      upcomingDates: 'Arraignment on 12/30/2018',
      notes: 'Not even part of protest.',
      mcsoName: 'Jeff Delaney',
      mcsoAge: 32,
      mcsoGender: 'M',
      mcsoRace: 'White',
      mcsoHeight: '5 ft 10 in',
      mcsoWeight: '160 lbs',
      mcsoHair: 'Blue',
      mcsoEyes: 'Green',
      mcsoArrestingAgency: 'Portland Police, Central Precinct',
      mcsoBookingDate: '10/20/2018 6:33 PM',
      mcsoAssignedFacility: 'MCDC',
      mcsoProjectedReleaseDate: 'Unknown'
    },
    {
      swisId: '45316',
      preferredName: 'Alice People',
      gender: 'Female',
      pronouns: 'she/her',
      primaryOrgContact: 'Molly Helper',
      contacts: 'Mother:  503-123-1234',
      upcomingDates: 'Arraignment on 12/30/2018',
      notes: 'Not even part of protest.',
      mcsoName: 'Alice O\'Peoples',
      mcsoAge: 32,
      mcsoGender: 'F',
      mcsoRace: 'White',
      mcsoHeight: '5 ft 10 in',
      mcsoWeight: '160 lbs',
      mcsoHair: 'Black',
      mcsoEyes: 'Brown',
      mcsoArrestingAgency: 'Portland Police, Central Precinct',
      mcsoBookingDate: '10/20/2018 6:33 PM',
      mcsoAssignedFacility: 'MCDC',
      mcsoProjectedReleaseDate: 'Unknown'
    }
  ]
  );
};

export const updateBooking = () => {
  
};
