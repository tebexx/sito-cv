document.addEventListener('DOMContentLoaded', () => {

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- 0. Internationalization (IT / EN) ---
    const translations = {
        it: {
            nav: { about: "Chi Sono", projects: "Progetti", contact: "Contatti", openMenu: "Apri menu" },
            loader: { subtitle: "Ricerca & Design" },
            hero: {
                title: 'Costruisco <span class="text-light">ponti fluidi</span> tra enti, contesti e <span class="text-light">persone</span>.',
                description: "Progetto soluzioni capaci di posizionarsi al centro tra realtà diverse. Trasformo relazioni rigide, macchinose o frammentate in flussi di comunicazione naturali e collaborativi, superando le barriere tra mondi apparentemente distanti.",
                ctaPrimary: "Vedi il Progetto",
                ctaSecondary: "Scopri di più",
                scrollDown: "Scorri giù"
            },
            about: {
                sectionTitle: "Chi Sono",
                philosophyTitle: "Filosofia e Approccio",
                p1: "Oggi il principale collo di bottiglia non è la mancanza di innovazione, ma la crescente frammentazione tra le tecnologie, le persone ed i contesti esistenti. Nella corsa continua verso nuove possibilità, si tende a rincorrere l'ultimo strumento a scapito della retrocompatibilità e della continuità dei rapporti. Il risultato è la proliferazione di ambienti e sistemi isolati che faticano a dialogare tra loro.",
                p2: "La mia filosofia nasce proprio qui: interpormi in questo spazio d'ombra per costruire ponti fluidi e retrocompatibili tra enti, ambienti e persone diverse. Che si tratti di connettere un'architettura di dati a utenti non tecnici o di armonizzare flussi relazionali complessi, il mio obiettivo è risolvere i problemi di comunicazione alla radice, integrando l'innovazione senza distruggere ciò che già funziona.",
                p3: "A livello personale, sono animato da un approccio dinamico e da una forte spinta intraprendente: cogliendo le opportunità al volo, non ho timore di uscire dalla mia zona di comfort per mettermi in gioco in contesti sempre nuovi. Considero la versatilità un punto di forza ed affronto le sfide con prontezza e spirito d'iniziativa.",
                p4: "Unisco competenze scientifiche nell'architettura dei dati (AI, NLP, RAG) a una spiccata sensibilità organizzativa ed empatica, maturata nella gestione dei flussi in tempo reale. Per me la tecnologia e il design non sono il fine ultimo, ma il mezzo con cui restituisco continuità, trasparenza e armonia alle relazioni."
            },
            journey: {
                experienceTitle: "Esperienza Lavorativa",
                item1: { title: "Sviluppatore Python", desc: "Estrazione in tempo reale di dati meteomarini acquisiti da stazioni lagunari per modelli di previsione statistici della marea, considerando le interferenze del sistema MOSE. Gestione e segnalazione allerte meteo lungo la costa regionale." },
                item3: { desc: "Ricerca e sperimentazione su modelli di embedding per la ricerca semantica, analisi comparativa di modelli e studio di tecniche avanzate di Natural Language Processing (NLP)." },
                item4: { desc: "Sviluppo in React Native per l'applicazione mobile di delivery (gestione flussi clienti e corrieri), curando la manutenzione del codice e l'ottimizzazione dell'esperienza utente." },
                item5: { title: "Cameriere / Chef de Rang", desc: "Percorso in sala dal servizio autonomo alla gestione completa: coordinamento del flusso piatti, formazione del personale e cura del servizio clienti, dal centro storico di Venezia agli hotel di alto profilo di St. Moritz." },
                educationTitle: "Formazione & Certificazioni",
                item6: { title: "Laurea Triennale in Informatica", desc: "Percorso focalizzato su intelligenza artificiale, architettura dei dati ed interazione. Tesi di laurea sperimentale sulla comparazione e analisi di diversi modelli di embedding in un contesto di similarità semantica." },
                item7: { title: "Diploma ESABAC Italo-Francese", desc: "Diploma binazionale che certifica una formazione linguistica e letteraria approfondita in italiano e francese." },
                item8: { year: "Certificazioni", title: "Certificazioni di Competenze", desc: "Certificazione della competenza linguistica in lingua inglese e Patente Europea del Computer (European Computer Driving Licence)." },
                languagesTitle: "Lingue Parlate",
                langIt: "Italiano (Madrelingua)",
                langEn: "Inglese (C1)",
                langFr: "Francese (B1)",
                langEs: "Spagnolo (A2)",
                langDe: "Tedesco (A2)"
            },
            focus: {
                sectionTitle: "Ambiti di Competenza",
                card1: { title: "Facilitazione tra Enti", desc: "L'ho capito mettendo le mani su realtà molto diverse: dai dati meteomarini della Laguna di Venezia alle diverse realtà della ristorazione in cui mi sono confrontato." },
                card2: { title: "Fluidità delle Relazioni", desc: "Non credo nei processi che chiedono alle persone di adattarsi alla tecnologia. Credo in sistemi capaci di ascoltare, adattarsi e cambiare insieme a chi li utilizza." },
                card3: { title: "Abbattimento Barriere", desc: "Un modello che non comprende una richiesta, un dato che non riesce a dialogare con un altro sistema, una persona che non si sente ascoltata: problemi diversi, ma alla base c'è sempre una barriera. Mi interessa trovare il modo di superarla." },
                card4: { title: "Coordinamento & Empatia", desc: "Ho imparato a leggere situazioni e persone in tempo reale, soprattutto quando la pressione aumenta e le decisioni devono essere rapide. È una capacità che porto nel modo in cui affronto progetti, collaborazioni e problemi complessi." }
            },
            skills: {
                sectionTitle: "Competenze Tecniche",
                group1: { title: "Linguaggi & Framework" },
                group2: { title: "AI & Architettura Dati" },
                group3: { title: "Strumenti" }
            },
            projects: {
                sectionTitle: "Progetti Personali",
                windroseName: "Rosa dei Venti",
                windroseDesc: "Come il vento trasforma una vela in movimento, le mie soluzioni trasformano la complessità in slancio. Passa il mouse per orientare l'ago, clicca un vento per scoprirlo."
            },
            windrose: {
                tooltip: "Scopri di più",
                ariaSuffix: " — scopri di più",
                closeBanner: "Chiudi",
                viewProject: "Scopri il progetto",
                comingSoonNote: "Presto anche questo vento avrà il suo progetto.",
                descriptions: {
                    Bora: "Vento freddo e secco da nord-est, tipico dell'Adriatico settentrionale: soffia spesso a raffiche improvvise e violente.",
                    Levante: "Vento umido da est, proveniente dal mare aperto: porta cielo coperto e un'aria più mite e salmastra.",
                    Ostro: "Un vento da sud che abbatte le distanze. Ostro trasforma le parole in codice: interroga i database al posto tuo e restituisce dati e report visivi in pochi secondi. Nessun bisogno di conoscere l'SQL per chi cerca risposte, nessuna coda di richieste per il team IT.",
                    Ponente: "Vento da ovest, generalmente mite e regolare: accompagna spesso giornate serene nelle stagioni intermedie."
                }
            },
            contact: {
                sectionTitle: "Contatti",
                lead: "Se hai in mente un progetto, una collaborazione, o vuoi solo scambiare due parole sul mio percorso, scrivimi pure: mi fa sempre piacere. Per ora sono a Venezia, ma il vento sta già girando verso nuovi lidi.",
                emailBtn: "Invia una Mail"
            },
            footer: {
                rights: "Tutti i diritti riservati.",
                backToTop: "Torna all'inizio",
                privacy: "Privacy Policy"
            },
            modal: {
                close: "Chiudi",
                scopeLabel: "Ambito",
                dateLabel: "Data di Rilascio",
                skillsLabel: "Competenze Applicate",
                viewDemo: "Vedi la Demo",
                backToSpecs: "Torna alle Specifiche",
                demoHeading: "Demo — Screenshot",
                demoAlt: "Schermata della demo di Ostro",
                flipHint: "Clicca per leggere",
                enlarge: "Ingrandisci"
            },
            meta: {
                title: "Tobia Barbini | Facilitatore di Processi & Interazione",
                description: "Portfolio di Tobia Barbini. Creo soluzioni e mi inserisco tra enti, ambienti e persone diverse per risolvere problemi di relazione, rendendo la comunicazione fluida, naturale ed efficace."
            },
            privacy: {
                pageTitle: "Privacy Policy",
                metaTitle: "Privacy Policy | Tobia Barbini",
                metaDescription: "Informativa sulla privacy del portfolio di Tobia Barbini: hosting, memorizzazione locale, cookie e contatti.",
                updated: "Ultimo aggiornamento: Settembre 2026",
                intro: "Questa pagina descrive come questo sito tratta i dati dei visitatori. Il titolare di questo sito è Tobia Barbini; per qualsiasi domanda puoi scrivere a tobia.barbini@gmail.com.",
                hostingTitle: "Hosting e log tecnici",
                hostingText: "Questo sito è ospitato su GitHub Pages (GitHub, Inc.). Come qualsiasi servizio di hosting, GitHub può registrare automaticamente dati tecnici di connessione (ad esempio indirizzo IP, tipo di browser, data e ora della richiesta) nei propri log di sistema, per finalità di sicurezza e funzionamento del servizio. Questo sito non ha accesso a tali log. Per maggiori informazioni, consulta la privacy policy di GitHub.",
                localStorageTitle: "Memorizzazione locale",
                localStorageText: "Il sito salva nel browser dell'utente, tramite la tecnologia localStorage, esclusivamente la preferenza di lingua scelta (italiano o inglese). Questo dato resta sul dispositivo dell'utente, non viene mai trasmesso a me né a terzi, e può essere cancellato in qualsiasi momento svuotando i dati di navigazione del browser.",
                cookiesTitle: "Cookie e tracciamento",
                cookiesText: "Questo sito non utilizza cookie di profilazione, strumenti di analisi (analytics) né tracciamento di terze parti.",
                fontsTitle: "Font",
                fontsText: "I font utilizzati sono ospitati direttamente su questo sito, non tramite Google Fonts o altri servizi esterni: il loro caricamento non comporta quindi alcuna trasmissione di dati a terze parti.",
                contactTitle: "Contatti via email",
                contactText: "Il pulsante “Invia una Mail” si limita ad aprire il client di posta predefinito del tuo dispositivo (link mailto): il sito non possiede un modulo che raccoglie o invia dati a un server. Qualsiasi comunicazione via email avviene direttamente tra te e me, secondo le normali modalità di corrispondenza privata.",
                rightsTitle: "Domande",
                rightsText: "Per qualsiasi domanda su questa informativa, scrivimi a tobia.barbini@gmail.com.",
                backHome: "Torna al sito"
            }
        },
        en: {
            nav: { about: "About", projects: "Projects", contact: "Contact", openMenu: "Open menu" },
            loader: { subtitle: "Research & Design" },
            hero: {
                title: 'I build <span class="text-light">fluid bridges</span> between organizations, contexts and <span class="text-light">people</span>.',
                description: "I design solutions capable of positioning themselves at the center between different realities. I turn rigid, mechanical or fragmented relationships into natural, collaborative communication flows, overcoming the barriers between seemingly distant worlds.",
                ctaPrimary: "View the Project",
                ctaSecondary: "Learn More",
                scrollDown: "Scroll down"
            },
            about: {
                sectionTitle: "About Me",
                philosophyTitle: "Philosophy & Approach",
                p1: "Today the main bottleneck isn't a lack of innovation, but the growing fragmentation between existing technologies, people and contexts. In the constant race toward new possibilities, there's a tendency to chase the latest tool at the expense of backward compatibility and the continuity of relationships. The result is a proliferation of isolated environments and systems that struggle to talk to one another.",
                p2: "My philosophy is born right there: positioning myself in that blind spot to build fluid, backward-compatible bridges between different organizations, environments and people. Whether it's connecting a data architecture to non-technical users or harmonizing complex relational flows, my goal is to solve communication problems at the root, integrating innovation without destroying what already works.",
                p3: "On a personal level, I'm driven by a dynamic approach and a strong entrepreneurial streak: seizing opportunities as they arise, I'm not afraid to step outside my comfort zone and put myself to the test in ever-new contexts. I consider versatility a strength and I face challenges with readiness and initiative.",
                p4: "I combine scientific expertise in data architecture (AI, NLP, RAG) with a strong organizational and empathetic sensitivity, developed through managing real-time data flows. For me, technology and design aren't the end goal, but the means through which I restore continuity, transparency and harmony to relationships."
            },
            journey: {
                experienceTitle: "Work Experience",
                item1: { title: "Python Developer", desc: "Real-time extraction of meteo-marine data collected from lagoon stations for statistical tide forecasting models, accounting for interference from the MOSE flood barrier system. Management and issuance of weather alerts along the regional coast." },
                item3: { desc: "Research and experimentation on embedding models for semantic search, comparative analysis of models, and study of advanced Natural Language Processing (NLP) techniques." },
                item4: { desc: "React Native development for the delivery mobile app (managing customer and courier flows), handling code maintenance and user experience optimization." },
                item5: { title: "Waiter / Chef de Rang", desc: "A front-of-house path from independent service to full floor management: coordinating the dish flow, training staff and looking after guests, from Venice's historic center to high-profile hotels in St. Moritz." },
                educationTitle: "Education & Certifications",
                item6: { title: "Bachelor's Degree in Computer Science", desc: "A path focused on artificial intelligence, data architecture and interaction. Experimental thesis on the comparison and analysis of different embedding models in a semantic similarity context." },
                item7: { title: "Italian-French ESABAC Diploma", desc: "A binational diploma certifying in-depth linguistic and literary training in Italian and French." },
                item8: { year: "Certifications", title: "Skills Certifications", desc: "Certification of English language proficiency and the European Computer Driving Licence (ECDL)." },
                languagesTitle: "Languages Spoken",
                langIt: "Italian (Native)",
                langEn: "English (C1)",
                langFr: "French (B1)",
                langEs: "Spanish (A2)",
                langDe: "German (A2)"
            },
            focus: {
                sectionTitle: "Areas of Expertise",
                card1: { title: "Facilitation Between Organizations", desc: "I learned this hands-on, across very different realities: from the meteo-marine data of the Venice Lagoon to the many faces of the restaurant world I've navigated." },
                card2: { title: "Fluidity of Relationships", desc: "I don't believe in processes that ask people to adapt to technology. I believe in systems that can listen, adapt and change alongside the people who use them." },
                card3: { title: "Breaking Down Barriers", desc: "A model that doesn't understand a request, data that can't talk to another system, a person who doesn't feel heard: different problems, but underneath there's always a barrier. I'm interested in finding a way past it." },
                card4: { title: "Coordination & Empathy", desc: "I've learned to read situations and people in real time, especially when pressure rises and decisions have to be quick. It's a skill I carry into how I approach projects, collaborations and complex problems." }
            },
            skills: {
                sectionTitle: "Technical Skills",
                group1: { title: "Languages & Frameworks" },
                group2: { title: "AI & Data Architecture" },
                group3: { title: "Tools" }
            },
            projects: {
                sectionTitle: "Personal Projects",
                windroseName: "Rosa dei Venti",
                windroseDesc: "Just as wind turns a sail into motion, my solutions turn complexity into momentum. Hover to steer the needle, click a wind to discover it."
            },
            windrose: {
                tooltip: "Learn more",
                ariaSuffix: ", learn more",
                closeBanner: "Close",
                viewProject: "Discover the project",
                comingSoonNote: "This wind will get its own project soon too.",
                descriptions: {
                    Bora: "A cold, dry northeasterly wind typical of the northern Adriatic, often blowing in sudden, violent gusts.",
                    Levante: "A humid easterly wind off the open sea, bringing overcast skies and a milder, salty air.",
                    Ostro: "A southerly wind that closes distances. Ostro turns words into code: it queries databases for you and returns data and visual reports in seconds. No need to know SQL if you're looking for answers, no more request queues for the IT team.",
                    Ponente: "A generally mild, steady westerly wind, often accompanying clear skies in the shoulder seasons."
                }
            },
            contact: {
                sectionTitle: "Contact",
                lead: "If you have a project or collaboration in mind, or just want to chat about my background, drop me a line. I'd genuinely love to hear from you. I'm in Venice for now, but the wind is already turning toward new shores.",
                emailBtn: "Send an Email"
            },
            footer: {
                rights: "All rights reserved.",
                backToTop: "Back to top",
                privacy: "Privacy Policy"
            },
            modal: {
                close: "Close",
                scopeLabel: "Scope",
                dateLabel: "Release Date",
                skillsLabel: "Skills Applied",
                viewDemo: "View the Demo",
                backToSpecs: "Back to Specs",
                demoHeading: "Demo: Screenshots",
                demoAlt: "Ostro demo screenshot",
                flipHint: "Click to read",
                enlarge: "Enlarge"
            },
            meta: {
                title: "Tobia Barbini | Process & Interaction Facilitator",
                description: "Portfolio of Tobia Barbini. I design solutions and position myself between organizations, environments and people to solve relational problems, making communication fluid, natural and effective."
            },
            privacy: {
                pageTitle: "Privacy Policy",
                metaTitle: "Privacy Policy | Tobia Barbini",
                metaDescription: "Privacy policy for Tobia Barbini's portfolio: hosting, local storage, cookies and contact.",
                updated: "Last updated: September 2026",
                intro: "This page describes how this site handles visitor data. This site's owner is Tobia Barbini; for any questions, feel free to write to tobia.barbini@gmail.com.",
                hostingTitle: "Hosting & Technical Logs",
                hostingText: "This site is hosted on GitHub Pages (GitHub, Inc.). Like any hosting service, GitHub may automatically log basic technical connection data (such as IP address, browser type, and request timestamp) in its own system logs, for security and operational purposes. This site has no access to those logs. For more information, see GitHub's own privacy statement.",
                localStorageTitle: "Local Storage",
                localStorageText: "The site saves only your chosen language preference (Italian or English) in your browser via localStorage. This data stays on your own device, is never transmitted to me or to any third party, and can be cleared at any time by clearing your browser's site data.",
                cookiesTitle: "Cookies & Tracking",
                cookiesText: "This site does not use profiling cookies, analytics tools, or third-party tracking of any kind.",
                fontsTitle: "Fonts",
                fontsText: "The fonts used are hosted directly on this site rather than through Google Fonts or any other external service, so loading them involves no data transmission to third parties.",
                contactTitle: "Contact via Email",
                contactText: "The “Send an Email” button simply opens your device's default email client (a mailto link): the site has no form that collects or sends data to a server. Any email exchange happens directly between you and me, as ordinary private correspondence.",
                rightsTitle: "Questions",
                rightsText: "For any questions about this notice, write to me at tobia.barbini@gmail.com.",
                backHome: "Back to the site"
            }
        }
    };

    function getTranslation(lang, path) {
        return path.split('.').reduce((node, key) => (node && node[key] !== undefined) ? node[key] : null, translations[lang]);
    }

    let currentLang = localStorage.getItem('site-lang') === 'en' ? 'en' : 'it';
    let ostroModalOpen = false;
    let currentModalView = null; // 'specs' | 'demo'
    let currentBannerWind = null; // which wind's info banner is open, if any
    const owrPointButtons = []; // wind-rose buttons, so language switches can relabel tooltips/aria without a full rebuild

    function applyLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('site-lang', lang);
        document.documentElement.lang = lang;

        // Sub-pages (e.g. privacy.html) carry their own <title>/description
        // rather than the homepage's, via a data-page attribute on <body>.
        const page = document.body.dataset.page;
        const titleKey = page === 'privacy' ? 'privacy.metaTitle' : 'meta.title';
        const descKey = page === 'privacy' ? 'privacy.metaDescription' : 'meta.description';

        const pageTitle = getTranslation(lang, titleKey);
        if (pageTitle) document.title = pageTitle;
        const metaDesc = document.querySelector('meta[name="description"]');
        const pageDesc = getTranslation(lang, descKey);
        if (metaDesc && pageDesc) metaDesc.setAttribute('content', pageDesc);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const value = getTranslation(lang, el.dataset.i18n);
            if (value !== null) el.innerHTML = value;
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const value = getTranslation(lang, el.dataset.i18nAria);
            if (value !== null) el.setAttribute('aria-label', value);
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // If the Ostro modal is open, re-render whichever view (specs or
        // demo) is showing rather than leaving it stuck in the old language.
        if (ostroModalOpen) {
            if (currentModalView === 'demo' && typeof renderOstroDemo === 'function') {
                renderOstroDemo();
            } else if (typeof renderOstroSpecs === 'function') {
                renderOstroSpecs();
            }
        }

        if (typeof updateWindroseLabels === 'function') {
            updateWindroseLabels();
        }
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });

    applyLanguage(currentLang);

    // --- 1. Preloader Handling ---
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('fade-out');
                triggerInitialReveal();
            }, 600);
        });

        // Fallback in case window load event doesn't fire
        setTimeout(() => {
            if (!preloader.classList.contains('fade-out')) {
                preloader.classList.add('fade-out');
                triggerInitialReveal();
            }
        }, 2500);
    }

    // --- 2. Scroll Reveal Animation ---
    const revealItems = document.querySelectorAll('.reveal-item');

    // Stagger siblings that share a parent, so groups like the focus cards,
    // journey items and language tags cascade in rather than popping together.
    const staggerGroups = new Map();
    revealItems.forEach(item => {
        const parent = item.parentElement;
        if (!staggerGroups.has(parent)) staggerGroups.set(parent, []);
        staggerGroups.get(parent).push(item);
    });
    staggerGroups.forEach(group => {
        group.forEach((item, i) => {
            item.style.transitionDelay = `${Math.min(i * 0.08, 0.5)}s`;
        });
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach(item => {
        revealObserver.observe(item);
    });

    function triggerInitialReveal() {
        revealItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                item.classList.add('revealed');
                revealObserver.unobserve(item);
            }
        });
    }

    // --- 3. Dynamic Footer Year ---
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // --- 4. Mobile Navigation Menu ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
            document.body.classList.toggle('overflow-hidden');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.classList.remove('overflow-hidden');
            });
        });
    }

    // --- 4b. Collapsible Journey Sections (Experience / Education) ---
    document.querySelectorAll('.journey-toggle').forEach(btn => {
        const section = btn.closest('.journey-section');
        const collapse = section ? section.querySelector('.journey-collapse') : null;
        if (!collapse) return;

        btn.addEventListener('click', () => {
            const isOpen = collapse.classList.toggle('open');
            btn.setAttribute('aria-expanded', String(isOpen));
        });
    });


    // --- 5. Ostro Project Data & Modal (specs + demo screenshots) ---
    const projectsData = {
        it: {
            ostro: {
                title: "Ostro",
                category: "Progetto Personale",
                tagline: "“Il vento che porta le tue domande fino in fondo ai dati, e torna con la risposta.”",
                sections: [
                    {
                        title: "Contesto",
                        text: "Questo progetto rappresenta la prima concretizzazione applicativa di una visione più ampia: interporsi tra entità, ambienti e contesti diversi per eliminare l'incomunicabilità ed i passaggi macchinosi. Nelle strutture informative tradizionali, la distanza tra chi cerca risposte ed i dati memorizzati crea barriere e dipendenze rigide. Questo strumento nasce per collocarsi in posizione intermedia, traducendo la complessità in un dialogo naturale."
                    },
                    {
                        title: "Soluzione",
                        text: "Ostro è un agente virtuale offline in grado di interpretare domande formulate in linguaggio naturale e tradurle istantaneamente in query SQL precise. Elimina la rigidità dei canali tradizionali e rende l'interazione fluida, immediata e guidata dall'esperienza utente. Per garantire la tutela dell'ambiente dati, l'agente opera in sola lettura (READ-ONLY)."
                    },
                    {
                        title: "Informazioni sulla Demo",
                        text: "Per mostrare sul campo come la mediazione possa semplificare il rapporto con l'informazione, la demo si appoggia su un database di prova con dati semplificati e simulati (misurazioni del livello della marea lungo la costa italiana), evidenziando come chiunque possa ricavare report e grafici senza ostacoli tecnici."
                    },
                    {
                        title: "Architettura (100% Locale, Sicura ed Indipendente)",
                        list: [
                            { label: "Modello di Linguaggio", text: "LLM Open-Source per l'interpretazione del linguaggio naturale senza intermediazioni esterne." },
                            { label: "Gestione Conoscenza (RAG)", text: "Recupero contestuale di tabelle e metadati per un dialogo coerente ed esatto." },
                            { label: "Versatilità Applicativa", text: "Container Docker pronto a porsi come ponte su qualsiasi ecosistema dati esistente." }
                        ]
                    }
                ],
                tech: ["Python", "LLM Locali", "RAG (AI)", "Facilitazione Dati", "Docker", "Embedding Models"],
                client: "Progetto Personale",
                date: "Giugno 2026"
            }
        },
        en: {
            ostro: {
                title: "Ostro",
                category: "Personal Project",
                tagline: "“The wind that carries your questions all the way to the data, and comes back with the answer.”",
                sections: [
                    {
                        title: "Context",
                        text: "This project is the first applied realization of a broader vision: positioning myself between different entities, environments and contexts to eliminate communication breakdowns and cumbersome processes. In traditional information systems, the distance between those seeking answers and the stored data creates barriers and rigid dependencies. This tool was built to sit in that intermediate position, translating complexity into natural dialogue."
                    },
                    {
                        title: "Solution",
                        text: "Ostro is an offline virtual agent capable of interpreting questions asked in natural language and instantly translating them into precise SQL queries. It removes the rigidity of traditional channels and makes the interaction fluid, immediate and driven by user experience. To protect the data environment, the agent operates in read-only mode."
                    },
                    {
                        title: "About the Demo",
                        text: "To show in practice how this mediation can simplify the relationship with information, the demo runs on a test database with simplified, simulated data (tide level measurements along the Italian coast), showing how anyone can produce reports and charts without technical obstacles."
                    },
                    {
                        title: "Architecture (100% Local, Secure and Independent)",
                        list: [
                            { label: "Language Model", text: "An open-source LLM for interpreting natural language without any external intermediation." },
                            { label: "Knowledge Management (RAG)", text: "Contextual retrieval of tables and metadata for a coherent, accurate dialogue." },
                            { label: "Applicative Versatility", text: "A Docker container ready to act as a bridge onto any existing data ecosystem." }
                        ]
                    }
                ],
                tech: ["Python", "Local LLMs", "RAG (AI)", "Data Facilitation", "Docker", "Embedding Models"],
                client: "Personal Project",
                date: "June 2026"
            }
        }
    };

    const DEMO_SCREENSHOTS = [
        "screen/Screenshot%20(1).png",
        "screen/Screenshot%20(2).png",
        "screen/Screenshot%20(3).png",
        "screen/Screenshot%20(4).png",
        "screen/Screenshot%20(5).png"
    ];

    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content-details');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');

    const owrInfoBanner = document.getElementById('owr-info-banner');
    const owrInfoClose = document.getElementById('owr-info-close');
    const owrInfoBadge = document.getElementById('owr-info-badge');
    const owrInfoTitle = document.getElementById('owr-info-title');
    const owrInfoDesc = document.getElementById('owr-info-desc');
    const owrInfoNote = document.getElementById('owr-info-note');
    const owrInfoCta = document.getElementById('owr-info-cta');

    // Wind info banner: opened by clicking any cardinal point on the rosa
    // dei venti (see buildWindRose below), always centered over the
    // compass itself (see .owr-info-banner in style.css) so it appears in
    // the same predictable spot regardless of which wind was clicked.
    // Only the active wind (Ostro) gets a CTA through to the full project
    // specs modal.
    function showWindBanner(wind) {
        if (!owrInfoBanner) return;
        const labels = translations[currentLang].windrose;
        const desc = (labels.descriptions && labels.descriptions[wind.name]) || '';

        owrInfoBadge.textContent = wind.letter;
        owrInfoTitle.textContent = wind.name;
        owrInfoDesc.textContent = desc;

        if (wind.active) {
            owrInfoCta.textContent = labels.viewProject;
            owrInfoCta.onclick = () => { hideWindBanner(); openOstroModal(); };
            owrInfoNote.textContent = '';
        } else {
            owrInfoCta.textContent = '';
            owrInfoCta.onclick = null;
            owrInfoNote.textContent = labels.comingSoonNote;
        }

        owrInfoBanner.classList.add('open');
        currentBannerWind = wind;
    }

    function hideWindBanner() {
        if (!owrInfoBanner) return;
        owrInfoBanner.classList.remove('open');
        currentBannerWind = null;
    }

    if (owrInfoClose) owrInfoClose.addEventListener('click', hideWindBanner);

    function getOstroData() {
        return (projectsData[currentLang] || projectsData.it).ostro;
    }

    // The "previous scheda": Ostro's specs, each old paragraph now a titled card.
    function renderOstroSpecs() {
        const project = getOstroData();
        if (!modal || !modalContent) return;
        const labels = translations[currentLang].modal;

        const techHtml = project.tech.map(t => `<span>${t}</span>`).join('');

        const cardsHtml = project.sections.map((section, i) => {
            const textHtml = section.text ? `<p>${section.text}</p>` : '';
            const listHtml = section.list
                ? `<ul class="spec-card-list">${section.list.map(item => `<li><strong>${item.label}:</strong> ${item.text}</li>`).join('')}</ul>`
                : '';
            return `
                <div class="spec-card" tabindex="0" role="button" aria-pressed="false" aria-label="${section.title}" style="animation-delay: ${i * 0.1}s;">
                    <div class="spec-card-inner">
                        <div class="spec-card-face spec-card-front">
                            <span class="spec-card-num">0${i + 1}</span>
                            <h5>${section.title}</h5>
                            <span class="spec-card-hint">${labels.flipHint}</span>
                        </div>
                        <div class="spec-card-face spec-card-back">
                            ${textHtml}${listHtml}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        modalContent.innerHTML = `
            <span class="modal-detail-tag">${project.category}</span>
            <h3 class="modal-detail-title">${project.title}</h3>
            <p class="modal-detail-tagline">${project.tagline}</p>

            <div class="modal-meta-grid">
                <div class="modal-meta-item">
                    <h5>${labels.scopeLabel}</h5>
                    <p>${project.client}</p>
                </div>
                <div class="modal-meta-item">
                    <h5>${labels.dateLabel}</h5>
                    <p>${project.date}</p>
                </div>
                <div class="modal-meta-item" style="grid-column: span 2;">
                    <h5>${labels.skillsLabel}</h5>
                    <div class="modal-tech-list">
                        ${techHtml}
                    </div>
                </div>
            </div>

            <div class="spec-cards">${cardsHtml}</div>

            <div class="modal-btn-row">
                <button class="btn btn-primary modal-view-demo-btn">${labels.viewDemo}</button>
                <button class="btn btn-secondary modal-close-btn">${labels.close}</button>
            </div>
        `;

        currentModalView = 'specs';
        modalContent.scrollTop = 0;

        modalContent.querySelectorAll('.spec-card').forEach(card => {
            const toggleFlip = () => {
                const flipped = card.classList.toggle('flipped');
                card.setAttribute('aria-pressed', String(flipped));
            };
            card.addEventListener('click', toggleFlip);
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFlip();
                }
            });
        });

        const demoBtn = modalContent.querySelector('.modal-view-demo-btn');
        if (demoBtn) demoBtn.addEventListener('click', renderOstroDemo);
        const closeBtn = modalContent.querySelector('.modal-close-btn');
        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        attachMagneticButtons(modalContent);
    }

    // The demo: just the 5 screenshots, uncaptioned for now.
    function renderOstroDemo() {
        if (!modal || !modalContent) return;
        const project = getOstroData();
        const labels = translations[currentLang].modal;

        const imagesHtml = DEMO_SCREENSHOTS.map(src => `
            <div class="demo-screen-wrapper" tabindex="0" role="button" aria-label="${labels.enlarge}">
                <img src="${src}" alt="${labels.demoAlt}" loading="lazy">
            </div>
        `).join('');

        modalContent.innerHTML = `
            <span class="modal-detail-tag">${project.category}</span>
            <h3 class="modal-detail-title">${labels.demoHeading}</h3>

            <div class="demo-screens">${imagesHtml}</div>

            <div class="modal-btn-row">
                <button class="btn btn-primary modal-back-btn">${labels.backToSpecs}</button>
                <button class="btn btn-secondary modal-close-btn">${labels.close}</button>
            </div>
        `;

        currentModalView = 'demo';
        modalContent.scrollTop = 0;

        modalContent.querySelectorAll('.demo-screen-wrapper').forEach(wrapper => {
            const img = wrapper.querySelector('img');
            const open = () => openLightbox(img.src, img.alt);
            wrapper.addEventListener('click', open);
            wrapper.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    open();
                }
            });
        });

        const backBtn = modalContent.querySelector('.modal-back-btn');
        if (backBtn) backBtn.addEventListener('click', renderOstroSpecs);
        const closeBtn = modalContent.querySelector('.modal-close-btn');
        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        attachMagneticButtons(modalContent);
    }

    // Screenshot lightbox: full-screen view of a clicked demo screenshot.
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxOverlay = document.getElementById('lightbox-overlay');

    function openLightbox(src, alt) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightboxImg.alt = alt || '';
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

    function openOstroModal(options) {
        if (!modal) return;
        renderOstroSpecs();
        if (!(options && options.keepOpen === true)) {
            modal.classList.add('open');
        }
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        ostroModalOpen = true;
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        ostroModalOpen = false;
        currentModalView = null;
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    
    window.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        if (lightbox && lightbox.classList.contains('open')) {
            closeLightbox();
        } else if (modal && modal.classList.contains('open')) {
            closeModal();
        } else if (currentBannerWind) {
            hideWindBanner();
        }
    });

    // --- 5b. Rosa dei Venti (project selector) ---
    // Ported from rosa-dei-venti.html: an interactive compass where each
    // cardinal point is a project slot. Only Ostro is active for now;
    // clicking it opens its specs in the modal above instead of navigating
    // to a separate URL.
    (function buildWindRose() {
        const root = document.getElementById('owr-root');
        const needle = document.getElementById('owr-needle');
        const svg = document.getElementById('owr-star');
        if (!root || !needle || !svg) return;

        const OWR_WINDS = [
            { name: "Bora", letter: "N", bearing: 0, active: false },
            { name: "Levante", letter: "E", bearing: 90, active: false },
            { name: "Ostro", letter: "S", bearing: 180, active: true },
            { name: "Ponente", letter: "O", bearing: 270, active: false }
        ];
        const OWR_MINOR_BEARINGS = [45, 135, 225, 315];

        const LABEL_RADIUS = 46;
        const MAJOR_TIP_R = 43;
        const MINOR_TIP_R = 27;
        const SPIKE_BASE_R = 5;
        const SPIKE_HALF_ANGLE = 6.5;

        const NS = "http://www.w3.org/2000/svg";

        // Tracks the needle's actual accumulated rotation (not clamped to
        // 0-360), so each move can take the shortest angular path instead
        // of the raw numeric interpolation CSS would otherwise do (e.g.
        // 270deg -> 0deg jumping the "long way" through 260, 250, ... 10, 0
        // instead of the short 90deg swing) — that unwanted long spin is
        // what read as "jerky" between certain wind pairs.
        let needleRotation = 0;
        function setNeedleBearing(bearing) {
            const delta = ((bearing - needleRotation) % 360 + 540) % 360 - 180;
            needleRotation += delta;
            needle.style.transform = "translate(-50%, -100%) rotate(" + needleRotation + "deg)";
        }

        function polar(bearingDeg, radiusPct) {
            const rad = (bearingDeg - 90) * (Math.PI / 180);
            return [50 + radiusPct * Math.cos(rad), 50 + radiusPct * Math.sin(rad)];
        }

        function spikePoints(bearingDeg, tipR) {
            const tip = polar(bearingDeg, tipR);
            const left = polar(bearingDeg - SPIKE_HALF_ANGLE, SPIKE_BASE_R);
            const right = polar(bearingDeg + SPIKE_HALF_ANGLE, SPIKE_BASE_R);
            return [left, tip, right].map(p => p[0].toFixed(2) + "," + p[1].toFixed(2)).join(" ");
        }

        function addPolygon(points, className) {
            const el = document.createElementNS(NS, "polygon");
            el.setAttribute("points", points);
            el.setAttribute("class", className);
            svg.appendChild(el);
            return el;
        }

        const defs = document.createElementNS(NS, "defs");
        defs.innerHTML =
            '<linearGradient id="owrGradActive" x1="0%" y1="0%" x2="100%" y2="100%">' +
            '<stop offset="0%" stop-color="#2b6ef5"/><stop offset="100%" stop-color="#22d3ee"/>' +
            '</linearGradient>' +
            '<linearGradient id="owrGradInactive" x1="0%" y1="0%" x2="100%" y2="100%">' +
            '<stop offset="0%" stop-color="#28324a"/><stop offset="100%" stop-color="#3a4457"/>' +
            '</linearGradient>';
        svg.appendChild(defs);

        OWR_MINOR_BEARINGS.forEach(b => {
            const p = addPolygon(spikePoints(b, MINOR_TIP_R), "owr-spike-minor");
            p.setAttribute("fill", "#28324a");
        });

        // Intercardinal labels (NE/SE/SO/NO) on the 4 decorative minor
        // spikes — kept in Italian nautical form in both languages, same
        // convention as the N/E/S/O badges on the main points.
        const OWR_INTERCARDINAL_LABELS = { 45: "NE", 135: "SE", 225: "SO", 315: "NO" };
        OWR_MINOR_BEARINGS.forEach(b => {
            const pos = polar(b, MINOR_TIP_R + 6);
            const label = document.createElementNS(NS, "text");
            label.setAttribute("x", pos[0].toFixed(2));
            label.setAttribute("y", pos[1].toFixed(2));
            label.setAttribute("text-anchor", "middle");
            label.setAttribute("dominant-baseline", "middle");
            label.setAttribute("class", "owr-intercardinal-label");
            label.textContent = OWR_INTERCARDINAL_LABELS[b] || "";
            svg.appendChild(label);
        });

        // Degree tick marks: one every 15°, skipping the 8 bearings that
        // already have a spike (cardinal + intercardinal), just to fill
        // the otherwise-empty ring between the spikes and the frame —
        // purely decorative, like the graduation on a real compass card.
        for (let b = 0; b < 360; b += 15) {
            if (b % 45 === 0) continue;
            const inner = polar(b, 40);
            const outer = polar(b, 44);
            const tick = document.createElementNS(NS, "line");
            tick.setAttribute("x1", inner[0].toFixed(2));
            tick.setAttribute("y1", inner[1].toFixed(2));
            tick.setAttribute("x2", outer[0].toFixed(2));
            tick.setAttribute("y2", outer[1].toFixed(2));
            tick.setAttribute("class", "owr-tick");
            svg.appendChild(tick);
        }

        OWR_WINDS.forEach(wind => {
            const cls = "owr-spike-major" + (wind.active ? " owr-spike-active" : "");
            const p = addPolygon(spikePoints(wind.bearing, MAJOR_TIP_R), cls);
            p.setAttribute("fill", wind.active ? "url(#owrGradActive)" : "url(#owrGradInactive)");
        });

        OWR_WINDS.forEach((wind, i) => {
            const [x, y] = polar(wind.bearing, LABEL_RADIUS);

            const beam = document.createElement("div");
            beam.className = "owr-beam";
            beam.style.transform = "rotate(" + wind.bearing + "deg)";
            root.appendChild(beam);

            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "owr-point " + (wind.active ? "owr-point--active" : "owr-point--inactive");
            btn.style.left = x + "%";
            btn.style.top = y + "%";
            btn.style.animationDelay = (i * 0.08) + "s";

            const tooltipEl = document.createElement('span');
            tooltipEl.className = 'owr-tooltip';
            const dotEl = document.createElement('span');
            dotEl.className = 'owr-dot';
            const labelEl = document.createElement('span');
            labelEl.className = 'owr-label';
            labelEl.textContent = wind.name;
            const badgeEl = document.createElement('span');
            badgeEl.className = 'owr-badge';
            badgeEl.textContent = wind.letter;

            btn.appendChild(tooltipEl);
            btn.appendChild(dotEl);
            btn.appendChild(labelEl);
            btn.appendChild(badgeEl);

            btn.addEventListener("mouseenter", () => {
                setNeedleBearing(wind.bearing);
                root.classList.add("is-aiming");
                beam.style.width = LABEL_RADIUS + "%";
                beam.style.opacity = "1";
            });
            btn.addEventListener("mouseleave", () => {
                root.classList.remove("is-aiming");
                beam.style.width = "0";
                beam.style.opacity = "0";
            });
            btn.addEventListener("focus", () => btn.dispatchEvent(new Event("mouseenter")));
            btn.addEventListener("blur", () => btn.dispatchEvent(new Event("mouseleave")));

            btn.addEventListener("click", () => {
                showWindBanner(wind);
            });

            root.appendChild(btn);
            owrPointButtons.push({ wind, btn, tooltipEl });
        });

        // Let the needle track the cursor continuously, anywhere on the
        // page — not just over the compass itself — so it reads as truly
        // following the mouse rather than only reacting when hovering it.
        // rAF-throttled since mousemove can fire far more often than the
        // screen refreshes. Skipped under reduced-motion, where the needle
        // only moves for the discrete point-hover/focus interactions above.
        if (!prefersReducedMotion) {
            let trackingRaf = null;
            let lastClientX = 0;
            let lastClientY = 0;
            window.addEventListener("mousemove", e => {
                // Always keep the latest pointer position, but only ever
                // schedule one pending frame — otherwise a queued frame
                // would apply whichever position happened to trigger it,
                // not the freshest one by the time it actually runs.
                lastClientX = e.clientX;
                lastClientY = e.clientY;
                if (trackingRaf !== null) return;
                trackingRaf = requestAnimationFrame(() => {
                    trackingRaf = null;
                    const rect = root.getBoundingClientRect();
                    const dx = lastClientX - (rect.left + rect.width / 2);
                    const dy = lastClientY - (rect.top + rect.height / 2);
                    const bearing = (Math.atan2(dy, dx) * 180 / Math.PI + 90 + 360) % 360;
                    setNeedleBearing(bearing);
                    root.classList.add("is-aiming");
                });
            });
            // Only fall back to idle drift once the cursor actually leaves
            // the browser window (not just the compass itself).
            document.documentElement.addEventListener("mouseleave", () => {
                root.classList.remove("is-aiming");
            });
        }

        updateWindroseLabels();
    })();

    function updateWindroseLabels() {
        const labels = translations[currentLang] && translations[currentLang].windrose;
        if (!labels) return;
        owrPointButtons.forEach(({ wind, btn, tooltipEl }) => {
            tooltipEl.textContent = labels.tooltip;
            btn.setAttribute("aria-label", wind.name + labels.ariaSuffix);
        });
        if (currentBannerWind) {
            showWindBanner(currentBannerWind);
        }
    }

    // --- 6+7. Header Shrink & Scroll Progress ---
    // Both driven by scroll, so they're batched into one rAF-throttled handler:
    // reading/writing on every raw scroll event can fire far faster than the
    // display refresh and cause visible stutter, especially on trackpads.
    const header = document.querySelector('.header');
    const scrollProgress = document.getElementById('scroll-progress');
    if (header || scrollProgress) {
        let scrollTicking = false;
        const updateOnScroll = () => {
            if (header) {
                header.classList.toggle('header-scrolled', window.scrollY > 40);
            }
            if (scrollProgress) {
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const pct = docHeight > 0 ? window.scrollY / docHeight : 0;
                scrollProgress.style.transform = `scaleX(${pct})`;
            }
            scrollTicking = false;
        };
        window.addEventListener('scroll', () => {
            if (!scrollTicking) {
                requestAnimationFrame(updateOnScroll);
                scrollTicking = true;
            }
        }, { passive: true });
        updateOnScroll();
    }

    // --- 8. Scrollspy: highlight active nav link ---
    const spySections = document.querySelectorAll('main section[id]');
    const spyNavLinks = document.querySelectorAll('.nav-link');
    if (spySections.length && spyNavLinks.length) {
        const spyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    spyNavLinks.forEach(link => {
                        link.classList.toggle('active-link', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, { rootMargin: '-50% 0px -50% 0px' });
        spySections.forEach(sec => spyObserver.observe(sec));
    }

    // Small helper: only ever run `apply` once per animation frame, always
    // with the latest pointer position. Raw mousemove can fire far more
    // often than the screen refreshes, so writing styles on every single
    // event (as the previous version did) causes stutter under fast
    // mouse movement — this keeps every effect locked to the frame rate.
    // Kept top-level (not nested in the reduced-motion check below) so it —
    // and attachMagneticButtons, which depends on it — are always callable,
    // including from the Ostro modal renderers defined earlier in this file.
    function rafThrottle(apply) {
        let queued = null;
        let rafId = null;
        const flush = () => {
            apply(queued);
            rafId = null;
        };
        return {
            update(value) {
                queued = value;
                if (rafId === null) rafId = requestAnimationFrame(flush);
            },
            cancel() {
                if (rafId !== null) cancelAnimationFrame(rafId);
                rafId = null;
            }
        };
    }

    // Gives every .btn inside `container` the same magnetic hover pull as
    // the static buttons below. Needed because the Ostro modal's buttons
    // (specs/demo views) are (re)built via innerHTML well after the initial
    // page-load pass, so that pass never saw them — called again after each
    // render in renderOstroSpecs()/renderOstroDemo().
    function attachMagneticButtons(container) {
        if (prefersReducedMotion || !container) return;
        container.querySelectorAll('.btn').forEach(btn => {
            const magnet = rafThrottle(({ x, y }) => {
                btn.style.transform = `translate(${x * 0.15}px, ${y * 0.3}px)`;
            });
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                magnet.update({
                    x: e.clientX - rect.left - rect.width / 2,
                    y: e.clientY - rect.top - rect.height / 2
                });
            });
            btn.addEventListener('mouseleave', () => {
                magnet.cancel();
                btn.style.transform = '';
            });
        });
    }

    if (!prefersReducedMotion) {

        // --- 9. Hero Cursor Spotlight ---
        // Moves a pre-rendered glow with translate3d (GPU compositor only,
        // no repaint) instead of recalculating a gradient's center.
        const heroSection = document.getElementById('hero');
        const heroGlow = document.getElementById('hero-glow');
        if (heroSection && heroGlow) {
            const glow = rafThrottle(({ x, y }) => {
                heroGlow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            });
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                glow.update({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            });
        }

        // --- 10. Magnetic Buttons ---
        attachMagneticButtons(document);

        // --- 11. 3D Tilt on Project Cards ---
        document.querySelectorAll('.project-card').forEach(card => {
            const tilt = rafThrottle(({ rx, ry }) => {
                card.style.transform = `perspective(1000px) rotateY(${rx}deg) rotateX(${ry}deg) translateY(-4px)`;
            });
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.15s ease-out';
            });
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                tilt.update({ rx: x * 6, ry: -y * 6 });
            });
            card.addEventListener('mouseleave', () => {
                tilt.cancel();
                card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                card.style.transform = '';
            });
        });
    }

});
