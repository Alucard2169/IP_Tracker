import "leaflet/dist/leaflet.css";
import markerIconSvg from "leaflet/dist/images/Marker.svg";
import { Icon } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import "../styles/map.css";
import { useContext, useRef } from "react";
import ChangeView from "./changeView";
import AppContext from "../context/appContext";

const Map = ({ center }) => {
  const { mapData } = useContext(AppContext);
  const animateRef = useRef(true);
  const SetViewOnClick = ({ animateRef }) => {
    const map = useMapEvent("click", (e) => {
      map.setView(e.latlng, map.getZoom(), {
        animate: animateRef.current || false,
      });
    });
    return null;
  };

  return (
    <div className="map">
      <MapContainer center={center} zoom={15} scrollWheelZoom={true}>
        <ChangeView center={center} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SetViewOnClick animateRef={animateRef} />
        <Marker
          position={center}
          icon={
            new Icon({
              iconUrl: markerIconSvg,
              iconSize: [32, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            {mapData &&
              `${mapData.country} ${mapData.region} , ${mapData.city}`}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
