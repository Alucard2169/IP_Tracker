import { useContext } from "react";
import "../styles/detailBlock.css";
import AppContext from "../context/appContext";

const DetailBlock = () => {
  const { mapData, error } = useContext(AppContext);

  console.log(mapData, error);
  return (
    <div>
      {mapData && (
        <div className="detailBlock">
          <div className="address detail">
            <span>IP ADDRESS</span>
            <p>{mapData.ip}</p>
          </div>
          <hr />
          <div className="location  detail">
            <span>LOCATION</span>
            <p>{`${mapData.country} ${mapData.region} , ${mapData.city}`}</p>
          </div>
          <hr />
          <div className="timezone  detail">
            <span>TIMEZONE</span>
            <p>UTC {mapData.timezone}</p>
          </div>
          <hr />
          <div className="isp  detail">
            <span>COUNTRY CODE</span>
            <p>{mapData.country_code}</p>
          </div>
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default DetailBlock;
