export const getBookings = state => {
  return state.bookings.list;
};

export const getBooking = (state, id) => {
  return state.bookings.list.find(booking => booking._id === id);
};
