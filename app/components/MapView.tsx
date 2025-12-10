// 'use client';

// import { useState } from 'react';
// import Map, { Marker, Popup } from 'react-map-gl';
// import maplibregl from 'maplibre-gl';
// import { ListingCardItem, SearchData } from '../types/app';
// import { getCenter } from 'geolib';
// import 'maplibre-gl/dist/maplibre-gl.css';
// import Image from 'next/image';

// const MapComponent = ({ searchResultData }: { searchResultData: SearchData }) => {
//   const [selectedLocation, setSelectedLocation] =
//     useState<ListingCardItem | null>(null);

//   const coordinates = searchResultData.map((listing) => ({
//     longitude: listing.long,
//     latitude: listing.lat,
//   }));

//   const center = getCenter(coordinates) as {
//     longitude: number;
//     latitude: number;
//   };

//   const [viewport, setViewPort] = useState({
//     zoom: 11,
//     longitude: center.longitude,
//     latitude: center.latitude,
//   });

//   return (
//     <Map
//       {...viewport}
//       onMove={(evt: { viewState: { zoom: any; longitude: any; latitude: any; }; }) =>
//         setViewPort({
//           zoom: evt.viewState.zoom,
//           longitude: evt.viewState.longitude,
//           latitude: evt.viewState.latitude,
//         })
//       }
//       mapLib={maplibregl} // 👈 IMPORTANT: use MapLibre
//       style={{ width: '100%', height: '100%' }}
//       mapStyle="https://tiles.basemaps.cartocdn.com/gl/positron-gl-style/style.json" // 👈 FREE OSM STYLE
//     >
//       {searchResultData.map((listing) => (
//         <div key={listing.long}>
//           <Marker longitude={listing.long} latitude={listing.lat}>
//             <div
//               onClick={() => setSelectedLocation(listing)}
//               className="animate-bounce cursor-pointer"
//             >
//               <Image
//                 src="/mapMarker.png"
//                 alt="map-marker"
//                 width={24}
//                 height={24}
//               />
//             </div>
//           </Marker>

//           {selectedLocation?.long === listing.long ? (
//             <Popup
//               closeOnClick={false}
//               onClose={() => setSelectedLocation(null)}
//               longitude={listing.long}
//               latitude={listing.lat}
//               anchor="top"
//             >
//               {listing.title}
//             </Popup>
//           ) : null}
//         </div>
//       ))}
//     </Map>
//   );
// };

// export default MapComponent;
