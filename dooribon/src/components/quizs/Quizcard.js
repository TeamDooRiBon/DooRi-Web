import React, { useState, useEffect } from 'react';
import Wrapper from '../common/Wrapper';
import Top from '../common/Top';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import quiz from '../../contents/question';
import score from '../../contents/score';
import line from '../../img/line.png';
import Button from '../common/Button';
import styled from 'styled-components';

import '../common/Main.css';

const Question = styled.div`
  text-align : center;
  margin-top: 25%;
  padding : 0;
`;

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

const QuizWrapper = styled.div`
  text-align : center;
  margin : 0;
  padding : 0;
`;

const QuizCard = ({ match }) => {
    const classes = useStyles();
    const [curQuiz, setQuiz] = useState({});
    const [id, setId] = useState(0);

    useEffect(() => {
        const num = parseInt(match.params.id);
        if (quiz) {
            setQuiz(quiz[num - 1]);    //렌더링 시 질문 설정 (현재 주소 파라미터에서 질문 번호 가져온다.
            setId(num + 1);
        }
    }, [match]);

    const getScore = (arr) => {
        let idx = 0;
        arr.map((item => {
            score[0][idx] = +score[0][idx] + item;  //score value가 NaN이라 형변환 해줌
            if (score[0][idx] > +score[1].maxScore) {
                score[1].maxScore = score[0][idx];
                score[1].maxIdx = idx;
            }
            idx++;
        }));
        
    };
    
    return (
        <Wrapper>
            <QuizWrapper>
                <Top />
                {match.params.id < 10 &&
                <Question>
                    <Typography className={classes.title}>Q{match.params.id}</Typography>
                    <img src={line}/>
                    <Typography className={classes.contentTitle} dangerouslySetInnerHTML={{ __html: curQuiz.title }}></Typography>
                    <br />

                    {curQuiz.content && curQuiz.content.map((item, index) => (
                        <Link to={`/question/${id}`} key={index} >
                            <Button className={classes.button}
                                weight={"normal"} width={"90%"} fontSize={"13px"} color={"black"} background={'white'} 
                                onClick={() => getScore(item.weight)}> {item.answer}
                            </Button>
                        </Link>
                    ))}
                </Question>
                }
                {match.params.id == 10 &&
                <Question>
                    <Typography className={classes.title}>Q{match.params.id}</Typography>
                    <img src={line} />
                    <Typography className={classes.contentTitle} dangerouslySetInnerHTML={{ __html: curQuiz.title }}></Typography>
                    <br />
                    {curQuiz.content && curQuiz.content.map((item, index) => (
                        <Link to={`/result/${score[1].maxIdx}`} key={index}>
                            <Button className={classes.button}
                                weight={"normal"} width={"90%"} fontSize={"13px"} color={"black"} background={'white'}
                                onClick={() => getScore(item.weight)}>{item.answer}</Button>
                        </Link>
                    ))}
                </Question>
            }
            </QuizWrapper>
        </Wrapper>
    );
};

export default withRouter(QuizCard);