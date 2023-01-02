import React from 'react'
import MapView from 'react-native-maps'
import { Dimensions } from 'react-native'
import MyMapViewDirection from './MyMapViewDirection'
import MyMarker from './MyMarker'
import { isEqual } from 'lodash'

const Map = () => {

    const { width, height } = Dimensions.get('window')
    const ASPECT_RATIO = width / height
    const LATITUDE_DELTA = 0.0922
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
    
    const mapRef = React.useRef(null)

    // React.useEffect(() => {
    //     if(!origin.description || !destination.description)
    //         return 
    //     else{
    //         setTimeout(function() {
    //             mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
    //                 edgePadding: {
    //                     right: (width / 20),
    //                     bottom: (height / 20),
    //                     left: (width / 20),
    //                     top: (height / 20),
    //                 },
    //                 animated: true
    //             })
    //         }, 400)
    //     }
    // })

    return (
        <MapView
            ref={mapRef}
            provider="google"
            style={{
                flex: 1
            }}
            showsMyLocationButton
            showsUserLocation
        >
        </MapView>
    )
}

const areEqual = (prevProps, nextProps) => { 
    return (
        isEqual(prevProps.trip.origin, nextProps.trip.origin) &&
        isEqual(prevProps.trip.destination, nextProps.trip.destination)
    ) 
} 

export default Map
