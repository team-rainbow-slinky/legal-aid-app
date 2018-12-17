import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema ({
  swisId: {
    type: String,
    required: true
  },
  org: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Org',
    required: true
  },
  preferredName: String,
  gender: String,
  pronouns: String,
  primaryOrgContact: String,
  contacts: String,
  upcomingDates: String,
  meetingHistory: String,
  notes: String,
  mcsoName: String,
  mcsoAge: Number,
  mcsoGender: String,
  mcsoRace: String,
  mcsoHeight: String,
  mcsoWeight: String,
  mcsoHair: String,
  mcsoEyes: String,
  mcsoArrestingAgency: String,
  mcsoBookingDate: String,  
  mcsoAssignedFacility: String,
  mcsoProjectedReleaseDate: String,
  chargesHTML: String
});

export default mongoose.model('Booking', bookingSchema);
