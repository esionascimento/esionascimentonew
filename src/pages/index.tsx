import React from "react";
import Head from 'next/head';
import NavigationTop from '../components/navigation';
import Bio from '../components/bio'

export default function Home()    {
    return (
        <div>
            <NavigationTop />
            <Bio />
        </div>
    );
}
