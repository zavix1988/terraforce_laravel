import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

const env = loadEnv(
    'all',
    process.cwd()
);


export default defineConfig({
    // server: {
    //     host: env.VITE_APP_HOST, // Ваш хост
    //     port: env.VITE_APP_PORT, // Ваш порт
    // },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
