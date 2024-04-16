import { defineConfig, ViteDevServer } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    {
      name: 'watcher',
      configureServer({ watcher, hot }: ViteDevServer) {
        watcher.on('change', (path: string) => {
          hot.send({ type: 'full-reload', path })
        })
      }
    },
    angular({ jit: true, tsconfig: './.storybook/tsconfig.json' }),
    {
      name: '@storybook/angular',
      transform(code) {
        if (code.includes('"@storybook/angular"')) {
          return code.replace(/\"@storybook\/angular\"/g, '\"@storybook/angular/dist/client\"');
        }
        return;
      }
    }
  ],
  define: {
    'import.meta.vitest': mode !== 'production',
    'process.env.FORCE_SIMILAR_INSTEAD_OF_MAP': 'false'
  },
}));
