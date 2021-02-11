export type ExtractRouteParams<T> = string extends T
  ? Record<string, string>
  : /* eslint-disable-next-line */
  T extends `${infer _Start}:${infer Param}/${infer Rest}`
  ? { [k in Param | keyof ExtractRouteParams<Rest>]: string }
  : /* eslint-disable-next-line */
  T extends `${infer _Start}:${infer Param}`
  ? { [k in Param]: string }
  : Record<string, string>;
