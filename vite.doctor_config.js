import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { resolve } from 'path';
import fs from 'fs/promises';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: path.resolve("./app/doctor/index.jsx"),
        }
    },
    publicDir: false,
    build: {
        outDir: './public/assets/reactJs/doctor',
        manifest: false,
        sourcemap: true,
        rollupOptions: {
            input: resolve(__dirname, './app/doctor/index.jsx'),
            output: {
                entryFileNames: 'react-doctor-dashboard.js',
            },
        },
    },
    esbuild: {
        loader: 'jsx',
        include: /app\/.*\.jsx?$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                {
                    name: 'load-js-files-as-jsx',
                    setup(build) {
                        build.onLoad(
                            { filter: /app\/.*\.js$/ },
                            async (args) => ({
                                loader: 'jsx',
                                contents: await fs.readFile(args.path, 'utf8'),
                            })
                        );
                    },
                },
            ],
        },
    },
    define: {
        // _global: ({}),
        // process: {
        //     env: {},
        // }
    },
})