import { useState } from "react";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState();
  const [location, setLocation] = useState({});

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  function getLocation(event) {
    const API =
      "https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${searchQuery}&format=json";
  }

  return (
    <div className="App">
      <input type="text" placeholder="search for a city" onChange={handleSearch}></input>
      <button onClick={getLocation}>Explore</button>
    </div>
  );
}

export default App;
