import { formatDate } from '../lib/formatDate';

describe('formatDate', () => {
  it('returns date object for 2021-05-10', () => {
    expect(formatDate('2021-05-10')).toMatchObject({
      year: 2021,
      month: 5,
      day: 10,
    });
  });

  it('returns date object for 2021-13-10', () => {
    expect(formatDate('2021-13-10')).toBe(null);
  });

  it('returns date object for 2021-00-10', () => {
    expect(formatDate('2021-00-10')).toBe(null);
  });

  it('returns date object for 2021-10-32', () => {
    expect(formatDate('2021-10-32')).toBe(null);
  });

  it('returns date object for 2021-10-00', () => {
    expect(formatDate('2021-10-00')).toBe(null);
  });

  it('returns date object for 1890-10-05', () => {
    expect(formatDate('1890-10-05')).toBe(null);
  });

  it('returns date object for 2110-10-05', () => {
    expect(formatDate('2110-10-05')).toBe(null);
  });
});
