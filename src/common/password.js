const uppercaseAlphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphanumeric = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = `\`~!@#$%^&*()_-+={}[]\\|:;"'<>,.?/`;

function generate(options, size = 9) {
  const characterList = getCharacterList(options);
  let result = '';

  if (!characterList.length) {
    return result;
  }

  for (let i = 0; i < size; i++) {
    const selectedList =
      characterList[Math.floor(Math.random() * characterList.length)];
    result += selectedList[Math.floor(Math.random() * selectedList.length)];
  }

  return result;
}

function getCharacterList(options) {
  let characterList = [];

  if (options.uppercase) {
    characterList.push(uppercaseAlphanumeric);
  }

  if (options.lowercase) {
    characterList.push(alphanumeric);
  }

  if (options.numbers) {
    characterList.push(numbers);
  }

  if (options.symbols) {
    characterList.push(symbols);
  }

  return characterList;
}

module.exports = {
  generate,
  uppercaseAlphanumeric,
  alphanumeric,
  numbers,
  symbols,
};
