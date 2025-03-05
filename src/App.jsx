import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./components/Watch/Watch";

function App() {
  // const watches = [
  //   { id: 1, name: "APPle watch", price: 100 },
  //   { id: 2, name: "Samsung watch", price: 200 },
  //   { id: 3, name: "Mi watch", price: 300 },
  // ];

  // const watches = [
  //   { id: 1, name: "Rolex Submariner", price: 10000 },
  //   { id: 2, name: "Omega Seamaster", price: 7500 },
  //   { id: 3, name: "Tag Heuer Carrera", price: 5000 },
  //   { id: 4, name: "Seiko Prospex", price: 1500 },
  //   { id: 5, name: "Casio G-Shock", price: 300 },
  // ];

  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("watches.json")
      .then((response) => response.json())
      .then((data) => setWatches(data));
  }, []);

  return (
    <>
      <h1>Vite + React</h1>

      {watches.map((watch) => {
        return <Watch key={watch.id} watch={watch} />;
      })}
    </>
  );
}

export default App;
