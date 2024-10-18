import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import deno from '@deno/vite-plugin'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), react(), legacy()],
})
