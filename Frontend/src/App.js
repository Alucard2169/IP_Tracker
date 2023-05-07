import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Map from "./components/map";
import AppContext from "./context/appContext";

function App() {
  const [mapData, setMapData] = useState(null);
  const [mapCenter, setMapCenter] = useState([37.40599, -122.078514]);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ mapData, setMapData, setMapCenter, error, setError }}
      >
        <Header />
        <Map center={mapCenter} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
