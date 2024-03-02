import React, {useState} from 'react';
import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import location from '../../../public/Images/location.png'
import {API_MAP} from "src/components/Helpers/Api/Api";
import PropTypes from "prop-types";

const ShopsMap = ({center, markers, zoom}) => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_MAP
    });
    const [selectedMarker, setSelectedMarker] = useState(null);

    const handleMarker = (marker) => {
        setSelectedMarker(marker);
        setTimeout(() => {
            setSelectedMarker(null)
        }, 2000);
    };
    return (
        <div className='shops__map'>
            {isLoaded && (
                <GoogleMap
                    mapContainerClassName='shops__img'
                    center={center}
                    zoom={zoom}
                >{markers.map((marker, index) => (
                    <Marker position={{lat: marker.lat, lng: marker.lng}}
                            key={index}
                            options={{
                                animation: window.google.maps.Animation.DROP,
                                animationDuration: 2000
                            }}
                            onClick={() => handleMarker(marker)}
                            icon={{
                                url: location,
                                scaledSize: new window.google.maps.Size(40, 40),
                            }}
                    />
                ))}
                    {selectedMarker && (
                        <div className='shops__marker'>{selectedMarker.address}</div>
                    )}
                </GoogleMap>
            )}
        </div>
    );
};

ShopsMap.propTypes = {
    center: PropTypes.object,
    markers:PropTypes.array,
    zoom:PropTypes.number
}
export default ShopsMap;