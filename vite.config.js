import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import path from 'node:path';
import { createRequire } from 'node:module';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const require = createRequire(import.meta.url);
const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const cMapsDir = normalizePath(path.join(pdfjsDistPath, 'cmaps'));
const standardFontsDir = normalizePath(
  path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'standard_fonts')
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    viteStaticCopy({
           targets: [
             {
                src: cMapsDir,
                dest: '',
             },
             {
                src: standardFontsDir,
                dest: '',
              },
           ],
         })
  ],
  base: '/Portfolio/',
})

// in terminal => npm install tailwindcss @tailwindcss/vite
// https://github.com/wojtekmaj/react-pdf?tab=readme-ov-file#support-for-non-latin-characters

// deploy portfolio
// https://dev.to/shrinivasv73/how-to-deploy-reactjs-apps-built-using-vite-on-github-pages-38bi
// https://youtu.be/hn1IkJk24ow?si=OQ1_ldSpTHGo1vY5

// Error: spawn git ENOENT
// https://stackoverflow.com/questions/42545885/vs-code-error-spawn-git-enoent
// so i tried this first => (i tried to use github desktop because i didn't feel like "reinstalling" git)
// https://stackoverflow.com/questions/34565238/where-does-github-desktop-install-command-line-version-of-git
// didn't work (maybe i didn't give the right path)
// https://github.com/desktop/desktop/issues/3801
// so i installed git for windows then added git to PATH




