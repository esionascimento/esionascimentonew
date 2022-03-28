import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NavigationTop from '../components/navigation';
import Bio from '../components/bio';
import Cards from '../components/cards';

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['buttons', 'common', 'header', 'home-info', 'label'])),
        locale,
    },
});

export default function Home(props) {
    return (
        <>
            <NavigationTop />
            <Bio props={props} />
            <Cards />
        </>
    );
}
