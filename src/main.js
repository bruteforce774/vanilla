import { setupCounter } from './counter.js'
import { setupDie } from './die.js'

document.querySelector('#app').innerHTML = `
<button id="counter" type="button" class="counter"></button>
<button id="die" type="button" class="die"></button>
`

setupCounter(document.querySelector('#counter'))
setupDie(document.querySelector('#die'))
