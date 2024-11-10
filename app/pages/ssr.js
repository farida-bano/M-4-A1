
// pages/ssr.js
import React from 'react';

const SSRPage = ({ data }) => (
  <div>
    <h1>Server-Side Rendered Data</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

export async function getServerSideProps() {
  const res = await fetch('https://api.publicapis.org/entries');
  const data = await res.json();

  return { props: { data } };
}

export default SSRPage;
