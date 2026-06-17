import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Project Management Workspace',
        short_name: 'Project OS',
        description: 'Project management PWA backed by Google Apps Script and Google Sheets.',
        theme_color: '#172033',
        background_color: '#f4f6f8',
        display: 'standalone',
        start_url: '.',
        icons: [
          { src: 'app-icon.svg', sizes: 'any', type: 'image/svg+xml' },
        ],
      },
    }),
  ],
})
