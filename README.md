# React atsiskaitymas

Šis projektas buvo sukurtas naudojant [Create React App](https://github.com/facebook/create-react-app). Projektas padarytas taip, kad paleidus nei vienas langas naršyklėje automatiškai neatsidarytų, tad norint atsidaryti projektą ar serverių puslapius naudokite link'us rodomus console'ėje juos paleidžiant. Tam, kad viskas veiktų kaip turi, skaitykite paleidimo skiltį.

## Paleidimas

Nuėję į projekto direktoriją pirmiausia paleiskite duom. bazės serverį naudojant "npm run db" script'ą, tuomet naujame terminale paleiskite serverį, naudojant "npm run server" script'ą ir galiausiai paleiskite projektą naudojant "npm run start" tai darant taip pat naujame terminalo lange. Visų skriptų paleidimas yra aprašytas žemiau:

### `npm run db`

Paleidžia JSON duomenų serverį.\
Adresas naršyklėje: [http://localhost:8080/blogs](http://localhost:8080/blogs).

Atsiradus pakeitimams duomenyse, jie atsinaujins automatiškai.\

### `npm run server`

Paleidžia API serverį duomenims.\
Adresas naršyklėje: [http://localhost:5150/api/blogs](http://localhost:5150/api/blogs).
Jei neatsidaro šiuo adresu, tuomet žvilgtelkite ką rašo terminalas.

Serveris naudoja nodemon, tad visi pakeitimai atsivaizduos automatiškai.\

### `npm run start`

Pagrindinio projekto paleidimas.\
Adresas naršyklėje: [http://localhost:3000](http://localhost:3000).

Atsiradus pakeitimams viskas atsinaujins automatiškai, tad rankiniu būdu nieko paleidinėti iš naujo nerikia.\

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.