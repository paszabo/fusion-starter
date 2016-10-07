import initialState from './initialState';

export default function vehicleReducer(vehicles = initialState.vehicles, action) {
  switch (action.type) {
    default:
      return vehicles;
  }
}
