import './style.css'
import { test } from './test.js'

document.querySelector('#app').innerHTML = `
<div class="cvtext">
  <div class="kontakt">
    <h1>Lukas</h1>
    <ul>
      <li>Namn: Lukas</li>
      <li>E-post: lukas@email.com</li>
      <li>Telefon: 123-456-789</li>
    </ul>
  </div>

  <div class="column">
    <div class="sammanfattning">
      <h2>Sammanfattning</h2>
      <h4>Välkommen till mitt interaktiva CV! Jag är Lukas, en passionerad webutvecklare med ett stort intresse för
        säkerhet. Under min tid på gymnasiet har jag utforskat webutveckling och har även ägnat mig åt en djupdykning i
        säkerhetsområdet, särskilt fokuserat på Cross-Site Scripting (XSS). Här kan du lära känna mig bättre genom min
        utbildning, arbetslivserfarenhet, färdigheter och projekt. Tack för att du tar dig tid att utforska mitt CV!
      </h4>
    </div>

    <ul id="msglist"></ul>
    <input id="msg" name="msg" type="text"/>
    <button id="send">Send</button>
`

test(document.querySelector('#app'))
