import React from 'react';
import { Link } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import AboutMachine from '../components/AboutMachine';
import Video from '../components/Video';
import Steps from '../components/Steps';
import Contact from '../components/Contact';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <Hero />
        <AboutMachine />
        <Video />
        <Steps />
        <Contact />
      </Layout>
    );
  }
}
