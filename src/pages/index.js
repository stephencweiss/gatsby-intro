import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <h1>Home</h1>
    <div>Hello Minny!</div>
    <Link to="/about">&rarr; about me</Link>
  </Layout>
);
