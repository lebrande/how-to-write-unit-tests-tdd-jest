import { parseText } from '../lib/parseText';

describe('parseText', () => {
  it('#1', () => {
    expect(parseText('JavaScript', [[4, 9]])).toBe('<p>Java<span>Script</span></p>');
  });

  it('#2', () => {
    expect(parseText('JSDżem', [[2, 5]])).toBe('<p>JS<span>Dżem</span></p>');
  });

  it('#3', () => {
    expect(parseText('DżemJS', [[0, 3]])).toBe('<p><span>Dżem</span>JS</p>');
  });

  it('#4', () => {
    expect(parseText('DżemJS', [[2, 3]])).toBe('<p>Dż<span>em</span>JS</p>');
  });

  it('#5', () => {
    expect(parseText('Hello World', [[2, 3], [7, 9]])).toBe('<p>He<span>ll</span>o W<span>orl</span>d</p>');
  });

  it('#6', () => {
    expect(parseText(`Hello World, I'm happy!`, [[2, 3], [7, 9], [12, 14]])).toBe(`<p>He<span>ll</span>o W<span>orl</span>d,<span> I'</span>m happy!</p>`);
  });

  it('#7', () => {
    expect(parseText(`Hello World, I'm happy!`, [[2, 3], [7, 9], [12, 14], [17, 18]])).toBe(`<p>He<span>ll</span>o W<span>orl</span>d,<span> I'</span>m <span>ha</span>ppy!</p>`);
  });
});
