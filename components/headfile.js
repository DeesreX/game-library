import React from 'react';
import Head from 'next/head';

function HeadFile() {
    return (
        <Head>
            <title>Rex-topiA</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="A gaming library featuring a collection of JavaScript games created by DeesreX." />
            <meta name="keywords" content="JavaScript, games, library, Rex-topiA, gaming, DeesreX" />
            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
    );
}

export default HeadFile;