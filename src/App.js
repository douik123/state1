import React, { useState } from "react";
import "./App.css";
function App() {
  const [msg, setMsg] = useState("Click to say Hello !");
  const [inp, setInp] = useState("Message");
  const [tab, setTab] = useState(["ahmed","mariem","ksia","houcem"]);
  const [input, setInput] = useState("");
  const addNewTab=(e)=>{
    setTab([...tab,input]);
  }
  return (
    <div className="container">
      <h1>Hello !</h1>
      <div className="counter-container">
        <h3>{msg}</h3>
        
        <button 
          onClick={() => {
            setMsg("Hello !");
          }}
        >
          Change
        </button>
      </div>
      <label>Text</label>
      <input type="text" 
      onChange={(e)=>setInp(e.target.value)}
      />
      <h1>{inp}</h1>
      <div>
      <input type="text" onChange={(e)=>setInput(e.target.value)}/><button onClick={addNewTab} >Save</button>
      <div>
       {tab.map(tabs=>
        <div className="tabs">
          <h3>{tabs}</h3>
          <button>Delete</button>
        </div>
          )}
      </div>




      </div>
    </div>
  );
}
export default App;