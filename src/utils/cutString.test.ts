import { describe, it, expect } from 'vitest';
import { cutString } from './cutString';

describe('cutString()', () => {
  it('should return empty string', () => {
    expect(cutString('')).toBe('');
  });

  it('should return string without changes (length less than 9) with default config', () => {
    expect(cutString('12345678')).toBe('12345678');
  });

  it('should return string without changes (length less than new config summ) with custom config', () => {
    expect(
      cutString('12345678910', {
        startLength: 6,
        endLength: 5,
      }),
    ).toBe('12345678910');
  });

  it('should return string with cutted middle part (length more than 9) with default config', () => {
    expect(cutString('12345678910')).toBe('12345...8910');
  });

  it('should return string with cutted middle part (length more than new config summ) with custom config', () => {
    expect(
      cutString('12345678910', {
        startLength: 3,
        endLength: 3,
      }),
    ).toBe('123...910');
  });
});
