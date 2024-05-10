import englishDictionary from '../data/englishDictionary.json';
import turkishDictionary from '../data/turkishDictionary.json';

const shuffleLetters = (word) => {
  const shuffledWord = word.split('').sort(() => Math.random() - 0.5);
  return shuffledWord;
};

const selectLetters = (language) => {
  const dictionary = language === 'en' ? englishDictionary : turkishDictionary;
  const randomIndex = Math.floor(Math.random() * dictionary.length);
  const selectedWord = dictionary[randomIndex];
  const shuffledLetters = shuffleLetters(selectedWord);
  return shuffledLetters;
};

export default selectLetters;