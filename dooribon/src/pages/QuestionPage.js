import React from 'react';
import QuizCard from '../components/quizs/Quizcard';

const QuestionPage = ({ match }) => {
    return (
        <>
            <QuizCard match={match} />
        </>
    );
};

export default QuestionPage;