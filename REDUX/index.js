const redux = require('redux')

// initial State value
const initialStateValue = { counter: 0 };

// reducer 
const reducer = (state = initialStateValue, action) => {
    switch (action.type) {
        case "increment":
            return { counter: state.counter + 1 };
        case "decrement":
            return { counter: state.counter - 1 };
    }
};

// store
const store = redux.createStore(reducer);

// subscriber

const subscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(subscriber);

// dispatch

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });