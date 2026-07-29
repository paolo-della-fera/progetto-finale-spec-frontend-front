# 🍷 Vinoteca — Milestone del Progetto

**Tematica**: catalogo di vini italiani (Rosso, Bianco, Rosato, Spumante)
**Obiettivo**: SPA di sola consultazione (no login, no CRUD) — sfogliare, cercare, filtrare, confrontare, salvare preferiti

---

## Milestone 1 — Setup del progetto

- [ ] Crea progetto con `npm create vite@latest .` (React, JavaScript)
- [ ] Installa `react-router-dom`
- [ ] Struttura cartelle: `components/`, `pages/`, `context/`, `hooks/`
- [ ] Configura le route base con `react-router-dom` (anche solo placeholder vuoti per ora):
  - `/` — lista vini
  - `/vino/:id` — dettaglio
  - `/confronto` — comparatore
  - `/preferiti` — preferiti
- [ ] Crea `GlobalContext.jsx` con `createContext` + `Provider`
- [ ] Crea `useWines.js` (custom hook) con:
  - stato `wines` (lista vini dal server)
  - funzione `fetchWines()` che chiama `GET /wines`
- [ ] Verifica che l'app si avvii e che il fetch della lista funzioni (anche solo `console.log`)

**Riferimento**: stessa struttura Context + custom hook usata nel Task Manager

---

## Milestone 2 — Lista vini

- [ ] Componente `WineList.jsx` — mostra `title` + `category` per ogni vino (da `GET /wines`)
- [ ] Componente `WineCard.jsx` (riutilizzabile, riceve `wine` come prop) — mostra singola card
- [ ] **Ricerca**: input di testo controllato → filtra per `title` (query string `?search=...` o filtro lato client con `useMemo`)
- [ ] **Filtro categoria**: select/bottoni con le 4 categorie → `?category=...`
- [ ] **Ordinamento**: A-Z / Z-A per `title` o `category`, con `useMemo` (stesso pattern del Task Manager)
- [ ] Ogni card è cliccabile (`Link`) verso `/vino/:id`

**Riferimento**: stesso pattern di `TaskList.jsx` (ricerca + ordinamento + `useMemo`)

---

## Milestone 3 — Pagina di dettaglio

- [ ] Componente `WineDetail.jsx`, route `/vino/:id`
- [ ] `useParams()` per leggere l'`id` dall'URL
- [ ] Fetch di `GET /wines/:id` (tutte le proprietà: regione, annata, vitigno, gradazione, prezzo, produttore, descrizione, abbinamento)
- [ ] Visualizzazione estesa e leggibile di tutte le proprietà
- [ ] Gestione caso "vino non trovato" (id non valido)

**Riferimento**: stesso pattern di `TaskDetail.jsx` (`useParams` + fetch singolo record)

---

## Milestone 4 — Sistema preferiti

- [ ] Stato globale `preferiti` (array di id, o array di oggetti vino) nel `GlobalContext`
- [ ] Funzione `toggleFavorite(id)` — aggiunge/rimuove dallo stato
- [ ] Icona ❤️ su `WineCard` (lista) e su `WineDetail` — toggle al click
- [ ] L'icona riflette visivamente se il vino è già nei preferiti (cuore pieno/vuoto)
- [ ] Pagina `Favorites.jsx`, route `/preferiti` — mostra solo i vini preferiti
- [ ] Icona/contatore preferiti sempre visibile in una navbar fissa

**Facoltativo (dopo i minimi)**: persistenza in `localStorage`

---

## Milestone 5 — Comparatore

- [ ] Stato globale `confronto` (max 2 id) nel `GlobalContext`
- [ ] Bottone "➕ Confronta" su `WineCard` e `WineDetail`
  - Se già 2 vini selezionati, gestisci il caso (disabilita bottone, sostituisci il primo, o avvisa l'utente — a tua scelta)
- [ ] Pagina `Compare.jsx`, route `/confronto`
- [ ] Fetch dei 2 vini selezionati (`GET /wines/:id` per ciascuno)
- [ ] Visualizzazione affiancata (tabella o grid a 2 colonne) con tutte le proprietà a confronto riga per riga
- [ ] Gestione caso "nessun vino selezionato" o "solo 1 selezionato"

**Riferimento**: stesso concetto di stato condiviso dei preferiti, ma limitato a 2 elementi

---

## Note generali

- Nessun CRUD lato frontend: i dati si popolano solo nel file `database/wine.json` (già fatto)
- Riusa il più possibile pattern già noti (Context, custom hook, `useMemo`, `Link`, `useParams`) per risparmiare tempo
- Naviga tra le milestone in ordine: ognuna dipende dalla precedente (es. Milestone 4 e 5 hanno bisogno della lista/dettaglio funzionanti)