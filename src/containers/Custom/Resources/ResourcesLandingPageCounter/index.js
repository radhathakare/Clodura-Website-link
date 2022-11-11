import React from 'react';
import CounterWrapper, { RenderedBlockWrapper } from './resourceslandingpagecounter.style.js';

const ResourcesLandingPageCounter = ({ page, setPage, totalPages }) => {
    const renderNumberBlocks = () => {
        const renderedBlock = [];
        for (let i = 0; i < totalPages; i++)
            renderedBlock.push(<div role="button" tabIndex={0} style={{ backgroundColor: page === (i + 1) ? '#03BAED' : 'white', color: page === (i + 1) ? 'white' : 'gray' }} onClick={() => setPage((i + 1))}>{i + 1}</div>)
        return renderedBlock;
    }

    const handlePrevious = () => {
        setPage(page => page - 1);
    }

    const handleNext = () => {
        setPage(page => page + 1);
    }

    return (
        <CounterWrapper>
            <RenderedBlockWrapper>
                {page > 1 && <button onClick={handlePrevious}>Previous</button>}
                {renderNumberBlocks()}
                {page < totalPages && <button onClick={handleNext}>Next</button>}
            </RenderedBlockWrapper>
        </CounterWrapper>
    );
};

export default ResourcesLandingPageCounter;