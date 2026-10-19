# npm-publish-testmetest Node.js SDK

Official Node.js SDK for the testmetest API.

## Installation

```bash
npm install npm-publish-testmetest
```

## Quick Start

```typescript
import { TestmeteestClient } from 'npm-publish-testmetest';

const client = new TestmeteestClient({ apiKey: 'your-api-key' });
const result = await client.query({ endpoint: '/data' });
```
