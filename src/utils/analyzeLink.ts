import { URL_REGEX } from '@/constants';

export type StringAnalyzer = {
  /**
        Is the link to some website except current one
     */
  isExternal: boolean;
  /**
        Is the link to the block of the current page
     */
  isAnchor: boolean;
  /**
        Is the link to the layout element with anchor
        to redirect to it whatever page the user is on
     */
  isLayoutAnchor: boolean;
  /**
        Is the link to another page of current website
     */
  isInternal: boolean;
};

export const analyzeLink = (link: string): StringAnalyzer => {
  const newLink = link.trim().replace(/\s/g, '');

  const isExternal = URL_REGEX.test(newLink);

  const isAnchor = newLink.includes('/#');

  const isLayoutAnchor = newLink.charAt(0) === '#';

  const isInternal = newLink.charAt(0) === '/';

  return {
    isExternal,
    isAnchor,
    isLayoutAnchor,
    isInternal,
  };
};
