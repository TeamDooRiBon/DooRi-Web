import React, { useState, useEffect } from 'react';
import Wrapper from '../common/Wrapper';
import { makeStyles } from '@material-ui/core/styles';
import result from '../../contents/result';
import Typography from '@material-ui/core/Typography';
import Loading from '../common/Loading';
import '../common/Main.css';


const useStyles = makeStyles({
    title: {
        fontSize: 23,
        marginTop: '10%',
        marginBottom: '5px',
        textAlign: "center",
        fontFamily: 'spoqa-medium',
        fontWeight: 'bold',
        color: '#6B8FF9'
    },
    contentTitle: {
        fontSize: 20,
        marginTop: '5px',
        textAlign: "center",
        fontFamily: 'spoqa-medium',
        fontWeight: 'bold',
        color: 'black'
    },
    button: {
        textAlign: "center",
        fontFamily: 'spoqa-regular',
        marginTop: '5%'
    },
});

const ResultCard = ({ match }) => {
    const [showResult, setShowResult] = useState(false);
    const classes = useStyles();

    useEffect(()=> {
        const tick = setTimeout(() => {
            setShowResult(true);
        }, 3000);
        return () => clearTimeout(tick);
    });
    return (
        <>
            <Wrapper>
                { showResult &&
                    <img src = {result[match.params.tendency]} width="100%" hegiht="100%"/>
                }
                {!showResult &&
                    <Loading done={100} />
                }
            </Wrapper>
        </>
    );
};

export default ResultCard;