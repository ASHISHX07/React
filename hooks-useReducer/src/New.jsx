import { useReducer } from 'react';

function New() {
  // Step 1: Initial state
  const initialState = { count: 0 };

  // Step 2: Reducer function
  const reducer = (state, action) => {
    if (action.type === 'add') {
      return { count: state.count + 1 };
    }
    return state;
  };

  // Step 3: useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // Step 4: UI
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'add' })}>Add</button>
    </>
  );
}

export default New;
