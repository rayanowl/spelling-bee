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
  let shuffledLetters = shuffleLetters(selectedWord);

  // Define the alphabet based on the language
  const alphabet = language === 'en' ? 'abcdefghijklmnopqrstuvwxyz' : 'abcçdefgğhıijklmnoöprsştuüvyz';

  // Add random letters from the alphabet until there are 7 letters
  while (shuffledLetters.length < 7) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    shuffledLetters.push(alphabet[randomIndex]);
  }

  return shuffledLetters.slice(0, 7); // Take the first 7 letters
};

export default selectLetters;
