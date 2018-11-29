import { SitemapModule } from './sitemap.module';

describe('SitemapModule', () => {
  let sitemapModule: SitemapModule;

  beforeEach(() => {
    sitemapModule = new SitemapModule();
  });

  it('should create an instance', () => {
    expect(sitemapModule).toBeTruthy();
  });
});
