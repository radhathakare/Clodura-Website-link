import React, { useState } from 'react';
import ContentHeaderWrapper, { StyledContentHeader } from './contentHeader.style';

const ContentHeader = () => {
    const [tab, setTab] = useState(0); // 0 Intelligence 1 Data 2 Cadence

    return (
        <ContentHeaderWrapper id="Intelligence">
            <StyledContentHeader>
                <a href="#Intelligence" style={{ borderBottom: `${tab === 0 ? '4px solid #03BAED' : 'none'}`, color: `${tab === 0 ? '#03BAED' : 'black'}` }} onClick={() => setTab(0)}>Intelligence</a>
                <a href="#Data" style={{ borderBottom: `${tab === 1 ? '4px solid #03BAED' : 'none'}`, color: `${tab === 1 ? '#03BAED' : 'black'}` }} onClick={() => setTab(1)}>Data</a>
                <a href="#Cadence" style={{ borderBottom: `${tab === 2 ? '4px solid #03BAED' : 'none'}`, color: `${tab === 2 ? '#03BAED' : 'black'}` }} onClick={() => setTab(2)}>Cadence</a>
            </StyledContentHeader>
        </ContentHeaderWrapper>
    );
};

export default ContentHeader;
