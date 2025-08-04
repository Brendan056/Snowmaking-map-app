import React, { useState } from "react";
import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ICONS = {
  snowGun: new L.Icon({
    iconUrl: "https://img.icons8.com/ios-filled/50/snow.png",
    iconSize: [24, 24],
  }),
  hydrant: new L.Icon({
    iconUrl: "https://img.icons8.com/ios-filled/50/fire-hydrant.png",
    iconSize: [24, 24],
  }),
  valve: new L.Icon({
    iconUrl: "https://img.icons8.com/ios-filled/50/valve.png",
    iconSize: [24, 24],
  }),
  outlet: new L.Icon({
    iconUrl: "https://img.icons8.com/ios-filled/50/electrical.png",
    iconSize: [24, 24],
  }),
};

const COMPONENTS = [
  { id: "101", type: "snowGun", position: [50, 50] },
  { id: "102", type: "hydrant", position: [60, 60] },
  { id: "103", type: "valve", position: [70, 40] },
  { id: "104", type: "outlet", position: [80, 30] },
];

export default function App() {
  const [items] = useState(COMPONENTS);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapContainer
        center={[50, 50]}
        zoom={2}
        crs={L.CRS.Simple}
        style={{ height: "100%", width: "100%" }}
        maxBounds={[[0, 0], [100, 100]]}
      >
        <ImageOverlay
          url="/canyon-map.jpg"
          bounds={[[0, 0], [100, 100]]}
        />
        {items.map((item) => (
          <Marker
            key={item.id}
            position={item.position}
            icon={ICONS[item.type]}
          >
            <Popup>
              <strong>{item.type}</strong> — ID: {item.id}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
