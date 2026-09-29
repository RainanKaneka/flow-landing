import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

function downloadHeadersPlugin(): Plugin {
  return {
    name: 'download-headers',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/downloads/')) {
          const rawName = path.basename(req.url.split('?')[0]);
          res.setHeader('Content-Disposition', `attachment; filename="${rawName}"`);
          if (rawName.endsWith('.exe')) {
            res.setHeader('Content-Type', 'application/x-msdownload');
          } else if (rawName.endsWith('.msi')) {
            res.setHeader('Content-Type', 'application/x-msi');
          }
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    downloadHeadersPlugin()
  ],
})
