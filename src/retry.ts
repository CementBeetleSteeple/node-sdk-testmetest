export function withRetry(fn, maxRetries = 3, delay = 1000) {
  return async (...args) => {
    let lastErr;
    for (let i = 0; i < maxRetries; i++) {
      try { return await fn(...args); } catch (e) {
        lastErr = e;
        await new Promise(r => setTimeout(r, delay * (i + 1)));
      }
    }
    throw lastErr;
  };
}
