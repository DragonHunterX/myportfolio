import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: './index.html',
        ppt: 'public/ppdfs/presentaions.html',
        cloudppt:'public/ppdfs/cloudppt.html',
        // dotnetppt:'ppt/dotnetppt.html',
        iotppt:'public/ppdfs/iotppt.html',
        pythonppt:'public/ppdfs/pythonppt.html',
      },
    },
    // Include all PDF files in the build output
    assetsInclude: ['**/*.pdf']
  },
});
