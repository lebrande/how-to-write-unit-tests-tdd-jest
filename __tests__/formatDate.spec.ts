import { formatDate } from '../lib/formatDate';

describe('formatDate', () => {
  it('returns date object for 2021-05-10', () => {
    expect(formatDate('2021-05-10')).toMatchObject({
      year: 2021,
      month: 5,
      day: 10,
    });
  });

  it('returns null for incorrect month above range (2021-13-10)', () => {
    expect(formatDate('2021-13-10')).toBe(null);
  });

  it('returns null for incorrect month below range (2021-00-10)', () => {
    expect(formatDate('2021-00-10')).toBe(null);
  });

  it('returns null for incorrect day above range (2021-10-32)', () => {
    expect(formatDate('2021-10-32')).toBe(null);
  });

  it('returns null for incorrect day below range (2021-10-00)', () => {
    expect(formatDate('2021-10-00')).toBe(null);
  });

  it('returns null for incorrect year below range (1899-12-31)', () => {
    expect(formatDate('1899-12-31')).toBe(null);
  });

  it('returns null for incorrect year above range (2101-01-01)', () => {
    expect(formatDate('2101-01-01')).toBe(null);
  });

  it('returns null for wrong date (2000-02-31)', () => {
    expect(formatDate('2000-02-31')).toBe(null);
  });

  it('returns null for wrong date (2000-04-31)', () => {
    expect(formatDate('2000-04-31')).toBe(null);
  });

  it('returns null for wrong date (2000-02-29)', () => {
    expect(formatDate('2001-02-29')).toBe(null);
  });
});
