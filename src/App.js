import { useReducer, useSyncExternalStore } from "react";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState();
  const [location, setLocation] = useState({});

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  function getLocation(event) {}

  return (
    <div className="App">
      <input type="text" placeholder="search for a city" onChange={handleSearch}></input>
      <button onClick={getLocation}>Explore</button>
    </div>
  );
}

export default App;
