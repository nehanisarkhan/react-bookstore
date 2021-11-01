const redux = require('redux');
const createStore = redux.createStore; //creating store

//action
const Buy_Cake = 'Buy_Cake'; //indcates the type of action
//an action isa n object with a type property

//action creator function
function buyCake() {
  return {
    type: Buy_Cake,
    info: 'first redux action',
  };
}

//reducer
//reducer =>>> (previousState,action) => newState
const initialState = {
  numOfCakes: 10,
};
//the state object is not mutated,a new object is being returned
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Buy_Cake:
      return {
        ...state, //make a copy of state and then only update the numOfCakes leaving other properties as it is
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer); //making use of createStore method
//reducer has initialState of the app which is required for the store to make state transition based on the action recieved
console.log('initiat state = ', store.getState()); //access to state
store.subscribe(() => console.log('updated state ', store.getState()));
