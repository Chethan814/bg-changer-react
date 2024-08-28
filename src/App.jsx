import { useState } from "react";

import "./App.css";

function Btt({ bttColor, setColor }) {
  return (
    <>
      <button
        className="text-[white] p-2 rounded-xl mx-4 min-w-[5rem] font-bold"
        style={{
          backgroundColor: bttColor,
        }}
        onClick={() => setColor(bttColor)}
      >{bttColor}</button>
    </>
  );
}

function App() {
  const [color, setColor] = useState("lightBlue");

  return (
    <div
      className="w-screen h-screen duration-500 "
      style={{
        backgroundColor: color,
      }}
    >
      <div className=" text-center bg-[white] p-3 flex flex-wrap justify-center fixed bottom-20 w-full  ">
        <Btt bttColor='red' setColor={setColor} />
        <Btt bttColor='blue' setColor={setColor} />
        <Btt bttColor='yellow' setColor={setColor} />
        <Btt bttColor='green' setColor={setColor} />
        <Btt bttColor='pink' setColor={setColor} />
        <Btt bttColor='orange' setColor={setColor} />
        <Btt bttColor='purple' setColor={setColor} />
        <Btt bttColor='gray' setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
