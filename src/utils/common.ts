export const noop = () => {
  return;
};

export const noopReturnNull = () => {
  return null;
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
};

const toBase64 = (str: string) => {
  return typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
};

export const createSvgShimmer = (width: number, height: number): string => {
  const shimmer = `
        <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <linearGradient id="g">
                    <stop stop-color="#333" offset="20%" />
                    <stop stop-color="#222" offset="50%" />
                    <stop stop-color="#333" offset="70%" />
                </linearGradient>
            </defs>
            <rect width="${width}" height="${height}" fill="#333" />
            <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
            <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite" />
        </svg>
    `;

  return `data:image/svg+xml;base64,${toBase64(shimmer)}`;
};

export const getAnchorHref = (href: string, url = '') => {
  return `${url}/#${href}`;
};

export const scrollTo = (
  element: HTMLElement,
  to: number,
  duration: number,
  callback?: () => void,
) => {
  const start = element.scrollTop;
  const change = to - start;
  const startDate = Date.now();

  //NOTE: t = current time
  //NOTE: b = start value
  //NOTE: c = change in value
  //NOTE: d = duration

  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const animateScroll = () => {
    const currentDate = Date.now();
    const currentTime = currentDate - startDate;

    const scrollTop = easeInOutQuad(currentTime, start, change, duration).toFixed();

    element.scrollTop = parseInt(scrollTop);
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      element.scrollTop = to;

      if (typeof callback === 'function') {
        callback();
      }
    }
  };
  animateScroll();
};
