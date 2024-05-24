import { describe, it, expect } from 'vitest';
import { analyzeLink } from './analyzeLink';

describe('analyzeLink()', () => {
  it('should return isExternal true', () => {
    const { isExternal } = analyzeLink('https://www.test.com/');
    expect(isExternal).toBe(true);
  });

  it('should return isAnchor true', () => {
    const { isAnchor } = analyzeLink('/test/#test');
    expect(isAnchor).toBe(true);
  });

  it('should return isLayoutAnchor true', () => {
    const { isLayoutAnchor } = analyzeLink('#test');
    expect(isLayoutAnchor).toBe(true);
  });

  it('should return isInternal true', () => {
    const { isInternal } = analyzeLink('/test');
    expect(isInternal).toBe(true);
  });

  it('should return everything false', () => {
    const { isExternal, isAnchor, isLayoutAnchor, isInternal } = analyzeLink('');

    expect(isExternal).toBe(false);
    expect(isAnchor).toBe(false);
    expect(isLayoutAnchor).toBe(false);
    expect(isInternal).toBe(false);
  });
});
