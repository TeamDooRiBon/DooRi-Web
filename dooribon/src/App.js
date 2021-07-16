import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import './App.css';

function App() {
  return (
    <>
      <Helmet>
        <title>두리번 여행 성향 테스트</title>
      </Helmet>
      <Route component={MainPage} path="/" exact />
      <Route component={QuestionPage} path='/question/:id' />
      <Route component={ResultPage} path='/result/:tendency' />
    </>
  );
}

export default App;
