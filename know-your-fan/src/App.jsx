import { useState } from 'react';
import QuizForm from './components/QuizForm';
import Result from './components/Result';
import '../src/css/style.css';


function App() {
  const [quizData, setQuizData] = useState(null);

  const handleQuizSubmit = (data) => {
    setQuizData(data);
  };

  const handleReset = () => {
    setQuizData(null);
  };

  return (
    <div className="App">
      <h1>FURIA Esports - Conheça Seu Perfil de Torcedor</h1>
      {!quizData ? (
        <QuizForm onSubmit={handleQuizSubmit} />
      ) : (
        <Result data={quizData} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
