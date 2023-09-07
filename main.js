import './style.css'
import { test } from './test.js'

document.querySelector('#app').innerHTML = `
<div class="cvtext">
  <div class="kontakt">
    <h1>Lukas' Webutvecklingsäventyr: En Interaktiv Historia</h1>
  </div>

  <div class="column">
    <div class="sammanfattning">
      <h4>Välkommen till mitt interaktiva CV! Jag är Lukas, en passionerad webutvecklare med ett stort intresse för säkerhet. Under min tid på gymnasiet har jag utforskat webbutveckling och har även ägnat mig åt en djupdykning i säkerhetsområdet, särskilt fokuserat på Cross-Site Scripting (XSS). Låt oss börja resan genom mitt CV.</h4>
    </div>

    <div class="card" id="education-card">
            <h2>Kapitel 1: Skolans Värld</h2>
            <div class="hidden-content">
                <p>
                    Gymnasium: Teknikinriktning, Gymnasieskolan XYZ (År - År)
                    Kurser inom webbutveckling, programmering och säkerhet
                    Utförde ett gymnasiearbete om Cross-Site Scripting (XSS) och dess potentiella faror
                </p>
            </div>
        </div>
        <div class="card" id="experience-card">
            <h2>Kapitel 2: Första Stegen Ute i Arbetslivet</h2>
            <div class="hidden-content">
                <p>
                    Webbutvecklare, Företag XYZ (År - År)
                    Bidrog till utvecklingen av responsiva webbsidor och användargränssnitt
                    Lärde mig om bästa praxis för att förhindra sårbarheter som XSS
                    Samarbetade med teamet för att säkerställa webbsäkerhet
                </p>
            </div>
        </div>
        <div class="card" id="experience-card">
        <h2>Kapitel 3: Färdigheter och Intressen</h2>
        <div class="hidden-content">
            <p>
                Webbutvecklare, Företag XYZ (År - År)
                Bidrog till utvecklingen av responsiva webbsidor och användargränssnitt
                Lärde mig om bästa praxis för att förhindra sårbarheter som XSS
                Samarbetade med teamet för att säkerställa webbsäkerhet
            </p>
        </div>
    </div>
    <div class="card" id="education-card">
            <h2>Kapitel 4: Webbprojekt</h2>
            <div class="hidden-content">
                <p>
                    Gymnasium: Teknikinriktning, Gymnasieskolan XYZ (År - År)
                    Kurser inom webbutveckling, programmering och säkerhet
                    Utförde ett gymnasiearbete om Cross-Site Scripting (XSS) och dess potentiella faror
                </p>
            </div>
        </div>
        <div class="card" id="education-card">
        <h2>Kapitel 5: Om Lukas</h2>
        <div class="hidden-content">
            <p>
            <div class="card2" id="education-card">
            <h2>[Om Mig] - Upptäck mer om Lukas som person och hans mål inom webbutveckling och säkerhet.</h2>
            <div class="hidden-content">
                <p>
                Jag är en dedikerad webutvecklare med ett brinnande intresse för säkerhetsaspekterna av webbutveckling. Min gymnasiearbete om Cross-Site Scripting (XSS) har fördjupat min förståelse för säkerhetshål och vikten av att skydda webbapplikationer. Jag älskar att koda och strävar alltid efter att skapa bättre och säkrare användarupplevelser online. Om du vill diskutera webbutveckling, säkerhet eller något annat ämne, är du välkommen att kontakta mig via de angivna kontaktuppgifterna ovan.
                </p>
            </div>
        </div>
            </p>
        </div>
    </div>
`
//<ul id="msglist"></ul>
//<input id="msg" name="msg" type="text"/>
//<button id="send">Send</button>

test(document.querySelector('#app'))
