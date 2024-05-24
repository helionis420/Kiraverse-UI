import { describe, it, expect } from 'vitest';
import { createUserInitials } from './createUserInitials';

describe('createInitials', () => {
  it('should return empty string for falsy values', () => {
    expect(createUserInitials()).toBe('');
    expect(createUserInitials(null)).toBe('');
    expect(createUserInitials('')).toBe('');
  });

  it('should return empty string for string full of spaces', () => {
    expect(createUserInitials('   ')).toBe('');
  });

  it('should return initials for single word', () => {
    expect(createUserInitials('John')).toBe('J');
  });

  it('should return initials by passing string with trim spaces', () => {
    expect(createUserInitials('  John Doe  ')).toBe('JD');
  });

  it('should return initials by passing string with multiple spaces between words', () => {
    expect(createUserInitials('John   Doe')).toBe('JD');
  });

  it('should return initials', () => {
    expect(createUserInitials('John Doe')).toBe('JD');
  });
});
