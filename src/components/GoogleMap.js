import React from 'react';
import styled from 'styled-components';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const Container = styled.div`
  background: red;
`;

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyARq3lIWaDnlepdOd2alXdFzuTcd-PyGdY',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div
        className="is-hidden-mobile"
        style={{
          background: '#e1eff2',
          height: `40rem`,
          padding: '0.75rem 6rem 11rem 6rem',
        }}
      />
    ),
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={19}
    defaultCenter={{ lat: 51.685733, lng: -0.012903 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 51.685733, lng: -0.012903 }} />
    )}
  </GoogleMap>
));

export default MyMapComponent;
