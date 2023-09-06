export function test(element) {
    //use enter as button to send
    const send = element.querySelector('#send');
    let history = [];

    msg.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("send").click();
        }
    }); 

    send.addEventListener('click', (e) => {

        const msg = document.querySelector('#msg').value;
        const msglist = document.querySelector('#msglist');
        const li = document.createElement('li');

        e.preventDefault();

        if (msg == "") {
            console.log("You need to write something")
        }

        else if (msglist.children.length >= 10) {
            li.innerHTML = msg;
            msglist.appendChild(li);
            msglist.removeChild(msglist.firstElementChild)
            history.push(msg)
        }

        else 
        {  
            li.innerHTML = msg;
            msglist.appendChild(li);
        }

        if (msg == "/help") {
            const li = document.createElement('li');
            li.innerHTML = "Commands: /help, /clear, /count, /history" + "<br>" + "About me: /utbildning, /erfarenhet, /färdigheter, /intressen, /projekt, /om mig";
            msglist.appendChild(li); 
        }

        if (msg == "/clear") {
            msglist.innerHTML = "";
        }

        if (msg == "/count") {
            const li = document.createElement('li');
            li.innerHTML = msglist.children.length;
            msglist.appendChild(li); 
        }

        if (msg == "/history") {
            const li = document.createElement('li');
            li.innerHTML = history;
            msglist.appendChild(li);
        }

        if (msg == "/history clear") {
            history = [];
        }

        if (msg == "/utbildning") {
            const li = document.createElement('li');
            li.innerHTML = "<ul><li>Gymnasium: Teknikinriktning, Gymnasieskolan XYZ (År - År)</li><li>Kurser inom webutveckling, programmering och säkerhet</li><li>Utförde ett gymnasiearbete om Cross-Site Scripting (XSS) och dess potentiella faror</li></ul>";
            msglist.appendChild(li);
        }

        if (msg == "/erfarenhet") {
            const li = document.createElement('li');
            li.innerHTML = "<h3>Webbutvecklare, Företag XYZ (År - År)</h3><ul><li>Bidrog till utvecklingen av responsiva webbsidor och användargränssnitt</li><li>Lärde mig om bästa praxis för att förhindra sårbarheter som XSS</li><li>Samarbete med teamet för att säkerställa webbsäkerhet</li></ul>";
            msglist.appendChild(li);
        }

        if (msg == "/färdigheter") {
            const li = document.createElement('li');
            li.innerHTML = "<h3>Webbutveckling, Säkerhet, Programmering</h3><ul><li>Webutveckling: Erfarenhet av HTML, CSS, JavaScript och moderna ramverk som React</li><li>Säkerhet: Fördjupad kunskap om webbapplikationssäkerhet, inklusive XSS-förebyggande</li><li>Programmering: Grundläggande kunskaper i Python och Node.js</li></ul>";
            msglist.appendChild(li);
        }

        if (msg == "/intressen") {
            const li = document.createElement('li');
            li.innerHTML = "<h3>Webbutveckling, Säkerhet, Projekt</h3><ul><li>Webutveckling: Älskar att skapa och förbättra användarupplevelsen online</li><li>Säkerhet: Fortsätter att utforska webbsäkerhet och sårbarheter som XSS</li><li>Projekt: Tycker om att arbeta på egna webbprojekt och experimentera med nya tekniker</li></ul>";
            msglist.appendChild(li);
        }

        if (msg == "/projekt") {
            const li = document.createElement('li');
            li.innerHTML = "    <h3>Projekt</h3><ul><li>Gymnasiearbete om Cross-Site Scripting (XSS) (År)</li><li>Genomförde en noggrann undersökning av XSS och dess påverkan på webbapplikationer</li><li>Skapade praktiska exempel och metoder för att förebygga och hantera XSS-attacker</li><li>Presenterade resultatet för skolan och diskuterade vikten av webbsäkerhet</li></ul>";
            msglist.appendChild(li);
        }

        if (msg == "/om mig") {
            const li = document.createElement('li');
            li.innerHTML = " <h3>Om mig</h3><h4>Jag är en dedikerad webutvecklare med ett brinnande intresse för säkerhetsaspekterna av webbutveckling. Mingymnasiearbete om Cross-Site Scripting (XSS) har fördjupat min förståelse för säkerhetshål och vikten av attskydda webbapplikationer. Jag älskar att koda och strävar alltid efter att skapa bättre och säkrareanvändarupplevelser online. Om du vill diskutera webbutveckling, säkerhet eller något annat ämne, är duvälkommen att kontakta mig via de angivna kontaktuppgifterna ovan.</h4>";
            msglist.appendChild(li);
        }
    });
}