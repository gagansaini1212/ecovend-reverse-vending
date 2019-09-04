import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

import config from '../utils/config';

const Conatiner = styled.section`
  padding: 1rem 1.5rem 5rem 1.5rem;
  background-color: #e1eff2;
`;

const PinIcon = styled.i`
  width: 80px;
  height: auto;
  color: red;
`;

const AnyReactComponent = ({ text }) => (
  <span className="icon">
    <PinIcon className="fas fa-map-marker-alt" title={text} />
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
      <Conatiner className="section is-hidden-mobile">
        <div className="container">
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: config.google.key }}
              defaultCenter={center}
              defaultZoom={zoom}>
              <AnyReactComponent
                lat={center.lat}
                lng={center.lng}
                text="Our location"
              />
            </GoogleMapReact>
          </div>
        </div>
      </Conatiner>
    );
  }
}

export default GoogleMap;
