import React, { FunctionComponent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Page from '../components/Page';

import PtMediaSearch from '../components/ptMediaSearch';

const PageComponent: FunctionComponent = () => {

    return (
        <Page
            id='searchPage'
            title='在线更新'
            className='mainAnimatedPage libraryPage allLibraryPage noSecondaryNavPage'
        >
            <PtMediaSearch />
        </Page>
    );
};
 
export default PageComponent;
