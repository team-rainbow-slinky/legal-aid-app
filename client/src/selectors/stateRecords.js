export const getStateRecords = state => {
  return state.stateRecords.list;
};

export const getStateRecordsLoading = state => state.stateRecords.loading;

export const getStateRecordsLoaded = state => state.stateRecords.searchComplete;
