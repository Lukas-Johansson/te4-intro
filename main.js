import './style.css'
import { test } from './test.js'

document.querySelector('#app').innerHTML = `
<div class="cvtext">
    <div class="kontakt">
        <h1>Lukas' Webutvecklingsäventyr: En Interaktiv Historia</h1>
    </div>

    <div class="column">
        <div class="sammanfattning">
            <h4>Välkommen till mitt interaktiva CV! Jag är Lukas, en passionerad webutvecklare med ett stort intresse
                för säkerhet. Under min tid på gymnasiet har jag utforskat webbutveckling och har även ägnat mig åt en
                djupdykning i säkerhetsområdet, särskilt fokuserat på Cross-Site Scripting (XSS). Låt oss börja resan
                genom mitt CV.</h4>
        </div>

        <div class="quiz-container">
            <h2>Läs texten först sedan svara på frågan för att fortsätta</h2>


            <div class="quiz-question-container">

                <div class="card" id="education-card">
                    <h2>Kapitel 1: Skolans Värld</h2>
                    <p>
                        Gymnasium: Teknikinriktning, Gymnasieskolan NTI (2020 - 2023)
                        Kurser inom webbutveckling, programmering och säkerhet
                        Utförde ett gymnasiearbete om Cross-Site Scripting (XSS) och dess potentiella faror
                    </p>
                </div>


                <p class="quiz-question">Fråga 1: Vilken inriktning studerade Lukas på gymnasiet?</p>
                <ul class="quiz-answers">
                    <li>
                        <input type="radio" id="answer-a" name="quiz-answer" class="quiz-radio">
                        <label for="answer-a" class="quiz-label">Teknikinriktning</label>
                    </li>
                    <li>
                        <input type="radio" id="answer-b" name="quiz-answer" class="quiz-radio">
                        <label for="answer-b" class="quiz-label">Naturvetenskaplig inriktning</label>
                    </li>
                    <li>
                        <input type="radio" id="answer-c" name="quiz-answer" class="quiz-radio">
                        <label for="answer-c" class="quiz-label">Samhällsvetenskaplig inriktning</label>
                    </li>
                </ul>
            </div>


            <div class="quiz-question-container">

                <div class="card" id="experience-card">
                    <h2>Kapitel 2: Första Stegen Ute i Arbetslivet</h2>

                    <p>
                        Bidrog till utvecklingen av responsiva webbsidor och användargränssnitt
                        Lärde mig om bästa praxis för att förhindra sårbarheter som XSS
                        Samarbete med teamet för att säkerställa webbsäkerhet
                    </p>

                </div>

                <p class="quiz-question">Fråga 2: Vad var en av Lukas' huvudsakliga uppgifter under sin arbetslivserfarenhet?</p>
                    <ul class="quiz-answers">
                        <li>
                            <input type="radio" id="answer-d" name="quiz-answer" class="quiz-radio">
                            <label for="answer-d" class="quiz-label">Han var ansvarig för att designa logotyper och grafiska element</label>
                        </li>
                        <li>
                            <input type="radio" id="answer-e" name="quiz-answer" class="quiz-radio">
                            <label for="answer-e" class="quiz-label">Han bidrog till utvecklingen av responsiva webbsidor och användargränssnitt</label>
                        </li>
                        <li>
                            <input type="radio" id="answer-f" name="quiz-answer" class="quiz-radio">
                            <label for="answer-f" class="quiz-label">Han skapade marknadsföringsmaterial och kampanjer</label>
                        </li>
                    </ul>
            </div>

            <div class="quiz-question-container">

                <div class="card" id="experience-card">
                    <h2>Kapitel 3: Färdigheter och Intressen</h2>

                    <p>
                        Färdigheter:
                        Webutveckling: Erfarenhet av HTML, CSS, JavaScript och moderna ramverk som React
                        Säkerhet: Fördjupad kunskap om webbapplikationssäkerhet, inklusive XSS-förebyggande
                        Programmering: Grundläggande kunskaper i Python och Node.js

                        Intressen:

                        Webutveckling: Älskar att skapa och förbättra användarupplevelsen online
                        Säkerhet: Fortsätter att utforska webbsäkerhet och sårbarheter som XSS
                        Projekt: Tycker om att arbeta på egna webbprojekt och experimentera med nya tekniker
                    </p>
                </div>


                <p class="quiz-question">Fråga 3: Vilka färdigheter och intressen har Lukas inom webbutveckling och säkerhet?</p>
                <ul class="quiz-answers">
                    <li>
                        <input type="radio" id="answer-g" name="quiz-answer" class="quiz-radio">
                        <label for="answer-g" class="quiz-label">Lukas har erfarenhet av att spela musik och intresserar sig för konst</label>
                    </li>
                    <li>
                        <input type="radio" id="answer-h" name="quiz-answer" class="quiz-radio">
                        <label for="answer-h" class="quiz-label">Lukas har djupa kunskaper om matlagning och trädgårdsarbete</label>
                    </li>
                    <li>
                        <input type="radio" id="answer-i" name="quiz-answer" class="quiz-radio">
                        <label for="answer-i" class="quiz-label">Lukas har erfarenhet av HTML, CSS och JavaScript</label>
                    </li>
                </ul>
            </div>

            <div class="quiz-question-container">

                <div class="card" id="education-card">
                    <h2>Kapitel 4: Webbprojekt</h2>
                    <p>
                        Gymnasiearbete om Cross-Site Scripting (XSS) (2023)
                        Genomförde en noggrann undersökning av XSS och dess påverkan på webbapplikationer
                        Skapade praktiska exempel och metoder för att förebygga och hantera XSS-attacker
                        Presenterade resultatet för skolan och diskuterade vikten av webbsäkerhet
                    </p>
                </div>


                <p class="quiz-question">Fråga 4: Vad var Lukas' ämnesfokus i sitt gymnasiearbete?</p>
                <ul class="quiz-answers">
                    <li>
                        <input type="radio" id="answer-j" name="quiz-answer" class="quiz-radio">
                        <label for="answer-j" class="quiz-label">Säkerhet vid e-handelstransaktioner</label>
                    </li>
                    <li>
                        <input type="radio" id="answer-k" name="quiz-answer" class="quiz-radio">
                        <label for="answer-k" class="quiz-label">Cross-Site Scripting (XSS)</label>
                    </li>
                    <li>
                        <input type="radio" id="answer-l" name="quiz-answer" class="quiz-radio">
                        <label for="answer-l" class="quiz-label">Dataanalys och maskininlärning</label>
                    </li>
                </ul>
            </div>

            <div class="quiz-question-container">


                <div class="card" id="education-card">
                    <h2>Kapitel 5: Om Lukas</h2>

                    <p>
                        Jag är en dedikerad webutvecklare med ett brinnande intresse för säkerhetsaspekterna av
                        webbutveckling. Min
                        gymnasiearbete om Cross-Site Scripting (XSS) har fördjupat min förståelse för säkerhetshål och
                        vikten av att
                        skydda webbapplikationer. Jag älskar att koda och strävar alltid efter att skapa bättre och
                        säkrare
                        användarupplevelser online. Om du vill diskutera webbutveckling, säkerhet eller något annat
                        ämne, är du
                        välkommen att kontakta mig via de angivna kontaktuppgifterna ovan.
                    </p>

                </div>


                <p class="quiz-question">Fråga 5: Vad kan du säga om Lukas' inställning till webbutveckling och säkerhet?</p>
                <ul class="quiz-answers">
                    <li>
                        <input type="radio" id="answer-m" name="quiz-answer" class="quiz-radio">
                        <label for="answer-m" class="quiz-label">Lukas är inte särskilt intresserad av säkerhetsaspekterna av webbutveckling och fokuserar främst på visuell design</label>
                    </li>
                    <li>
                        <input type="radio" id="answer-n" name="quiz-answer" class="quiz-radio">
                        <label for="answer-n" class="quiz-label">Lukas är en dedikerad webutvecklare med ett brinnande intresse för säkerhetsaspekterna av webbutveckling</label>
                    </li>
                    <li>
                        <input type="radio" id="answer-o" name="quiz-answer" class="quiz-radio">
                        <label for="answer-o" class="quiz-label">Lukas är en passionerad konstnär och har inget särskilt intresse för webbutveckling eller säkerhet</label>
                    </li>
                </ul>
            </div>

            <p class="quiz-feedback"></p>
            <button id="quiz-next">Nästa fråga</button> 
        </div>
    </div>
    `
    
    test(document.querySelector('#app'))