import { useState } from "react";
import {Form, MainImage} from "./components/index"
import "./App.css";

function App() {
  const [count, setCount] = useState(20);
  const [state, setState] = useState("a");

  return (
  <div>
    <MainImage></MainImage>
    <Form></Form>
  </div>);
}

export default App;
