import { interpolate } from '../utils/interpolate/interpolate';
import { ExtractRouteParams } from '../types/extract-route-params.type';

export class InterpolatableUrl<T extends string> {
  constructor(private _url: string) {}

  public url(params: ExtractRouteParams<T>): string {
    return interpolate(this._url, params);
  }
}
