import {defineConfig} from 'vitest/config'
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: ["macros"],
            },
        }),
    ],
    test: {
        name: 'unit',
        environment: "node",
    },
});