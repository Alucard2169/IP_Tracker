import { useMap } from "react-leaflet";

const ChangeView = ({center}) => {
    const map = useMap();
    map.setView(center, 15);
    return null
}
 
export default ChangeView;