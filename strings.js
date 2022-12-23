function stringLength(str) {
  if (str.length < 1 || str.length > 10) {
    throw new Error('String has less than one character');
  }
  return str.length;
}

function reverseStr(str) {
  return str.split('').reverse().join('');
}

module.exports = { stringLength, reverseStr };
