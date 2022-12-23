const { stringLength, reverseStr } = require('./strings');

// str length
describe('Test for the string length function', () => {
  it('test if the function is showing the length correctly', () => {
    const sampleStr = 'Sample';
    const result = 6;
    expect(stringLength(sampleStr)).toEqual(result);
  });
  it('test if the string length is more than 0', () => {
    const sampleStr = 'Sample';
    const length = stringLength(sampleStr);
    expect(length > 0).toBe(true);
  });
  it('test if the string length is less than 10', () => {
    const sampleStr = 'Sample';
    const length = stringLength(sampleStr);
    expect(length < 10).toBe(true);
  });
});

//Reversed str
describe('Test for the reversed string function', () => {
  const sampleStr = 'SampleText';
  const result = 'txeTelpmaS';
  expect(reverseStr(sampleStr)).toMatch(result);
});
