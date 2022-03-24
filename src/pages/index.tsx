import React from 'react';
import Head from 'next/head';
import NavigationTop from '../components/navigation';

export default function Home() {
  return (
    <div>
      <NavigationTop />
      <Head>
        <title>Esio Nascimento</title>
      </Head>

      <main>
        <h1>
          em desenvolvimento
        </h1>
      </main>
    </div>
  );
}
