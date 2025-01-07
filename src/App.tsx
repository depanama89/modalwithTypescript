import { useState } from "react";
import "./App.css";
interface ButtonProps {
  title: string;
  disabled: boolean;
  handleClick: () => void;
}
function MyButton({ title, disabled, handleClick }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className="py-2 px-5 font-semibold rounded-full bg-violet-600 text-white shadow-md hover:bg-violet-800 cursor-pointer"
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

function App() {
  const [enabled, setEnabled] = useState<boolean>(true);
  const [name, setName] = useState<string>("patrick");
  function handleClick() {
    setEnabled(!enabled);
    console.log(`valeur apres click ${enabled}`);
    setName("rodrick");
    setName("rodrick");
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <h1>My first appliction react Typescript</h1>
      <MyButton title="My button" disabled={false} handleClick={handleClick} />
      <p>{name}</p>
    </div>
  );
}

export default App;
