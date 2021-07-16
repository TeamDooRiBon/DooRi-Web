import React from 'react';
import ResultCard from '../components/results/ResultCard';

function result({ match }) {
    return (
        <>
            <ResultCard match={match} />
        </>
    );
}

export default result;