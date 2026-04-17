import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function safePublicCopyPlugin() {
  return {
    name: 'safe-public-copy',
    apply: 'build' as const,
    closeBundle() {
      const srcDir = path.resolve(__dirname, 'public');
      const destDir = path.resolve(__dirname, 'dist');
      function copyDirSafe(src: string, dest: string) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        for (const entry of fs.readdirSync(src)) {
          const srcPath = path.join(src, entry);
          const destPath = path.join(dest, entry);
          try {
            const stat = fs.statSync(srcPath);
            if (stat.isDirectory()) {
              copyDirSafe(srcPath, destPath);
            } else {
              fs.copyFileSync(srcPath, destPath);
            }
          } catch {
            // skip locked or unreadable files
          }
        }
      }
      copyDirSafe(srcDir, destDir);
    },
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 5000,
        host: '0.0.0.0',
        allowedHosts: true,
      },
      preview: {
        port: 5000,
        host: '0.0.0.0',
      },
      plugins: [react(), safePublicCopyPlugin()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
          '@assets': path.resolve(__dirname, 'attached_assets'),
        }
      },
      build: {
        outDir: 'dist',
        copyPublicDir: false,
      },
      appType: 'spa',
    };
});
