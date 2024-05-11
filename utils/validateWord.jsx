import englishWords from '../data/englishDictionary.json';
import turkishWords from '../data/turkishDictionary.json';

const validateWord = (word, language) => {
  const dictionary = language === 'en' ? englishWords : turkishWords;
  return dictionary.includes(word.toLowerCase());
};

export default validateWord;
