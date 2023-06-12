<<<<<<< HEAD
import Template from '@template/Template.js';
import '@styles/main.css';
import '@styles/vars.styl';

=======
import Template from './templates/Template.js';
console.log('hola');
>>>>>>> 6cf560d (:art: [ADD] Initial Commit)

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
