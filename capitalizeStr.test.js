const capitalizeStr = require('./capitalizeStr');

test('test the capitalize function', () => {
  const sampleStr = 'hello';
  const result = 'Hello';
  expect(capitalizeStr(sampleStr)).toMatch(result);
});
