import React from 'react';
import NavigationTop from '../components/navigation';
import Bio from '../components/bio';
import Cards from '../components/cards';

export default function Home() {
    return (
        <>
            <NavigationTop />
            <Bio />
            <Cards />
        </>
    );
}
