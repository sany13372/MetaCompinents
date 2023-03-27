import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@img': path.resolve(__dirname, './src/assets/img'),

      '@features': path.resolve(__dirname, './src/features'),
      '@mmd': path.resolve(__dirname, './src/features/metacomponents/mmd'),
      '@vault': path.resolve(__dirname, './src/features/metacomponents/vault'),
      '@orchestrator': path.resolve(__dirname, './src/features/metacomponents/orchestrator'),
      '@staging': path.resolve(__dirname, './src/features/metacomponents/staging'),
      '@control': path.resolve(__dirname, './src/features/metacomponents/control'),
      '@accessDenied': path.resolve(__dirname, './src/features/accessDenied'),
      '@authorization': path.resolve(__dirname, './src/features/authorization'),
      '@notFound': path.resolve(__dirname, './src/features/notFound'),

      '@components': path.resolve(__dirname, './src/components'),
      '@context': path.resolve(__dirname, './src/context'),
      '@data': path.resolve(__dirname, './src/data'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@services': path.resolve(__dirname, './src/services'),
      '@types': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
    }
  }
})