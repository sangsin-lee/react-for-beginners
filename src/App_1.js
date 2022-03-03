import Button from "./Button";
import {useState, useEffect} from "react";

function App() {
  const [counter, sertValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => sertValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() =>{
    console.log("CALL THE API...");
  }, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5){
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  });
  return (
    <div>
      <input value = {keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <Button text="Continue" onClick={onClick}/>
    </div>
  );
}

export default App;
