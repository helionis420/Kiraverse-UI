type CutStringConfig = {
  startLength: number;
  endLength: number;
};

const DEFAULT_CUT_STRING_CONFIG: CutStringConfig = {
  startLength: 5,
  endLength: 4,
};

export const cutString = (value: string, config = DEFAULT_CUT_STRING_CONFIG) => {
  const { startLength, endLength } = config;
  const isValueMoreThanCutLimits = value.length > startLength + endLength;

  if (!isValueMoreThanCutLimits) {
    return value;
  }

  return `${value.slice(0, startLength)}...${value.slice(-endLength)}`;
};
