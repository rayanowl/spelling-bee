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
      setScore((prevScore) => prevScore + inputWord.length);
      setTime((prevTime) => prevTime + 15); // Add 15 seconds
      setNewWord();
    }
  
    setInputWord('');
  };

  const handleReturn = () => {
    router.push('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg w-full px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Spelling Game</h1>
          <div className="text-xl mb-4">Letters: <span className="font-bold">{letters.join(' ')}</span></div>
          <form onSubmit={handleSubmit} className="mb-4">
            <input type="text" value={inputWord} onChange={handleChange} placeholder="Enter the word" className="w-full px-4 py-2 mb-2 border border-gray-400 rounded" disabled={isTimeUp} />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded" disabled={isTimeUp}>Submit</button>
          </form>
          <div className="text-xl mb-4">Time: {time > 0 ? `${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}` : 'Times up!'}</div>
          <div className="text-xl mb-4">Score: {score}</div>
          {isTimeUp && <button onClick={handleReturn} className="px-4 py-2 bg-red-500 text-white rounded">Return</button>}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
