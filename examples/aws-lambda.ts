import { TestmeteestClient } from '../src';

export async function handler(event: { path: string }) {
  const client = new TestmeteestClient({
    apiKey: process.env.TESTMETEST_API_KEY!,
  });
  return { statusCode: 200, body: 'ok' };
}
