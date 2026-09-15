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
                item2: { desc: "Gestione della sala, coordinamento dei runner e del flusso piatti dalla cucina (gestione del pass) in contesti ad alto profilo. Formazione del personale e cura dettagliata del servizio clienti." },
                item3: { desc: "Ricerca e sperimentazione su modelli di embedding per la ricerca semantica, analisi comparativa di modelli e studio di tecniche avanzate di Natural Language Processing (NLP)." },
                item4: { desc: "Sviluppo in React Native per l'applicazione mobile di delivery (gestione flussi clienti e corrieri), curando la manutenzione del codice e l'ottimizzazione dell'esperienza utente." },
                item5: { title: "Cameriere / Barista", desc: "Servizio autonomo e gestione di eventi formali e di alto profilo nel centro storico di Venezia. Collaborazione alla logistica e gestione delle materie prime." },
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
                prev: "Precedente",
                next: "Successivo",
                card1: { title: "Facilitazione tra Enti", desc: "L'ho capito lavorando tanto sui dati meteomarini del MOSE quanto in sala in un ristorante di alto livello: il problema non è mai la tecnologia o le persone in sé, ma la distanza tra chi parla linguaggi diversi. Il mio compito è colmarla." },
                card2: { title: "Fluidità delle Relazioni", desc: "Ho visto troppi processi rigidi rompersi proprio nel momento in cui contano di più, che fosse un'automazione o un servizio a un tavolo pieno. Preferisco costruire flussi che si adattano alle persone, non il contrario." },
                card3: { title: "Abbattimento Barriere", desc: "Un modello che non capisce una domanda, un dato che non dialoga con un altro sistema, un cliente che non si sente ascoltato: per me sono la stessa incomunicabilità travestita diversamente. La affronto ovunque la trovi." },
                card4: { title: "Coordinamento & Empatia", desc: "Anni passati a coordinare sale e cucine nei momenti di massima pressione mi hanno insegnato a leggere le persone in tempo reale. È la stessa lucidità che porto quando gestisco un progetto o una relazione complicata." }
            },
            projects: {
                sectionTitle: "Progetti Personali",
                windroseName: "Rosa dei Venti",
                windroseDesc: "Un selettore di progetti a forma di bussola nautica: ogni punto cardinale è un'iniziativa personale. Passa il mouse per orientare l'ago, clicca un vento per scoprirlo."
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
                    Ostro: "Vento caldo e umido da sud: spesso annuncia un cambiamento del tempo, con la pioggia in arrivo. L'agente Ostro fa lo stesso con i dati: li legge al posto tuo e ti riporta la risposta già pronta, in numeri e grafici, prima ancora che tu debba andarla a cercare.",
                    Ponente: "Vento da ovest, generalmente mite e regolare: accompagna spesso giornate serene nelle stagioni intermedie."
                }
            },
            contact: {
                sectionTitle: "Contatti",
                lead: "Se hai in mente un progetto, una collaborazione o semplicemente vuoi farmi delle domande sul mio percorso, puoi scrivermi direttamente. Sono basato a Venezia.",
                emailBtn: "Invia una Mail"
            },
            footer: {
                rights: "Tutti i diritti riservati.",
                backToTop: "Torna all'inizio"
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
                item2: { desc: "Dining room management, coordination of runners and the flow of dishes from the kitchen (pass management) in high-profile settings. Staff training and meticulous attention to customer service." },
                item3: { desc: "Research and experimentation on embedding models for semantic search, comparative analysis of models, and study of advanced Natural Language Processing (NLP) techniques." },
                item4: { desc: "React Native development for the delivery mobile app (managing customer and courier flows), handling code maintenance and user experience optimization." },
                item5: { title: "Waiter / Barista", desc: "Independent service and management of formal, high-profile events in the historic center of Venice. Collaboration on logistics and supply management." },
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
                prev: "Previous",
                next: "Next",
                card1: { title: "Facilitation Between Organizations", desc: "I learned this working on MOSE's tide-forecast data as much as I did running the floor at a high-end restaurant: the problem is never the technology or the people themselves, but the distance between those speaking different languages. My job is closing that gap." },
                card2: { title: "Fluidity of Relationships", desc: "I've seen too many rigid processes break exactly when it mattered most, whether it was an automation or table service on a packed night. I'd rather build flows that adapt to people, not the other way around." },
                card3: { title: "Breaking Down Barriers", desc: "A model that doesn't understand a question, data that won't talk to another system, a customer who doesn't feel heard: to me these are the same breakdown in communication wearing different disguises. I tackle it wherever I find it." },
                card4: { title: "Coordination & Empathy", desc: "Years spent coordinating dining rooms and kitchens under real pressure taught me to read people in real time. It's the same clarity I bring to managing a project or a complicated relationship." }
            },
            projects: {
                sectionTitle: "Personal Projects",
                windroseName: "Rosa dei Venti",
                windroseDesc: "A project selector shaped like a nautical compass: each cardinal point is a personal project. Hover to steer the needle, click a wind to discover it."
            },
            windrose: {
                tooltip: "Learn more",
                ariaSuffix: " — learn more",
                closeBanner: "Close",
                viewProject: "Discover the project",
                comingSoonNote: "This wind will get its own project soon too.",
                descriptions: {
                    Bora: "A cold, dry northeasterly wind typical of the northern Adriatic, often blowing in sudden, violent gusts.",
                    Levante: "A humid easterly wind off the open sea, bringing overcast skies and a milder, salty air.",
                    Ostro: "A warm, humid southerly wind that often signals a change in the weather, with rain on the way. Ostro the agent does the same with data: it reads it for you and hands back the answer already worked out, in numbers and charts, before you'd even think to look for it.",
                    Ponente: "A generally mild, steady westerly wind, often accompanying clear skies in the shoulder seasons."
                }
            },
            contact: {
                sectionTitle: "Contact",
                lead: "If you have a project or collaboration in mind, or simply want to ask about my background, feel free to write to me directly. I'm based in Venice.",
                emailBtn: "Send an Email"
            },
            footer: {
                rights: "All rights reserved.",
                backToTop: "Back to top"
            },
            modal: {
                close: "Close",
                scopeLabel: "Scope",
                dateLabel: "Release Date",
                skillsLabel: "Skills Applied",
                viewDemo: "View the Demo",
                backToSpecs: "Back to Specs",
                demoHeading: "Demo — Screenshots",
                demoAlt: "Ostro demo screenshot",
                flipHint: "Click to read",
                enlarge: "Enlarge"
            },
            meta: {
                title: "Tobia Barbini | Process & Interaction Facilitator",
                description: "Portfolio of Tobia Barbini. I design solutions and position myself between organizations, environments and people to solve relational problems, making communication fluid, natural and effective."
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

        const pageTitle = getTranslation(lang, 'meta.title');
        if (pageTitle) document.title = pageTitle;
        const metaDesc = document.querySelector('meta[name="description"]');
        const pageDesc = getTranslation(lang, 'meta.description');
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

    // --- 4c. Focus Carousel (Ambiti di Competenza) ---
    // A 3D wheel with 4 fixed slots (front/right/back/left — see the
    // .focus-card--* rules in style.css). Each card's distance from the
    // active index decides which slot class it gets; the animation is just
    // the CSS transition on .focus-card firing because that class (and so
    // its transform) changed. Advancing "next" shifts every card exactly
    // one slot at once — front→left, right→front, back→right, left→back —
    // which is what makes it read as the whole wheel turning rather than a
    // single card swap.
    const focusTrack = document.getElementById('focus-track');
    const focusCards = focusTrack ? focusTrack.querySelectorAll('.focus-card') : [];
    const focusDots = document.querySelectorAll('.focus-dot');
    const focusPrevBtn = document.getElementById('focus-prev');
    const focusNextBtn = document.getElementById('focus-next');
    const focusSlotClasses = ['focus-card--front', 'focus-card--right', 'focus-card--back', 'focus-card--left'];

    if (focusTrack && focusCards.length) {
        let focusIndex = 0;
        const focusCount = focusCards.length;

        const renderFocus = () => {
            focusCards.forEach((card, i) => {
                const slot = (i - focusIndex + focusCount) % focusCount;
                card.classList.remove(...focusSlotClasses);
                card.classList.add(focusSlotClasses[slot % focusSlotClasses.length]);
            });
            focusDots.forEach((dot, i) => dot.classList.toggle('active', i === focusIndex));
        };

        const goToFocus = (index) => {
            focusIndex = (index + focusCount) % focusCount;
            renderFocus();
        };

        if (focusPrevBtn) focusPrevBtn.addEventListener('click', () => goToFocus(focusIndex - 1));
        if (focusNextBtn) focusNextBtn.addEventListener('click', () => goToFocus(focusIndex + 1));
        focusDots.forEach((dot, i) => dot.addEventListener('click', () => goToFocus(i)));

        // Basic touch swipe, since "like cards" implies a swipeable feel on mobile.
        let focusTouchStartX = null;
        focusTrack.addEventListener('touchstart', (e) => {
            focusTouchStartX = e.touches[0].clientX;
        }, { passive: true });
        focusTrack.addEventListener('touchend', (e) => {
            if (focusTouchStartX === null) return;
            const deltaX = e.changedTouches[0].clientX - focusTouchStartX;
            if (Math.abs(deltaX) > 40) {
                goToFocus(deltaX < 0 ? focusIndex + 1 : focusIndex - 1);
            }
            focusTouchStartX = null;
        }, { passive: true });

        renderFocus();
    }

    // --- 5. Ostro Project Data & Modal (specs + demo screenshots) ---
    const projectsData = {
        it: {
            ostro: {
                title: "Ostro",
                category: "Progetto Personale",
                tagline: "“Il vento che porta le tue domande fino in fondo ai dati, e torna con la risposta.”",
                sections: [
                    {
                        title: "Contesto — Il Primo di Molti Ponti",
                        text: "Questo progetto rappresenta la prima concretizzazione applicativa di una visione più ampia: interporsi tra entità, ambienti e contesti diversi per eliminare l'incomunicabilità ed i passaggi macchinosi. Nelle strutture informative tradizionali, la distanza tra chi cerca risposte ed i dati memorizzati crea barriere e dipendenze rigide. Questo strumento nasce per collocarsi in posizione intermedia, traducendo la complessità in un dialogo naturale."
                    },
                    {
                        title: "La Soluzione — Mediazione tra Umano e Dati",
                        text: "Ostro è un agente virtuale offline in grado di interpretare domande formulate in linguaggio naturale e tradurle istantaneamente in query SQL precise. Elimina la rigidità dei canali tradizionali e rende l'interazione fluida, immediata e guidata dall'esperienza utente. Per garantire la tutela dell'ambiente dati, l'agente opera in sola lettura (READ-ONLY)."
                    },
                    {
                        title: "La Demo & l'Autonomia di Consultazione",
                        text: "Per mostrare sul campo come la mediazione possa semplificare il rapporto con l'informazione, la demo si appoggia su un database di prova con dati simulati (estrazione ed analisi dei trend meteomarini della laguna di Venezia), evidenziando come chiunque possa ricavare report e grafici senza ostacoli tecnici."
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
                        title: "Context — The First of Many Bridges",
                        text: "This project is the first applied realization of a broader vision: positioning myself between different entities, environments and contexts to eliminate communication breakdowns and cumbersome processes. In traditional information systems, the distance between those seeking answers and the stored data creates barriers and rigid dependencies. This tool was built to sit in that intermediate position, translating complexity into natural dialogue."
                    },
                    {
                        title: "The Solution — Mediation Between Human and Data",
                        text: "Ostro is an offline virtual agent capable of interpreting questions asked in natural language and instantly translating them into precise SQL queries. It removes the rigidity of traditional channels and makes the interaction fluid, immediate and driven by user experience. To protect the data environment, the agent operates in read-only mode."
                    },
                    {
                        title: "The Demo & Autonomous Querying",
                        text: "To show in practice how this mediation can simplify the relationship with information, the demo runs on a test database with simulated data (extraction and analysis of meteo-marine trends in the Venice lagoon), showing how anyone can produce reports and charts without technical obstacles."
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

    // N/E/S/O -> which side of its point the banner should float on
    // (below / above / left-of / right-of — see the [data-dir] rules in
    // style.css).
    const OWR_BANNER_DIR = { N: 'n', E: 'e', S: 's', O: 'w' };

    // Wind info banner: opened by clicking any cardinal point on the rosa
    // dei venti (see buildWindRose below), and positioned right next to
    // that point (wind.anchorX/anchorY, set in buildWindRose) rather than
    // in a fixed spot. Only the active wind (Ostro) gets a CTA through to
    // the full project specs modal.
    function showWindBanner(wind) {
        if (!owrInfoBanner) return;
        const labels = translations[currentLang].windrose;
        const desc = (labels.descriptions && labels.descriptions[wind.name]) || '';

        if (typeof wind.anchorX === 'number') {
            owrInfoBanner.style.left = wind.anchorX + '%';
            owrInfoBanner.style.top = wind.anchorY + '%';
            owrInfoBanner.dataset.dir = OWR_BANNER_DIR[wind.letter] || 's';
        }

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
                <div class="spec-card" tabindex="0" role="button" aria-pressed="false" aria-label="${section.title}">
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
                <button class="btn btn-secondary modal-back-btn">${labels.backToSpecs}</button>
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

        OWR_WINDS.forEach(wind => {
            const cls = "owr-spike-major" + (wind.active ? " owr-spike-active" : "");
            const p = addPolygon(spikePoints(wind.bearing, MAJOR_TIP_R), cls);
            p.setAttribute("fill", wind.active ? "url(#owrGradActive)" : "url(#owrGradInactive)");

            if (wind.bearing === 0) {
                const tip = polar(0, MAJOR_TIP_R + 4);
                const mark = document.createElementNS(NS, "text");
                mark.setAttribute("x", tip[0]);
                mark.setAttribute("y", tip[1]);
                mark.setAttribute("text-anchor", "middle");
                mark.setAttribute("class", "owr-north-mark");
                mark.setAttribute("fill", "#e2e8f0");
                mark.setAttribute("font-size", "6");
                mark.textContent = "✦";
                svg.appendChild(mark);
            }
        });

        OWR_WINDS.forEach((wind, i) => {
            const [x, y] = polar(wind.bearing, LABEL_RADIUS);
            wind.anchorX = x;
            wind.anchorY = y;

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

    if (!prefersReducedMotion) {

        // Small helper: only ever run `apply` once per animation frame, always
        // with the latest pointer position. Raw mousemove can fire far more
        // often than the screen refreshes, so writing styles on every single
        // event (as the previous version did) causes stutter under fast
        // mouse movement — this keeps every effect locked to the frame rate.
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
        document.querySelectorAll('.btn').forEach(btn => {
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
