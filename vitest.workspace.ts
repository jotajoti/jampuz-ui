import {defineWorkspace} from 'vitest/config'

export default defineWorkspace([
    {
        extends: 'vitest.config.ts',
        test: {
            name: "unit",
            environment: "node",
            globals: true,
            include: ['src/__tests__/**/*.unit.test.{ts,tsx}'],
            setupFiles: [
                "vitest-localstorage-mock",
                "src/__tests__/vitest.unit.setup.ts",
            ],
        },
    },
    {
        extends: 'vitest.config.ts',
        test: {
            name: "browser",
            include: ['src/__tests__/**/*.browser.test.{ts,tsx}'],
            browser: {
                enabled: true,
                name: 'chromium',
                provider: 'playwright',
                headless: true
            },
        },
    },
])
