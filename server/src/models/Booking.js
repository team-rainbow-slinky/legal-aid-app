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
  alias: String,
  gender: String,
  contacts: String,
  notes: String,
  mscoName: String,
  mscoAge: Number,
  mscoGender: String,
  mscoRace: String,
  mscoHeight: String,
  mscoWeight: String,
  mscoHair: String,
  mscoEyes: String,
  mscoArrestingAgency: String,
  mscoBookingDate: String,  // or maybe date?
  mscoAssignedFacility: String,
  mscoProjectedReleaseDate: String
});

export default mongoose.model('Booking', bookingSchema);