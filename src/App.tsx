import { useReducer, useState } from "react";
import "./App.css";
interface state {
  count: number;
}

type counterAction =
  | { type: "reset" }
  | { type: "setminus"; value: state["count"] }
  | { type: "setCount"; value: state["count"] };
const initialState: state = { count: 0 };
function reducerAction(state: state, action: counterAction): state {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setminus":
      return { ...state, count: action.value };
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("unkown action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerAction, initialState);
  const [value, setValue] = useState("Modifiez-moi");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const increment = () =>
    dispatch({ type: "setCount", value: state.count + 1 });
  const decrement = () =>
    dispatch({ type: "setminus", value: state.count - 1 });

  const reset = () => dispatch({ type: "reset" });

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <h1>My first appliction react Typescript</h1>
      <p>Count :{state.count}</p>
      <div className="flex gap-4">
        <button
          className="py-2 p-8 rounded-full bg-blue-600 text-white shadow-lg"
          onClick={increment}
        >
          Add
        </button>
        <button
          className="py-2 p-8 rounded-full bg-blue-600 text-white shadow-lg"
          onClick={decrement}
        >
          Duminuer
        </button>
        <button
          className="bg-red-600 hover:bg-red-300 hover:text-white rounded-full py-3 p-8"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <input value={value} onChange={handleChange} />
      <p>{value}</p>
    </div>
  );
}

export default App;
