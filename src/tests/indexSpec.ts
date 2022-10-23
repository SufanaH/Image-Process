import supertest from 'supertest';
import app from '../index';
import 'jasmine';

let Jasmine = require('jasmine');

const request = supertest(app);

describe('Test endpoint responses', () => {
  it("Check default endpoint '/'", async (): Promise<void> => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('Check resizing endpoint', async () => {
    const response = await request.get('/api/resize');
    expect(response.status).toBe(400);
  });
});

describe('img processing parms', () => {
  it('no parms', async () => {
    const response = await request.get('/api/resize').query({});
    expect(response.status).toBe(400);
    expect(response.text).toBe(' You should put the imgs details');
  });
});
it('If we just sending the file name', async () => {
  const response = await request
    .get('/api/resize')
    .query({ fileName: 'myLogo4' });
  expect(response.status).toBe(400);
  expect(response.text).toBe('Missed params');
});
