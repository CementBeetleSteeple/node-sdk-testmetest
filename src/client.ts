import { ClientConfig, QueryOptions, ApiResponse } from './types';

export class TestmeteestClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(config: ClientConfig) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl ?? 'https://api.testmetest.example.com/v1';
  }

  async query<T>(options: QueryOptions): Promise<ApiResponse<T>> {
    throw new Error('Not implemented in SDK stub');
  }
}
