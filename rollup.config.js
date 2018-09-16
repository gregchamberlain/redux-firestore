import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

const onwarn = (message) => {
  const suppressed = ['UNRESOLVED_IMPORT', 'THIS_IS_UNDEFINED'];

  if (!suppressed.find((code) => message.code === code)) {
    return console.warn(message.message);
  }
};

const exportName = pkg.name
  .split('-')
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join('');

export default [
  {
    input: 'lib/index.js',
    external: [],
    output: {
      file: pkg.browser,
      format: 'umd',
      name: exportName,
      sourcemap: true,
      globals: {},
    },
    plugins: [resolve(), commonjs(), sourcemaps()],
    onwarn,
  },
  {
    input: 'lib/index.js',
    output: {
      file: pkg.main,
      format: 'cjs',
    },
    plugins: [commonjs()],
    onwarn,
  },
];
