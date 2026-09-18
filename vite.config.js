import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                meetengreets: resolve(__dirname, 'meet-en-greets.html'),
                bedrijven: resolve(__dirname, 'bedrijven.html'),
                particulieren: resolve(__dirname, 'particulieren.html'),
                overons: resolve(__dirname, 'over-ons.html'),
                shows: resolve(__dirname, 'shows.html'),
                extras: resolve(__dirname, 'extras.html'),
                mogelijkheden: resolve(__dirname, 'mogelijkheden.html'),
                voorwaarden: resolve(__dirname, 'voorwaarden.html'),
                privacy: resolve(__dirname, 'privacy.html'),
                proefpiet: resolve(__dirname, 'proefpiet.html'),
                saxophonepiet: resolve(__dirname, 'saxophone-piet.html'),
                djpiet: resolve(__dirname, 'dj-piet.html'),
                liedjespiet: resolve(__dirname, 'liedjes-piet.html'),
                schminkpiet: resolve(__dirname, 'schmink-piet.html'),
                knutselpiet: resolve(__dirname, 'knutsel-piet.html')
            }
        }
    }
});
