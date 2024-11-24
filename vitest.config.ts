import {defineConfig} from 'vitest/config'

export default defineConfig({
    test: {
        name: 'unit',
        browser: {
            enabled: true,
            name: 'chromium',
            provider: 'playwright',
        },
    },
});