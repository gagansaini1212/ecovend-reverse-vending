import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import config from '../utils/config';
import Hero from '../components/Hero';
import About from '../components/About';
import Video from '../components/Video';
import DrsInfo from '../components/DrsInfo';
import Steps from '../components/Steps';
import Contact from '../components/Contact';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Ecovend Reverse Vending"
          url={`${config.siteUrl}`}
        />
        <Hero />
        <About />
        <Video />
        <DrsInfo />
        <Steps />
        <Contact />
      </Layout>
    );
  }
}
