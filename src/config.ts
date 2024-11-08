declare global {
    interface Window {
        _env: ImportMetaEnv
    }
}

const config = Object.assign(import.meta.env, window._env)

export const GRAPHQL_URL = config.VITE_GRAPHQL_URL
export const GRAPHQL_WS_URL = config.VITE_GRAPHQL_WS_URL
