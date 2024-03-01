Campo Minato
===
Aggiungere la logica del gioco alla griglia 
## Svolgimento
- creo un bottone e un contenitore in html
- in js
- creo una variabile prendendo il bottone in html 
- creo una variabile prendendo il contenitore in html
- creo una funzione che fa il reset
- creo una funzione che genera il quadrato
- nella funzione per generare il quadrato faccio si che al click di quest'ultimo compaia il numero e cambi colore
- aggiungo un ciclo nel quale inserisco la funzione che genera il quadrato per 100 volte 
- creo una funzione start nella quale inserico la funzione reset e il ciclo 
- collego il bottone alla funzione start  
- creo un array vuoto
- creo una funzione che genererà 16 numeri random e se questi non sono presenti nell'array li inserirà in quest'ultimo
- inserisco quest'ultima funzione nella funzione start
- inserisco un contatore che aumenterà ad ogni click sui quadrati 
- se cliccando su un quadrato, questo avrà un indice uguale ad uno dei numeri inseriti nell'array il giocatore perde 
- il contatore avrà raggiunto valore= alla differenza tra il numero totale di quadrati e il numero di elementi contenuti nell'array, il giocatore vince 
- stampo in pagina il risultato 
