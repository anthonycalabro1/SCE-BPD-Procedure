import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig(({ mode }) => {
  const standalone = mode === 'standalone'

  return {
    plugins: [
      react(),
      ...(standalone ? [viteSingleFile()] : []),
    ],
    // GitHub Pages lives under /SCE-BPD-Procedure/; the standalone file must
    // use relative URLs so it can be opened from disk with no server.
    base: standalone ? './' : '/SCE-BPD-Procedure/',
    build: standalone
      ? {
          outDir: 'dist-standalone',
          assetsInlineLimit: 100000000,
          cssCodeSplit: false,
          modulePreload: false,
        }
      : undefined,
  }
})
