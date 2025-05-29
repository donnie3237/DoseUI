console.time("bun");
require('./build/cjs/plugin.js');
console.timeEnd("bun");

console.time("esbuild");
require('./dist/cjs/plugin.js');
console.timeEnd("esbuild");