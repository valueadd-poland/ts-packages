import { urlFactory } from './url.factory';
import { InterpolatableUrl } from '../../models/interpolatable-url.model';
import { Url } from '../../models/url.model';

describe('UrlFactory', () => {
  it('should return InterpolatableUrl', () => {
    const url = urlFactory('testUrl/:testId');

    expect(url instanceof InterpolatableUrl).toBeTruthy();
  });

  it('should return Url', () => {
    const url = urlFactory('testUrl');

    expect(url instanceof Url).toBeTruthy();
  });
});
