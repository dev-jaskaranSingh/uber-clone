import { createSlice } from '@reduxjs/toolkit';

/* Setting the initial state of the redux store. */
const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
};

/* Creating a slice of the state. */
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        }
    }
});

/* Exporting the actions from the slice. */
export const { setOrigin, setDestination, setTravelTimeInformation } =
    navSlice.actions;

/**
 * This function takes in a state and returns the origin of the state.
 * @param state - the state of the redux store
 */
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTime = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;
