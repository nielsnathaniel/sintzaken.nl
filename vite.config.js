import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                winkelcentra: resolve(__dirname, 'winkelcentra.html'),
                bedrijven: resolve(__dirname, 'bedrijven.html'),
                particulieren: resolve(__dirname, 'particulieren.html'),
                overons: resolve(__dirname, 'over-ons.html'),
                shows: resolve(__dirname, 'shows.html'),
                extras: resolve(__dirname, 'extras.html'),
                mogelijkheden: resolve(__dirname, 'mogelijkheden.html')
            }
        }
    }
});
