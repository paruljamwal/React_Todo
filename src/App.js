import logo from "./logo.svg";
import "./App.css";
import { Todo } from "./Components/MainTodo";
import { useState } from "react";

function App() {
  const [isauth, setAuth] = useState(false);
  const [isError,setError]=useState(false);
  const [isLoading,setLoading]=useState(false);
  const handelauth = () => {
    setAuth(true);
  };

  // if(!isauth){
  //   return (
  //     <div>
  //     ser is not login please <button onClick={handelauth}>Login</button>
  //     </div>
  //   )
  // }
  
  return !isauth ? (
    <div className="mainbox">
      You are not login please, <button className="login" onClick={handelauth}>Login</button>
    </div>
  ) : isLoading ? (<div>Loading........</div>) : isError ? (<div>Something Went wrong Please Check...</div>) :(
    <div className="App">
      <h1 className="head" >Todo app</h1>
      <Todo></Todo>
    </div>
  );
}

export default App;
