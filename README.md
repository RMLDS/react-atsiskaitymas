# React atsiskaitymas

Šis projektas buvo sukurtas naudojant [Create React App](https://github.com/facebook/create-react-app). Projektas padarytas taip, kad paleidus nei vienas langas naršyklėje automatiškai neatsidarytų, tad norint atsidaryti projektą ar serverių puslapius naudokite link'us rodomus console'ėje juos paleidžiant. Tam, kad viskas veiktų kaip turi, skaitykite paleidimo skiltį.

## Paleidimas

Nuėję į projekto direktoriją paleiskite komandą "npm run start". Failuose yra ir alternatyvus kodas su alternatyviu duomenų serveriu, jo veikimui pirmiausia paleiskite duom. bazės serverį naudojant "npm run db" script'ą, tuomet naujame terminale paleiskite API serverį, naudojant "npm run server" script'ą ir galiausiai pakoregavus kodą pagrindiniuose projekto failuose, paleiskite projektą naudojant "npm run start" tai darant taip pat naujame terminalo lange. Visų skriptų paleidimas yra aprašytas žemiau:

#### `npm run db`

Paleidžia JSON duomenų serverį.\
Adresas naršyklėje: [http://localhost:8080/blogs](http://localhost:8080/blogs).

Atsiradus pakeitimams duomenyse, jie atsinaujins automatiškai.

#### `npm run server`

Paleidžia API serverį duomenims.\
Adresas naršyklėje: [http://localhost:5150/api/blogs](http://localhost:5150/api/blogs).
Jei neatsidaro šiuo adresu, tuomet žvilgtelkite ką rašo terminalas.

Serveris naudoja nodemon, tad visi pakeitimai atsivaizduos automatiškai.

#### `npm run start`

Pagrindinio projekto paleidimas.\
Adresas naršyklėje: [http://localhost:3000](http://localhost:3000).

Atsiradus pakeitimams viskas atsinaujins automatiškai, tad rankiniu būdu nieko paleidinėti iš naujo nerikia.