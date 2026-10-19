export interface ClientConfig {
  apiKey: string;
  baseUrl?: string;
  timeout?: number;
}

export interface QueryOptions {
  endpoint: string;
  params?: Record<string, string>;
}

export interface ApiResponse<T = unknown> {
  data: T;
  meta: { requestId: string; timestamp: number };
}
