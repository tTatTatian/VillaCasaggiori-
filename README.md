# Villa Casaggiori — sito web

Restyling responsive in HTML, CSS e JavaScript vanilla, con Vite per l'avvio in StackBlitz.

## Branch di revisione
Questa versione di revisione è nel branch `feature/bb-gallery-page`. Non è stata unita a `main`.

## File
- `index.html` — home page.
- `foto.html` — seconda pagina con la galleria fotografica completa delle immagini originali individuate.
- `src/styles.css` — stile responsive, layout e griglia immagini.
- `src/main.js` — menu mobile, lightbox e anno automatico.
- `package.json` — script Vite.

## Modifiche in questo branch
- Le immagini di camere, vista panoramica e servizi sono state spostate nella sezione Bed & Breakfast.
- La home mantiene la struttura iniziale e la galleria generale con immagini della villa, agriturismo e spazi esterni.
- Il pulsante "Apri la galleria completa" porta a `foto.html`, una pagina separata con 12 immagini distinte reperite nelle pagine ufficiali consultabili.
- Le fotografie sono caricate dal CDN Wix del sito ufficiale, non sono ancora copiate fisicamente nel repository.

## Avvio
`npm run dev` (Vite).

## Prima del merge
Controllare visualizzazione mobile/desktop, caricamento di ogni immagine e correttezza dei contenuti e dei recapiti. La pagina ufficiale Foto espone una galleria a 10 slide; l'estrazione testuale/web non ha reso accessibili tutte le slide, quindi le 12 immagini qui raccolte sono quelle individuate nelle pagine ufficiali accessibili, non una certificazione che ogni singola foto della galleria sia stata recuperata.
