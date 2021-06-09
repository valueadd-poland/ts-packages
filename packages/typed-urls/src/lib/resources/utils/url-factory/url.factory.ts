import { InterpolatableUrl } from '../../models/interpolatable-url.model';
import { Url } from '../../models/url.model';

const isInterpolatable = new RegExp('[/:]{2,}');
/* eslint-disable-next-line */
export type InferReturnType<T> = T extends `${infer _Start}/:${infer Param}`
  ? InterpolatableUrl<T>
  : Url;

export function urlFactory<T extends string>(url: T): InferReturnType<T> {
  return isInterpolatable.test(url)
    ? (new InterpolatableUrl<T>(url) as InferReturnType<T>)
    : (new Url(url) as InferReturnType<T>);
}
