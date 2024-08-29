import { useState } from "react";

function Btt({bgColor, title, setColor}) {
  return (
    <button
      className="font-bold min-w-[5rem] p-2 rounded-xl text-[white] mx-2 drop-shadow-lg"
      style={{ backgroundColor: bgColor }}
      onClick={()=> setColor(bgColor)}
    >{title}</button>
  );
}

function App() {
  const [color, setColor] = useState("lightBlue");

  return (
    <>
      <div
        className="w-screen h-screen duration-300 flex justify-center items-end "
        style={{ backgroundColor: color }}
      >
        <div className="bg-[white] p-3   flex flex-wrap justify-center items-center mb-20 rounded-md drop-shadow-md">

          <Btt title="Red" bgColor="red" setColor={setColor} />
          <Btt title="yellow" bgColor="yellow" setColor={setColor} />
          <Btt title="green" bgColor="green" setColor={setColor} />
          <Btt title="blue" bgColor="blue" setColor={setColor} />
          <Btt title="pink" bgColor="pink" setColor={setColor} />
          <Btt title="gray" bgColor="gray" setColor={setColor} />
          <Btt title="purple" bgColor="purple" setColor={setColor} />
          <Btt title="orange" bgColor="orange" setColor={setColor} />
          

        </div>
      </div>
    </>
  );
}

export default App;
