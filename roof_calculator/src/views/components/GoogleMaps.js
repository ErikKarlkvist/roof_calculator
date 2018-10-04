/* eslint-disable no-undef */

import React, { Component } from "react";
import { GOOGLE_API_KEY } from "../../models/API_Keys";
//`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${GOOGLE_API_KEY}&libraries=geometry,drawing,places`
const { compose, withProps } = require("recompose");
const { withGoogleMap, GoogleMap } = require("react-google-maps");
const {
  DrawingManager
} = require("react-google-maps/lib/components/drawing/DrawingManager");

const GoogleMaps = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${GOOGLE_API_KEY}&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `90vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={19}
    center={
      new google.maps.LatLng(props.centerPoint.lat, props.centerPoint.lng)
    }
    mapTypeId={google.maps.MapTypeId.HYBRID}
    defaultOptions={{
      mapTypeControlOptions: {
        mapTypeIds: [
          google.maps.MapTypeId.HYBRID,
          google.maps.MapTypeId.SATELLITE
        ]
      }
    }}
  >
    <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.POLYGON}
      onPolygonComplete={props.onPolygonComplete}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [google.maps.drawing.OverlayType.POLYGON]
        },
        polygonOptions: {
          fillColor: `#5fdd74`,
          fillOpacity: 0.5,
          strokeWeight: 2,
          clickable: true,
          editable: true,
          zIndex: 1
        }
      }}
    />
  </GoogleMap>
));

export default GoogleMaps;
