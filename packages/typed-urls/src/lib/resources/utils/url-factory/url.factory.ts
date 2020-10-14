import { Url } from '../../models/url.model';
import { InterpolatableUrl } from '../../models/interpolatable-url.model';

export function urlFactory(url: string, interpolatable?: false): Url;
export function urlFactory<T extends string>(
  url: string,
  interpolatable: true
): InterpolatableUrl<T>;
export function urlFactory<T extends string>(
  url: string,
  interpolatable = false
): InterpolatableUrl<T> | Url {
  return interpolatable ? new InterpolatableUrl<T>(url) : new Url(url);
}
