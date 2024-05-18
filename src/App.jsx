import { useState } from "react";
import Navbar from "./comp/Navbar";
import Newsboard from "./comp/Newsboard";

const App = () => {
  const [category,setCategory]=useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </div>
  );
};
export default App;
