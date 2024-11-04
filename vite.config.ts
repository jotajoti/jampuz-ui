import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr({
        include: "**/*.svg"
    })],
    define: {
        APP_VERSION: JSON.stringify(process.env.npm_package_version),
    }
})
