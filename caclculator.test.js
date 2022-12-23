const { add, subtract, divide, multiply } = require('./calculator');

// add function
describe('Testing add function', () => {
  it('expected 1 + 2 equal 3', () => {
    const a = 1;
    const b = 2;
    const result = 3;
    expect(add(a, b)).toEqual(result);
  });
  it('expected 15 + 33 equal 48', () => {
    const a = 15;
    const b = 33;
    const result = 48;
    expect(add(a, b)).toEqual(result);
  });
  it('expected 219 + 536 equal 755', () => {
    const a = 219;
    const b = 536;
    const result = 755;
    expect(add(a, b)).toEqual(result);
  });
});

// subtract

describe('Testing subtract function', () => {
  it('expected 3 - 1 equal 2', () => {
    const a = 3;
    const b = 1;
    const result = 2;
    expect(subtract(a, b)).toEqual(result);
  });
  it('expected 315 - 189 equal 126', () => {
    const a = 315;
    const b = 189;
    const result = 126;
    expect(subtract(a, b)).toEqual(result);
  });
  it('expected 53 - 19 equal 34', () => {
    const a = 53;
    const b = 19;
    const result = 34;
    expect(subtract(a, b)).toEqual(result);
  });
});

// divide
describe('Testing divide function', () => {
  it('expected 9 : 3 equal 3', () => {
    const a = 9;
    const b = 3;
    const result = 3;
    expect(divide(a, b)).toEqual(result);
  });
  it('expected 96 : 12 equal 8', () => {
    const a = 96;
    const b = 12;
    const result = 8;
    expect(divide(a, b)).toEqual(result);
  });
  it('expected 812 : 29 equal 28', () => {
    const a = 812;
    const b = 29;
    const result = 28;
    expect(divide(a, b)).toEqual(result);
  });
});

//multiply

describe('Testing multiply function', () => {
  it('expected 3 * 4 equal 12', () => {
    const a = 3;
    const b = 4;
    const result = 12;
    expect(multiply(a, b)).toEqual(result);
  });
  it('expected 15 * 28 equal 420', () => {
    const a = 15;
    const b = 28;
    const result = 420;
    expect(multiply(a, b)).toEqual(result);
  });
  it('expected 117 * 543 equal 3531', () => {
    const a = 117;
    const b = 543;
    const result = 63531;
    expect(multiply(a, b)).toEqual(result);
  });
});
