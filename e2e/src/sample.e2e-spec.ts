
import { browser } from 'protractor';

describe('Sample E2E Test', () => {
  it('should have a title', async () => {
    await browser.get('/');
    const title = await browser.getTitle();
    expect(title).toEqual('Expected Title');
  });
});