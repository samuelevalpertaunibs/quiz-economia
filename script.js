const questions = [
    {
        question: "1) Cos'è il PIL o Prodotto Interno Lordo?",
            answers: {
            A: "Il fatturato delle aziende pubbliche di un paese",
            B: "Il volume d'affari delle imprese di un paese, sia private che pubbliche",
            C: "Il valore dei beni e servizi prodotti in un anno in un paese",
        },
        correctAnswer: "C"
    },
    {
        question: "2) Il PIL reale misura:",
        answers: {
            A: "Il valore dei beni e servizi prodotti in Italia in un certo anno utilizzando i prezzi correnti",
            B: "Il valore dei beni e servizi prodotti in un da un sistema economico in un certo anno utilizzando i prezzi di un anno base",
            C: "Il reddito ottenuto dalle imprese localizzate all’estero",
            D: "Il reddito pro-capite",
        },
        correctAnswer: "B"
    },
    {
        question: "3) Il FOI:",
        answers: {
            A: "Misura l’inflazione a livello dell’intero sistema economico",
            B: "Considera il prezzo effettivamente pagato dal consumatore",
            C: "È l’indice utilizzato per adeguare periodicamente i canoni di affitto",
            D: "È l’indice armonizzato calcolato mensilmente dall’Eurostat",
        },
        correctAnswer: "C"
    },
    {
        question: "4) L’IPCA:",
        answers: {
            A: "È l’indicatore utilizzato per verificare la convergenza delle economie dei Paesi dell’UE",
            B: "È l’indice utilizzato per adeguare periodicamente i valori monetari",
            C: "Considera l’Italia come se fosse un’unica grande famiglia di consumatori",
            D: "Misura l’inflazione considerando le esportazioni, ma non le importazioni",
        },
        correctAnswer: "A"
    },
    {
        question: "5) Il tasso di disoccupazione:",
        answers: {
            A: "È la percentuale di disoccupati di lungo periodo",
            B: "È l’indice utilizzato per stabilire la percentuale di popolazione in età lavorativa",
            C: "È la percentuale di forza lavoro disoccupata",
            D: "È la percentuale di lavoratori scoraggiati di breve periodo",
        },
        correctAnswer: "C"
    },
    {
        question: "6) Il tasso di disoccupazione è:",
        answers: {
            A: "il rapporto tra occupati e disoccupati",
            B: "il rapporto tra disoccupati e forza lavoro",
            C: "la differenza tra disoccupati e forza lavoro",
        },
        correctAnswer: "B"
    },
    {
        question: "6) Una politica monetaria____________ attraverso_______ dei tassi d’interesse, stimola________.",
        answers: {
            A: "Restrittiva/la riduzione /l’offerta di moneta delle banche alle imprese",
            B: "Restrittiva/ l’aumento /la domanda di moneta delle imprese alle banche",
            C: "Espansiva/la riduzione /l’offerta di moneta delle banche alle imprese",
            D: "Espansiva/l’aumento /la domanda di moneta delle imprese alle banche",
        },
        correctAnswer: "B"
    },
    {
        question: "7) In microeconomia la curva di domanda del mercato illustra:",
        answers: {
            A: "la relazione tra il prezzo di un bene e la quantità di tale bene che i consumatori sono disposti e in grado di acquistare entro un certo periodo di tempo.",
            B: "una serie temporale che rappresenta il prezzo di un bene e la quantità che è stata acquistata a ciascun prezzo.",
            C: "la relazione tra reddito e quantità di un bene che i consumatori sono disposti e in grado di acquistare.",
            D: "la quantità di un bene o servizio acquistata a vari prezzi durante un particolare periodo di tempo.",
        },
        correctAnswer: "A"
    },
    {
        question: "8) La curva di domanda del mercato è inclinata negativamente perché:",
        answers: {
            A: "più basso è il prezzo, più bassa è la quantità domandata di un bene o servizio, poiché il valore percepito dai consumatori scende",
            B: "più alto è il prezzo, più alta è la quantità domandata di un bene o servizio, perché il valore percepito dai consumatori sale",
            C: "più basso è il prezzo, più alta è la quantità domandata, poiché i consumatori sono disposti e in grado di acquistare una maggiore quantità di un bene o servizio a prezzi inferiori",
            D: "valgono entrambe le risposte A e B",
        },
        correctAnswer: "C"
    },
    {
        question: "9) La curva di offerta del mercato:",
        answers: {
            A: "ha inclinazione positiva perché più alto è il prezzo, più imprese sono disposte e in grado di vendere",
            B: "avrà inclinazione positiva o negativa a seconda delle tendenze di prezzo nel mercato.",
            C: "ha inclinazione negativa perché le imprese possono vendere più prodotti e servizi quando i prezzi scendono.",
        },
        correctAnswer: "A"
    },
    {
        question: "10) Il prezzo di equilibrio è definito come il prezzo a cui:",
        answers: {
            A: "il prezzo di a cui la quantità domandata è uguale alla quantità offerta e non vi sono scarsità o surplus.",
            B: "le imprese vendono ottenendo un profitto e non vi è surplus di beni invenduti.",
            C: "i costi di produzione toccano un minimo.",
            D: "le imprese sono in grado di vendere la maggior parte della quantità che producono a tale prezzo.",
        },
        correctAnswer: "A"
    },
    {
        question: "11) In microeconomia il prezzo di equilibrio è definito come il prezzo a cui:",
        answers: {
            A: "la quantità domandata è uguale alla quantità offerta e non vi sono scarsità o surplus.",
            B: "le imprese vendono ottenendo un profitto e non vi è surplus di beni invenduti",
            C: "i costi di produzione toccano un minimo",
            D: "le imprese sono in grado di vendere la maggior parte della quantità che producono a tale prezzo.",
        },
        correctAnswer: "A"
    },
    {
        question: "12) Un costo fisso è definito come:",
        answers: {
            A: "un costo che non varia da un periodo di tempo all’altro, ma non deve essere pagato se l’impresa chiude.",
            B: "un costo che non varia con i livelli di produzione ed è presente a prescindere che l’impresa operi o chiuda.",
            C: "un costo che varia con i livelli di produzione, e una parte del quale deve essere pagata se l’impresa chiude.",
            D: "un costo determinato da un contratto tra l’impresa e una terza parte.",
        },
        correctAnswer: "B"
    },
    {
        question: "13) Il costo medio di produzione è:",
        answers: {
            A: "la somma del costo variabile di produzione e del costo fisso di produzione, divisa per la quantità prodotta.",
            B: "la somma del costo variabile medio di produzione e del costo fisso medio di produzione.",
            C: "il costo totale di produzione dell’impresa diviso per la quantità prodotta.",
            D: "tutte le risposte precedenti sono vere.",
        },
        correctAnswer: "C"
    },
    {
        question: "14) Assumendo due fattori produttivi, lavoro e capitale, in un processo di produzione, le rette di isocosto mostrano:",
        answers: {
            A: "tutte le possibili combinazioni di lavoro e capitale che si possono acquistare per raggiungere un dato livello di produzione di un bene o servizio.",
            B: "il costo di tutte le possibili combinazioni di lavoro e capitale che si possono acquistare per un dato livello di produzione.",
            C: "le combinazioni di costo di affitto di lavoro e capitale che si possono acquistare all’aumentare della produzione.",
            D: "tutte le possibili combinazioni di lavoro e capitale che si possono acquistare per un dato costo.",
        },
        correctAnswer: "B"
    },
    {
        question: "15) L’oligopolio si caratterizza per:",
        answers: {
            A: "un unico venditore che stabilisce prezzo e quantità.",
            B: "molti venditori con prodotti differenziati",
            C: "pochi venditori, con prodotto omogeneo, le cui azioni sono interdipendenti",
            D: "molti compratori e venditori: ciascuno di loro ha un impatto irrilevante sul prezzo",
        },
        correctAnswer: "C"
    },
    {
        question: "16) Nella società in accomandita semplice, chi risponde delle obbligazioni sociali:",
        answers: {
            A: "soci accomandanti rispondono limitatamente alla quota sottoscritta, mentre i soci accomandatari rispondono illimitatamente e solidalmente",
            B: "tutti i soci rispondono solidalmente e illimitatamente",
            C: "solo la società con il proprio patrimonio",
            D: "I soci accomandatari rispondono limitatamente alla quota sottoscritta, mentre i soci accomandanti rispondono illimitatamente e solidalmente",
        },
        correctAnswer: "A"
    },
    {
        question: "17) Nelle società di persone per le obbligazioni sociali:",
        answers: {
            A: "risponde solo la società con il proprio patrimonio",
            B: "tutti i soci rispondono solidalmente ed illimitatamente",
            C: "rispondono solo gli azionisti con il patrimonio personale",
            D: "nessuna delle precedenti risposte",
        },
        correctAnswer: "A"
    },
    {
        question: "18) Il TIR:",
        answers: {
            A: "è la somma algebrica dei flussi di cassa attualizzati di un investimento",
            B: "è il tasso di sconto che rende il VAN = 0",
            C: "èparial5%",
            D: "corrisponde al tasso di inflazione",
        },
        correctAnswer: "B"
    },
    {
        question: "19) Un investimento può essere considerato redditizio quando:",
        answers: {
            A: "ilVANè=0",
            B: "il VAN è > TIR",
            C: "ilVANè<0",
            D: "ilVANè>0",
        },
        correctAnswer: "D"
    },
    {
        question: "20) Per periodo di recupero di un investimento si intende:",
        answers: {
            A: "il flusso di cassa differenziale in entrata al periodo t",
            B: "il numero di anni necessari per recuperare l’investimento iniziale di un progetto attraverso l’accumulo di flussi di cassa in ingresso",
            C: "il rapporto tra il VAN di un progetto e il relativo investimento iniziale.",
        },
        correctAnswer: "B"
    },
    {
        question: "21) In economia aziendale, il ricavo:",
        answers: {
            A: "è riconosciuto al momento della consegna delle merci",
            B: "aumenta le rimanenze dei fattori produttivi",
            C: "aumenta la dotazione di immobilizzazioni immateriali",
        },
        correctAnswer: "A"
    },
    {
        question: "23) L’ammontare dei crediti verso clienti esprime un fabbisogno finanziario:",
        answers: {
            A: "di breve durata",
            B: "la cui durata dipende dai tempi di incasso dei crediti",
            C: "durevole nel tempo",
        },
        correctAnswer: "A"
    },
    {
        question: "24) I documenti che compongono il bilancio secondo l'articolo 2423 del codice civile sono:",
        answers: {
            A: "stato patrimoniale, conto economico e relazione sulla gestione",
            B: "stato patrimoniale, conto economico, rendiconto finanziario e nota integrativa",
            C: "stato patrimoniale, conto economico, nota integrativa e relazione sulla gestione",
            D: "stato patrimoniale, conto economico, nota integrativa, relazione sulla gestione e relazione del collegio sindacale",
        },
        correctAnswer: "C"
    },
    {
        question: "25) Per il principio del duplice aspetto:",
        answers: {
            A: "Attività = Passività + Capitale netto",
            B: "Attività = Passività - Capitale netto",
            C: "Attività = Passività - Capitale netto + Ricavi",
            D: "Attività = Passività + Capitale netto - Ricavi + Riserve di utili",
        },
        correctAnswer: "A"
    },
    {
        question: "26) La Nota Integrativa contiene informazioni su:",
        answers: {
            A: "i fatti di rilievo avvenuti dopo la chiusura dell’esercizio",
            B: "le poste di Conto Economico e di Stato Patrimoniale",
            C: "le politiche e strategie aziendali",
        },
        correctAnswer: "C"
    },
    {
        question: "27) Una plusvalenza da alienazione di beni strumentali:",
        answers: {
            A: "viene conseguita quando un bene è ceduto a un prezzo superiore al suo valore contabile netto",
            B: "viene conseguita quando un bene è ceduto a un prezzo superiore al suo valore contabile netto, ma inferiore al prezzo di acquisto",
            C: "viene registrata soltanto quando il corrispettivo della vendita è incassato",
        },
        correctAnswer: "A"
    },
    {
        question: "28) In un’azienda in normale funzionamento, i crediti verso clienti determinano:",
        answers: {
            A: "un fabbisogno finanziario a breve termine",
            B: "un fabbisogno finanziario durevole",
            C: "in quanto denaro da incassare, nessun fabbisogno finanziario",
        },
        correctAnswer: "A"
    },
    {
        question: "29) Cosa non è attività operativa con effetto sulla cassa?",
        answers: {
            A: "Pagamenti da parte dei clienti",
            B: "Pagamento di stipendi e di salari",
            C: "Acquisto di un macchinario",
            D: "Pagamenti a fornitori",
        },
        correctAnswer: "C"
    },
    {
        question: "30) Cosa non deve intendersi come “Investimenti e alienazioni tipici” con effetto sulla cassa?",
        answers: {
            A: "Pagamenti da parte dei clienti",
            B: "Alienazione di un fabbricato",
            C: "Acquisto di un macchinario",
            D: "Incasso di crediti finanziari a lungo termine",
        },
        correctAnswer: "D"
    },
    {
        question: "31) Le immobilizzazioni immateriali:",
        answers: {
            A: "sono normalmente caratterizzate dalla mancanza di tangibilità",
            B: "sono costituite esclusivamente da costi pluriennali che si concretizzano nell’acquisto o produzione interna di beni",
            C: "sono costituite da costi che esauriscono la loro utilità nell’arco di 5 esercizi",
        },
        correctAnswer: "A"
    },
    {
        question: "32) L’adozione del metodo F.I.F.O determina una valorizzazione delle rimanenze di merci sulla base dei prezzi più recenti?",
        answers: {
            A: "Sì",
            B: "No",
            C: "Si, ma solo in periodi di inflazione",
            D: "No, ma solo quando i tassi di interesse aumentano",
        },
        correctAnswer: "B"
    },
    {
        question: "33) Fanno parte della gestione caratteristica di un’impresa industriale:",
        answers: {
            A: "gli oneri finanziari",
            B: "le cedole su prestiti obbligazionari",
            C: "le spese per il personale",
        },
        correctAnswer: "C"
    },
    {
        question: "34) Un margine di struttura secondario > 0 indica:",
        answers: {
            A: "indica che il capitale permanente (P.N. + Debiti M/L) è sufficiente al finanziamento delle immobilizzazioni",
            B: "molto spesso comporta il sorgere di costi finanziari eccessivi per sostenere l’investimento in immobilizzazioni",
            C: "indica un buon equilibrio finanziario dato dal fatto che la proprietà è riuscita ad autofinanziare gli investimenti nell’attivo immobilizzato",
            D: "tutte le precedenti risposte",
        },
        correctAnswer: "C"
    },
    {
        question: "35) Un margine di liquidità secondario < 0 indica:",
        answers: {
            A: "un disequilibrio finanziario di breve periodo",
            B: "che le liquidità immediate sono insufficienti a onorare gli impegni a breve termine",
            C: "che le liquidità differite sono sufficienti a onorare gli impegni a breve termine",
            D: "nessuna delle precedenti risposte",
        },
        correctAnswer: "B"
    },
    {
        question: "36) Il Break Even Point:",
        answers: {
            A: "è il livello di produzione e vendita in corrispondenza del quale il margine operativo è uguale agli oneri finanziari",
            B: "è il livello di produzione e vendita in corrispondenza del quale i ricavi di vendita sono uguali ai costi fissi",
            C: "è il livello di produzione e vendita in corrispondenza del quale i costi totali e i ricavi totali si equivalgono",
        },
        correctAnswer: "B"
    },
    {
        question: "37) I costi fissi a gradino:",
        answers: {
            A: "sono costi che si incrementano sotto forma di gradini discreti relativamente ampi",
            B: "sono costi variano al variare del livello complessivo di attività",
            C: "sono costi che diminuiscono all’aumentare del livello complessivo delle attività",
        },
        correctAnswer: "A"
    },
    {
        question: "38) Il costo diretto è:",
        answers: {
            A: "il costo che permette di rispondere alla domanda “quanto è costato?”",
            B: "il valore delle risorse il cui consumo è direttamente associabile alle unità produttive, ma non ai prodotti specifici",
            C: "il valore delle risorse il cui consumo può essere attribuito in modo univoco e inequivocabile a un determinato oggetto di costo",
            D: "la base per valorizzare nello stato patrimoniale le rimanenze di semilavorati e prodotti finiti",
        },
        correctAnswer: "C"
    },
    {
        question: "39) Il costo pieno di produzione si ottiene sommando:",
        answers: {
            A: "il costo dei materiali diretti e il costo della manodopera diretta",
            B: "il costo dei materiali diretti e i costi generali di produzione",
            C: "il costo dei materiali diretti e i costi della trasformazione",
            D: "il costo dei materiali diretti e i costi generali, commerciali e amministrativi",
        },
        correctAnswer: "D"
    },
    {
        question: "40) I costi di periodo sono:",
        answers: {
            A: "il valore delle risorse impiegate in attività non associabili alla realizzazione di un prodotto/servizio secondo un nesso di causalità",
            B: "i costi direttamente associabili alle operazioni di trasformazione fisica dell’input in output",
            C: "il valore delle risorse utilizzate per la realizzazione di un determinato prodotto/servizio",
            D: "i costi che variano al variare del livello complessivo di attività",
        },
        correctAnswer: "A"
    },
    {
        question: "41) Il costo standard:",
        answers: {
            A: "la componente di costo sulla quale il responsabile non ha l’opportunità di decidere",
            B: "è il costo teorico a preventivo, ingegneristico, ottenibile dall’impresa in condizioni di normale funzionamento",
            C: "è il costo non dipendente dai volumi produttivi",
        },
        correctAnswer: "B"
    }
]
    
let shuffledQuestions, currentQuestionIndex, score;

document.addEventListener('DOMContentLoaded', (event) => {
    startQuiz();
});

function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('submit-button').style.display = 'none';
    document.getElementById('help-button').style.display = 'inline-block';
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <div>
            <h2>${question.question}</h2>
            ${Object.keys(question.answers).map(key => `
                <label>
                    <input type="radio" name="answer" value="${key}">
                    ${key}: ${question.answers[key]}
                </label><br>
            `).join('')}
        </div>
    `;
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === shuffledQuestions[currentQuestionIndex].correctAnswer) {
            score += 1;
        } else {
            score -= 0.25;
        }
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('submit-button').style.display = 'inline-block';
        document.getElementById('help-button').style.display = 'none';
    }
}

function submitQuiz() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    document.getElementById('score').innerText = `Il tuo punteggio è: ${score}`;
}

function showHelp() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    const correctAnswer = currentQuestion.correctAnswer;
    const correctAnswerText = currentQuestion.answers[correctAnswer];

    const helpText = document.createElement('p');
    helpText.innerHTML = `<strong>Correct Answer: ${correctAnswer}: ${correctAnswerText}</strong>`;
    questionContainer.appendChild(helpText);
}

