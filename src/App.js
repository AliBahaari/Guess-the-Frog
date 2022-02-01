import { useEffect, useState } from 'react';
import './App.css';
import Frog from './assets/Frog.png';

function App() {

  const [randomNumber, setRandomNumber] = useState(null);
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {

    const randomNumberGenerate = Math.ceil(Math.random() * 20);
    setRandomNumber(randomNumberGenerate);
    console.log(randomNumberGenerate);

  }, []);

  const randomizeTheNumber = () => {

    const randomNumberGenerate = Math.ceil(Math.random() * 20);
    setRandomNumber(randomNumberGenerate);
    console.log(randomNumberGenerate);

  }

  const boxClick = (id) => {

    setCorrect(false);
    setWrong(false);

    if (id === randomNumber) {

      setCorrect(true);
      setTimeout(() => {
        setCorrect(false);
        setScore(prevState => prevState + 1);
      }, 1000);

    } else {

      setWrong(true);
      setTimeout(() => {
        setWrong(false);
      }, 1000);

    }

    randomizeTheNumber();

  }

  return (
    <div>

      <p className='title'>Guess the Frog!</p>
      <p className='score'>Score: {score}</p>

      <div className="boxesGrid">

        <div onClick={() => boxClick(1)}></div>
        <div onClick={() => boxClick(2)}></div>
        <div onClick={() => boxClick(3)}></div>
        <div onClick={() => boxClick(4)}></div>

        <div onClick={() => boxClick(5)}></div>
        <div onClick={() => boxClick(6)}></div>
        <div onClick={() => boxClick(7)}></div>
        <div onClick={() => boxClick(8)}></div>

        <div onClick={() => boxClick(9)}></div>
        <div onClick={() => boxClick(10)}></div>
        <div onClick={() => boxClick(11)}></div>
        <div onClick={() => boxClick(12)}></div>

        <div onClick={() => boxClick(13)}></div>
        <div onClick={() => boxClick(14)}></div>
        <div onClick={() => boxClick(15)}></div>
        <div onClick={() => boxClick(16)}></div>

        <div onClick={() => boxClick(17)}></div>
        <div onClick={() => boxClick(18)}></div>
        <div onClick={() => boxClick(19)}></div>
        <div onClick={() => boxClick(20)}></div>

      </div>

      {
        correct &&
        <div>
          <img src={Frog} alt='Frog' className='frogImage' />
          <p className='correctText'>CORRECT! I'm Here...</p>
        </div>
      }

      {
        wrong &&
        <p className='wrongText'>WRONG!</p>
      }

    </div>
  );
}

export default App;
