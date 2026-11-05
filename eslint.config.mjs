import nextVitals from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextVitals,
  {
    ignores: ['.next/**', 'node_modules/**', 'coverage/**'],
  },
  {
    // Vendored baby-ui source: its dialog keeps a ref callback in context, which this rule misreads.
    files: ['components/ui/**'],
    rules: { 'react-hooks/refs': 'off' },
  },
];

export default config;
