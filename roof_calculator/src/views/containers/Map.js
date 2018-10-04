/* eslint-disable no-undef */
import React, { Component } from "react";
import GoogleMaps from "../components/GoogleMaps";
import SearchAppBar from "../components/SearchAppBar.js";
import AlertDialog from "../components/AlertDialog.js";

class Map extends Component {
  state = {
    centerPoint: { lat: 57.7352125, lng: 11.8440307 },
    showAreaDialog: false,
    dialogContent: ""
  };

  componentDidMount() {
    this.setState({ map: this.createNewMap() });
  }

  clearMap = () => {
    this.setState({ map: null }, () => {
      this.setState({ map: this.createNewMap() });
    });
  };

  createNewMap = () => {
    let map = (
      <GoogleMaps
        onPolygonComplete={this.onPolygonComplete}
        centerPoint={this.state.centerPoint}
      />
    );
    return map;
  };

  updateCoordinates = data => {
    this.setState({ centerPoint: { lat: data.lat, lng: data.lng } });

    //störigt att jag behöver cleare, trodde den skulle uppdatera ändå
    this.clearMap();
  };

  onPolygonComplete = polygon => {
    //var area = google.maps.geometry.spherical.computeArea(polygon.getPath());
    var area = google.maps.geometry.spherical.computeArea(polygon.getPath());
    this.openDialog(`Ytan på den valda arean är: ${area}m^2`);
  };

  openDialog = dialogContent => {
    this.setState({ showAreaDialog: true, dialogContent });
  };

  closeDialog = () => {
    this.setState({ showAreaDialog: false });
  };

  render() {
    return (
      <div>
        <SearchAppBar
          searchPlaceHolder={"Sök ny adress"}
          clearMap={this.clearMap}
          map={this.state.map}
          updateCoordinates={this.updateCoordinates}
        />
        <AlertDialog
          dialogContent={this.state.dialogContent}
          open={this.state.showAreaDialog}
          closeDialog={this.closeDialog}
          title="Yta beräknad"
        />
        {this.state.map}
      </div>
    );
  }
}

export default Map;
