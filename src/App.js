import React, {useState, useEffect} from "react";
import "./App.css";

import APODCreate from "./Components/APODcreate";


function App() {
  const [datepicked, setDate] = useState()

  useEffect(()=>{
    setDate(datepicked)
  },[datepicked])

  return (
    <div className="App">
      <p>
        /* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */
      </p>
      <APODCreate />
    </div>
  );
}

export default App;
