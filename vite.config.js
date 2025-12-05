
import { defineConfig } from "vite";

export default defineConfig({
    base: "/",
    build: {
        assetsDir: 'assets',
        outDir: "dist",
        manifest: true,
        manifestFileName: 'manifest-vite.json',
        minify: "terser",
        sourcemap: false,
        terserOptions: {
            compress: {
                //drop_console: true,
                //drop_debugger: true,
            },
            format: {
                comments: false,
            },
            mangle: true,
        },
        emptyOutDir: true,
    },
});
