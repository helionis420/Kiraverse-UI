export type ObjValues<T> = T[keyof T];

export type WithClassName<T> = T & {
  /**
        Extendable classnames of component
    */
  className?: string;
};

export type WithChildren<T> = T & {
  /**
        The content of the component.
    */
  children?: React.ReactNode;
};

export type FCProps<T> = WithClassName<WithChildren<T>>;

export type ObjectOfStringsType = {
  [key: string]: string;
};

export type RequestWithSignal<T> = T & {
  /**
        The signal to cancel the request.
     */
  signal?: AbortSignal;
};

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];
