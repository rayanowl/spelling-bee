
import React, { useState, useEffect } from 'react';
import selectLetters from '../utils/selectLetters';
import validateWord from '../utils/validateWord';
import 'tailwindcss/tailwind.css'

const GamePage = () => {
  const [letters, setLetters] = useState([]);
  const [inputWord, setInputWord] = useState('');
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setLetters(selectLetters('en'));
  }, []);

  const handleChange = (e) => {
    setInputWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputWord.trim() === '') return;

    if (validateWord(inputWord, 'en')) {
      setScore((prevScore) => prevScore + inputWord.length*100);
    }

    setInputWord('');
  };

};

export default GamePage;
