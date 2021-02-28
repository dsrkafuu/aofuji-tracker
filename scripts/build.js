const path = require('path');
const fs = require('fs');
const esbuild = require('esbuild');
const babel = require('@babel/core');
const terser = require('terser').minify;

/* esm file */
esbuild.buildSync({
  entryPoints: ['src/index.esm.js'],
  outfile: "lib/index.esm.js",
  format: 'esm',
  target: 'es6',
  bundle: true,
  minify: true,
  sourcemap: true,
});

/* iife file */

// build
esbuild.buildSync({
  entryPoints: ['src/index.js'],
  outfile: 'lib/vector.min.js',
  format: 'iife',
  target: 'es2020',
  bundle: true,
});
const output = path.resolve(__dirname, '../lib/vector.min.js');
let content = fs.readFileSync(output, { encoding: 'utf-8' });

// transform
content = babel.transformSync(content).code;

// minify
terser(content).then((res) => {
  fs.writeFileSync(output, res.code);
});
