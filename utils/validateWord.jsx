import englishDictionary from '../data/englishDictionary.json';
import turkishDictionary from '../data/turkishDictionary.json';

const validateWord = (word, language) => {
  const dictionary = language === 'en' ? englishDictionary : turkishDictionary;
  return dictionary.includes(word.toLowerCase());
};

export default validateWord;
