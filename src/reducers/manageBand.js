import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {

  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: uuid(),
        name: action.payload
      }
      return { ...state, bands: [...state.bands, band] }
      // works just like above:
      //  return { bands: state.bands.concat(band) }
    
    case 'DELETE_BAND':

      // works just like below:
      //  const bands = state.bands.filter(band => band.id !== action.id);
      //  return { bands };

      return { bands: state.bands.filter(band => band.id !== action.id) }

    default:
      return state;
  }

}