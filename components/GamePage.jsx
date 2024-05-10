
/*import selectLetters from '../utils/selectLetters';
import validateWord from '../utils/validateWord';
import 'tailwindcss/tailwind.css';

const GamePage = () => {
  const [letters, setLetters] = useState([]);
  const [inputWord, setInputWord] = useState('');
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [timeString, setTimeString] = useState('01:00');

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

  useEffect(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    setTimeString(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
  }, [time]);

  const handleChange = (e) => {
    setInputWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    if (validateWord(input)) {
      setScore(score + input.length);
      setMessage('Correct!');
      setTime((prevTime) => Math.min(prevTime + 15, MAX_MINUTES * 60));
      generateLetters();
      setInput('');
    } else {
      setMessage('Incorrect! Try again.');
    }
  };

};

export default GamePage;*/
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
      setScore((prevScore) => prevScore + inputWord.length);
    }

    setInputWord('');
  };

};

export default GamePage;
