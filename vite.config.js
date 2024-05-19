import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: "/web-garage/",
  plugins: [react()],
  resolve: {
    alias: {
      'react': 'react/umd/react.development.js',
      'react-dom': 'react-dom/umd/react-dom.development.js',
    },
  },
});