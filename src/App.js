// import NavBar from "./components/NavBar";
// import Hero from "./components/Hero";
// import Card from "./components/Card";
// import data from "./data";
// import boxes from "./components/boxes";
// import Box from "./components/box";
import Header from "./components/Header";
import Meme from "./components/Meme";
// import { ReactDOM } from "react-dom";
import React from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(0);
  console.log("component rendered");
  React.useEffect(() => {
    console.log("Effect Function Ran");
    // fetch("https://swapi.dev/api/people/1")
    //   .then((res) => res.json())
    //   .then((data) => setStarWarsData(data));
  }, [count]);
  const [data, setData] = React.useState({});
  return (
    <div>
      {/* <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The Count is {count}</h2> */}
      {/* <button onClick={() => setCount{prevCount => prevCount +1}} >Add</button>  */}
      <Header />
      <Meme />
    </div>
  );
}
