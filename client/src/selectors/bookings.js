export const getBookings = state => {
  return Object.values(state.bookings.list);
};

export const getBooking = (state, id) => {
  return getBookings(state).find(booking => booking._id === id);
};
