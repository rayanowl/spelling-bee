import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import selectLetters from '../utils/selectLetters';
import validateWord from '../utils/validateWord';


const GamePage = () => {
  const router = useRouter();
  const [letters, setLetters] = useState([]);
  const [inputWord, setInputWord] = useState('');
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);
  

  useEffect(() => {
    setNewWord();
    startTimer();
  }, []);

  const setNewWord = () => {
    setLetters(selectLetters('en'));
  };

  const startTimer = () => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          setIsTimeUp(true);
          return 0;
        }
      });
    }, 1000);
  };

  const handleChange = (e) => {
    setInputWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputWord.trim() === '') return;
  
    if (validateWord(inputWord, 'en')) {
      setScore((prevScore) => prevScore + inputWord.length*100);
      setTime((prevTime) => prevTime + 15);
      setNewWord();
    }
  
    setInputWord('');
  };

  const handleReturn = () => {
    router.push('/');
  };

  const handleTR = () => {
    router.push('/tr');
  };

  const handleRestart = () => {
    setLetters(selectLetters('en'));
    setInputWord('');
    setMessage('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg w-full px-4">
      <button onClick={handleTR} className="absolute left-5 top-5 p-2 text-white bg-red-500 rounded hover:bg-red-700 transition duration-300" disabled={isTimeUp}>TR</button>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-oa">Word Guess Game</h1>
          <div className="text-xl mb-4 text-oa">Letters:<div className="h-6"></div><div className="flex flex-wrap justify-center">{letters.map((letter, index) => (<div key={index} className={"bg-gray-200 w-12 h-12 flex items-center justify-center mx-2 mb-2 rounded"}>{letter}</div>))}
  </div>
</div>
          <form onSubmit={handleSubmit} className="mb-4">
            <input type="text" value={inputWord} onChange={handleChange} placeholder="Enter the word" className="w-full px-4 py-2 mb-2 border border-gray-400 rounded" disabled={isTimeUp} />
            <button type="submit" className="w-full px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition duration-300" disabled={isTimeUp}>Submit</button>
          </form>
          <div className="text-xl mb-4 text-oa">Time: {time > 0 ? `${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}` : 'Times up!'}</div>
          <div className="text-xl mb-4 text-oa">Score: {score}</div>
          <button onClick={handleRestart} disabled={isTimeUp}>Change</button>
          <div className="h-4"></div>
          {isTimeUp && <button onClick={handleReturn} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300">Return</button>}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
