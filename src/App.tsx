// import { useReducer, useState } from "react";
import { useState } from "react";
import "./App.css";
import YearLists from "./YearLists";
// interface state {
//   count: number;
// }

// type counterAction =
//   | { type: "reset" }
//   | { type: "setminus"; value: state["count"] }
//   | { type: "setCount"; value: state["count"] };
// const initialState: state = { count: 0 };
// function reducerAction(state: state, action: counterAction): state {
//   switch (action.type) {
//     case "reset":
//       return initialState;
//     case "setminus":
//       return { ...state, count: action.value };
//     case "setCount":
//       return { ...state, count: action.value };
//     default:
//       throw new Error("unkown action");
//   }
// }

// interface modalProps{
//   title:string,
//   children:React.ReactNode
// }

function App() {
  // const [state, dispatch] = useReducer(reducerAction, initialState);
  const [value, setValue] = useState("Modifiez-moi");
  const [values, setValues] = useState("newValue");
  const [clicked, setClicked] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(e.target.value);
  };
  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const button: HTMLButtonElement = e.currentTarget;

    setClicked(button.name);
  };

  // const increment = () =>
  //   dispatch({ type: "setCount", value: state.count + 1 });
  // const decrement = () =>
  //   dispatch({ type: "setminus", value: state.count - 1 });

  // const reset = () => dispatch({ type: "reset" });
  const data = {
    years: [2025, 2024, 2023, 2022],
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <h1>My first appliction react Typescript</h1>
      <form>
        <button onClick={buttonHandler} name="button1">
          Button 1
        </button>
        <button onClick={buttonHandler} name="button2">
          Button 2
        </button>
        <button onClick={buttonHandler} name="button3" value={clicked}>
          Button 3
        </button>
        <button onClick={buttonHandler} name="button4">
          Button 4
        </button>
      </form>
      {/* <p>Count :{state.count}</p> */}
      {/* <div className="flex gap-4">
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
      </div> */}
      {clicked !== "" ? `you clicked the ${clicked}` : "is not clicked yet"}
      <input onChange={handleChange} />
      <p>{value}</p>
      <input value={values} onChange={handleChanges} />
      <p>{values}</p>
      <p>{clicked}</p>
      <div className="w-2/5 border flex items-center p-6">
        <YearLists years={data.years} />
      </div>
    </div>
  );
}

export default App;
