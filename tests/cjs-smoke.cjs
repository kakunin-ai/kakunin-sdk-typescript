const { Kakunin } = require('../dist/index.js');

const client = new Kakunin({ apiKey: 'kak_test_commonjs' });
if (!client.isSandbox()) {
  throw new Error('CommonJS Kakunin export did not initialize correctly');
}
