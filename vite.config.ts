import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {lingui} from "@lingui/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: ["@lingui/babel-plugin-lingui-macro"],
            },
        }),
        lingui(),
    ],
    define: {
        APP_VERSION: JSON.stringify(process.env.npm_package_version),
    }
})
