import { useReducer } from "react";
import "./App.css";

interface state {
  count: number;
}
type counterAction =
  | { type: "reset" }
  | { type: "setCount"; value: state["count"] };

const initialState: state = { count: 0 };

function stateReducer(state: state, action: counterAction): state {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Action not found");
  }
}
function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <h1>My first appliction react Typescript</h1>
      <p>Count : {state.count}</p>
      <button onClick={addFive}> Add 5</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
}

export default App;
