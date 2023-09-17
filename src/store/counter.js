import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
// Redux always overrides the exciting state, NOT MERGE if we change only 1 state!
// NEVER mutate the exciting state! Return new object!

// NEW WAY - REDUXJS TOOLKIT
const counterSlice = createSlice({
  name: "counter", // every slice need a name
  initialState: initialCounterState, // also a initial state
  reducers: {
    increment(state) {
      state.counter++; // With reduxjs toolkit it's possible to write a code like this, because reduxjs toolkit uses Immer and it detects code like this and automatically clone the exciting state
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      //state.counter = state.counter + action.amount; -  redux
      state.counter = state.counter + action.payload; // reduxjs toolit
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// OLD WAY - REDUX
// const counterReducer = (state = initialCounterState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

//const store = createStore(counterReducer); // accepts only 1 reducer function
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
