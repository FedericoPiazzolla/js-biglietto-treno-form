### Esercizio
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

---

### Soluzione
**Raccolta dei dati**
1. Chiedere all'utente di inserire nome e cognome;
2. Chiedere all'utente di inserire il numero di km che deve effettuare;
3. Chiedere all'utente la propria fascia d'età;

**Logica del programma**
1. calcolo il prezzo del biglietto, sapendo che costa 0.21 euro al km;
2. se l'utente è minorenne applicherò uno sconto del 20% sul prezzo del biglietto calcolato precedentemente,
3. se l'utente è un over 65 applicherò uno sconto del 40% sul prezzo del biglietto calcolato precedentemente,

**Output**
Con i dati raccolti dal form generare un biglietto del trano in pagina, allestito con css.