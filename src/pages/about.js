import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <h1>About me</h1>
      <p> this is a personal website built with Gatsby</p>
      <Link to={"/"}>&larr; back to home</Link>
    </Layout>
  );
}
