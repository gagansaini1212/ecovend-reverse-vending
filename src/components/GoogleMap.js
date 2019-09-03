import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

import config from '../utils/config';

const PinIcon = styled.i`
  width: 40px;
  height: auto;
  color: red;
`;

const AnyReactComponent = ({ text }) => (
  <span className="icon">
    <PinIcon className="fas fa-thumbtack" title={text} />
  </span>
);

class GoogleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 51.682929,
      lng: -0.012764,
    },
    zoom: 17,
  };

  render() {
    const { center, zoom } = this.props;
    // console.log('center', center);

    return (
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.google.key }}
          defaultCenter={center}
          defaultZoom={zoom}>
          <AnyReactComponent
            lat={center.lat}
            lng={center.lng}
            text="Drop location"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
