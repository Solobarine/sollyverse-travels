import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Map = (data) => {
  const location = data.props
  return (
    <MapContainer center={[location.lon, location.lat]} zoom={location.zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Marker position={[location.lat, location.lon]}>
        </Marker>
    </MapContainer>
  )
}

export default Map;
