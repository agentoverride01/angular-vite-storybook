import analog from '@analogjs/platform';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    publicDir: 'src/assets',
    plugins: [
      analog({ 
        ssr: false, 
        static: true
      })
    ]
  };
});