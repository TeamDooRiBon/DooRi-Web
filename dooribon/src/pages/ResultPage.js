import React from 'react';
import ResultCard from '../components/results/ResultCard';

const ResultPage = ({ match }) => {
    return (
        <>
            <ResultCard match={match} />
        </>
    );
}

export default ResultPage;