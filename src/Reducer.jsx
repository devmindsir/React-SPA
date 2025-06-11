import { useReducer, useState } from "react";

function reducerFunc(state, action) {
  if (action.type === "Increment") return state + 1;
  if (action.type === "Decrement") return state - 1;
  if (action.type === "Reset") return (state = 0);
  return state;
}

function Reducer() {
  // const [state,setState]=useState(0);
  const [state, dispatch] = useReducer(reducerFunc, 0);

  return (
    <div className="m-10">
      <p className="my-4 bg-gray-4 py-2 text-center">{state}</p>
      <button
        onClick={() => dispatch({ type: "Increment" })}
        className="px-4 py-2 bg-blue-500 rounded text-center">
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "Decrement" })}
        className="px-4 py-2 bg-blue-500 rounded text-center">
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "Reset" })}
        className="px-4 py-2 bg-blue-500 rounded text-center">
        Reset
      </button>
    </div>
  );
}

export default Reducer;
