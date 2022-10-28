import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import Header from "./components/Header";
import { TextControl } from "./components/TextControl";
import toast from "react-hot-toast";
import { If, Then, Else } from "react-if";
import Sending from "./components/Sending";
import Recieving from "./components/Recieving";

function App() {
  const [isModeSending, setIsModeSending] = useState(false);

  const handleGetWordPress = () => { setIsModeSending(false) };
  const handleSendWordPress = () => { setIsModeSending(true) };

  return (
    <div className='bg-[#1d2329] w-full h-full'>
      <div className=" h-full w-full flex flex-col justify-between p-10 max-w-lg mx-auto">
      <Header />

      {isModeSending ? (
        <Sending handleGetWordPress={handleGetWordPress} />
      ) : (
        <Recieving handleSendWordPress={handleSendWordPress} />
      )}
    </div>
    </div>
    
  );
}

export default App;
