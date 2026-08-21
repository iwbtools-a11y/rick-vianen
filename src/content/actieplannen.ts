export type ActieplanBlock = {
  label: string;
  text: string;
};

export type Actieplan = {
  slug: string;
  typeName: string;
  typeLabel: string; // e.g. "Structuur" — matches quiz TYPE_NAMES
  navLabel: string; // "Quizuitslag · Strateeg"
  eyebrow: string; // "Jouw uitslag · Structuur"
  headingLines: [string, string];
  intro: string[];
  forWhom: string;
  hero: {
    src: string;
    alt: string;
    caption: string;
  };
  experience: {
    title: string;
    blocks: ActieplanBlock[];
  };
  recognize: {
    items: string[];
  };
  distinction: {
    title: string;
    paragraphs: string[];
    quote: { text: string; author: string };
    cost: string;
    benefit: string;
    testimonial: { quote: string; author: string };
    closing: string;
  };
  tool: {
    title: string;
    intro: string;
    fields: [string, string, string];
    sentences: {
      title: string;
      subtitle: string;
      items: [string, string, string, string];
    };
  };
};

export const actieplannen: Actieplan[] = [
  {
    slug: "strateeg",
    typeName: "Strateeg",
    typeLabel: "Structuur",
    navLabel: "Quizuitslag · Strateeg",
    eyebrow: "Jouw uitslag · Structuur",
    headingLines: [
      "Je weet precies wat je wil,",
      "nu maak je er een project van.",
    ],
    intro: [
      "Je vulde de quiz in en kwam eruit als de strateeg. Dat betekent niet dat je te weinig ambitie hebt, maar dat je er te veel hebt om los te laten rondslingeren. Je antwoorden gingen over veel beginnen en weinig afmaken, over doelen die in je hoofd zitten en nergens op papier staan, en over goed starten en na een paar weken verslappen.",
      "Ik ken dat. Ik heb lang gedacht dat de volgende stap een beter plan was. Het was een datum. Hieronder lees je wat er veranderde op de avond dat ik inschreef, en maak je van jouw grootste plan een project.",
    ],
    forWhom:
      "Voor iedereen met visie, energie en een lijst plannen, die aan het eind van het jaar merkt dat het meeste ervan nog een plan is.",
    hero: {
      src: "/images/quiz-actieplan-strateeg-hero.jpg",
      alt: "Rick op de tijdritfiets langs de Moezel",
      caption:
        "Een dag die eerst in mijn agenda stond, en pas daarna in mijn benen.",
    },
    experience: {
      title: "Van een idee naar een datum",
      blocks: [
        {
          label: "De avond van de inschrijving",
          text: "Vijf jaar geleden vond ik mensen die een IRONMAN doen niet goed bij hun hoofd. Toen ik het zelf wilde, heb ik het niet eerst uitgezocht. Ik heb ingeschreven en betaald voor Kopenhagen op een avond waarop ik nog geen idee had of ik het kon. Vanaf dat moment was het geen ambitie meer, maar een datum in augustus waar ik naartoe moest.",
        },
        {
          label: "Wat een datum met je doet",
          text: "Een plan zonder datum kun je jaren houden. Het kost niets, het levert niets op, en je kunt er eindeloos over praten. Een datum werkt terug: van augustus naar deze maand, naar deze week, naar morgenvroeg. Alles wat daarna kwam — de coach, het schema, de ochtenden om vijf uur — kwam uit die datum. Niet uit motivatie.",
        },
        {
          label: "Wat ik schrapte",
          text: "In het begin las ik wattages, vergeleek ik schema's en zocht ik de beste voeding uit. Dat voelt als trainen. Het is het niet. Op een bepaald moment bleven er drie dingen over die er echt toe deden, en ging de rest van mijn week naar die drie. Daar zat mijn winst, niet in het bijschaven van het plan.",
        },
      ],
    },
    recognize: {
      items: [
        "Je bent veel begonnen en hebt weinig afgemaakt. Je sprong van het een naar het ander.",
        "Je doelen zitten in je hoofd, maar staan nergens op papier.",
        "Je begint goed en na een paar weken verslapt het.",
        "Je wil schalen, maar je doet nog te veel zelf.",
        "Je hebt mensen om je heen, maar niemand houdt je ergens aan.",
      ],
    },
    distinction: {
      title: "Een plan of een project",
      paragraphs: [
        "Een plan en een project kunnen exact dezelfde inhoud hebben. Het verschil zit in drie dingen: er staat een datum op, er zijn een paar acties benoemd die er echt toe doen, en er is minstens één mens die weet dat je het doet. Mist er één van die drie, dan blijft het een plan — hoe goed het ook is uitgewerkt.",
        "Daarnaast is er een verschil tussen acties die je bezighouden en acties die je verder brengen. Lezen, vergelijken, verbeteren en organiseren voelen productief en zijn dat vaak niet. Wie eerlijk is over het resultaat dat hij wil, kiest de handelingen die het dichterbij brengen en laat de rest liggen.",
      ],
      quote: {
        text: "Dat begon bij gewoon inschrijven. Starten voordat je precies weet hoe het moet.",
        author: "Rick Vianen, over zijn eerste halve IRONMAN",
      },
      cost: "Je verliest je energie aan bewegen zonder richting. Aan het eind van het jaar heb je hard gewerkt, veel opgestart, en staat je grootste doel nog precies waar het stond.",
      benefit:
        "Een doel met een datum, drie acties die er echt toe doen, en iemand die het met je bijhoudt. Daarmee wordt consistentie geen kwestie van discipline meer, maar van een afspraak die al staat.",
      testimonial: {
        quote: "Je zit in een treintje en dat treintje gaat verder.",
        author: "Barbara, oud-deelnemer MOVE",
      },
      closing:
        "Je hebt geen beter plan nodig. Je hebt een datum nodig, en iemand die weet dat hij eraan komt.",
    },
    tool: {
      title: "Van plan naar project",
      intro:
        "Twee delen. Eerst benoem je de drie acties die er de komende weken echt toe doen. Daarna zet je de datum en de afspraak vast. Zonder dat tweede deel is dit alleen een lijstje.",
      fields: [
        "De actie die er echt toe doet",
        "Hoe vaak per week",
        "Wat ik daarvoor laat",
      ],
      sentences: {
        title: "De vier zinnen die het een project maken",
        subtitle:
          "Vul dit vandaag in, niet volgende week. De vierde zin is de belangrijkste.",
        items: [
          "Dit is af op deze datum",
          "Dit is de eerste actie, deze week",
          "Dit laat ik ervoor liggen",
          "Deze persoon weet het en vraagt me ernaar",
        ],
      },
    },
  },
  {
    slug: "uitsteller",
    typeName: "Uitsteller",
    typeLabel: "Actie",
    navLabel: "Quizuitslag · Uitsteller",
    eyebrow: "Jouw uitslag · Actie",
    headingLines: [
      "Je weet wat de volgende stap is,",
      "vanaf nu zet je hem ook.",
    ],
    intro: [
      "Je vulde de quiz in en kwam eruit als de uitsteller. Dat is geen luiheid. Uit je antwoorden komt iets anders: je weet wat je moet doen, je weet zelfs wat de volgende stap is, en toch komt hij er niet. Wat ertussen zit is twijfel, drukte, of het gevoel dat de timing nog niet klopt.",
      "Ik heb dat gesprek honderden keren met mezelf gehad. Ik had bijna nooit zin, en ik ging bijna altijd. Niet omdat ik discipline heb, maar omdat ik één regel gebruikte die je hieronder zelf krijgt.",
    ],
    forWhom:
      "Voor iedereen die de kennis en de ervaring al heeft, en merkt dat de stap die er echt toe doet steeds naar volgende week schuift.",
    hero: {
      src: "/images/quiz-actieplan-uitsteller-hero.jpg",
      alt: "Rick finisht in Kopenhagen",
      caption: "Kopenhagen. De stap die ik het langst uitstelde, was de eerste.",
    },
    experience: {
      title: "Bijna nooit zin, bijna altijd gegaan",
      blocks: [
        {
          label: "De vijf minuten",
          text: "Mijn regel was simpel: ik ga vijf minuten. Schoenen aan, deur uit, en na vijf minuten mag ik stoppen zonder dat het meetelt als opgeven. Ik heb die vijf minuten honderden keren gebruikt en ben bijna nooit gestopt. Niet omdat ik doorbeet, maar omdat het gevoel dat me tegenhield al voorbij was voordat de vijf minuten om waren.",
        },
        {
          label: "De onderhandeling die ik nooit won",
          text: "Voor die regel probeerde ik het met wilskracht. Ik ging in discussie met mezelf op de bank en verloor. Vanavond heb ik meer energie. Ik ben geen ochtendmens. Ik ben gisteren ook geweest, dus vandaag mag ik het overslaan. Het klinkt allemaal redelijk, en het is allemaal bedacht op het moment dat er nog niets was gebeurd.",
        },
        {
          label: "Hoe of of",
          text: "Jarenlang was mijn vraag hoe ik iets zou aanpakken. Bij de IRONMAN heb ik die vraag één keer omgedraaid: eerst besluiten dat het gebeurt, daarna uitzoeken hoe. Het hoe kwam er wel. Het besluit was het enige dat ik zelf moest doen.",
        },
      ],
    },
    recognize: {
      items: [
        "Je weet wat je moet doen, maar je komt er zelden aan toe.",
        "Je weet wat de volgende stap is, maar je stelt hem uit.",
        "Je hebt doelen, maar je twijfelt of het de juiste zijn.",
        "Je begint goed en na een paar weken verslapt het.",
        "Je bent geen ochtendmens, en vanavond heb je meer energie.",
      ],
    },
    distinction: {
      title: "Uitzoeken hoe of besluiten dat",
      paragraphs: [
        "Uitstellen voelt nooit als uitstellen. Het voelt als zorgvuldig zijn. Je wil eerst weten hoe, eerst het goede moment, eerst zeker weten dat het de juiste stap is. Al die vragen zijn redelijk. Ze hebben alleen één ding gemeen: zolang je ze stelt, hoef je niets te doen.",
        "Een besluit werkt andersom. Je besluit dat het gebeurt en op welk moment, en daarna wordt het hoe een praktisch probleem in plaats van een voorwaarde. De timing wordt trouwens nooit perfect. Wie daarop wacht, wacht op iets dat niet komt.",
      ],
      quote: {
        text: "Het probleem is nooit kennis. Het probleem is dat je niet doet wat je al weet.",
        author: "Rick Vianen",
      },
      cost: "Niet dat ene grote gemiste doel, maar honderd kleine dagen waarop het net niet uitkwam. Uitstel voelt elke dag onschuldig en telt aan het eind van het jaar op tot niets.",
      benefit:
        "Bewijs. Niet in je hoofd maar in je week: je hebt gedaan wat je zei. Dat is het enige dat het gesprek met jezelf op de bank stiller maakt.",
      testimonial: {
        quote: "Ik was de koningin van de smoezen.",
        author: "Chantal, oud-deelnemer MOVE — werkt nu aan 1% beter elke dag",
      },
      closing:
        "Je hoeft geen zin te hebben. Je hoeft alleen te besluiten dat het gebeurt, en daarna vijf minuten te beginnen.",
    },
    tool: {
      title: "Het besluitblad",
      intro:
        "Twee delen. Eerst schrijf je de stap op die je het langst uitstelt en maak je hem zo klein dat vijf minuten al meetelt. Daarna zet je de afspraak vast. Zonder dat tweede deel blijft het een goed idee.",
      fields: [
        "Wat ik uitstel",
        "De vijf-minutenversie ervan",
        "Wanneer, dag en tijd",
      ],
      sentences: {
        title: "De afspraak met jezelf",
        subtitle: "De eerste stap staat binnen 24 uur. Niet volgende maandag.",
        items: [
          "Deze stap zet ik binnen 24 uur",
          "Om deze tijd, op deze plek",
          "Deze persoon hoort het van me voor ik begin",
          "Ik sla nooit twee keer op rij over. Bij de eerste keer doe ik dit:",
        ],
      },
    },
  },
  {
    slug: "overlever",
    typeName: "Overlever",
    typeLabel: "Energie",
    navLabel: "Quizuitslag · Overlever",
    eyebrow: "Jouw uitslag · Energie",
    headingLines: ["Je presteert al,", "nu zonder dat het je opvreet."],
    intro: [
      "Je vulde de quiz in en kwam eruit als de overlever. Je haalt resultaten, dat blijkt uit je antwoorden. Maar het gaat gepaard met te veel uren, te weinig rust en het gevoel dat je altijd aan het rennen bent. Je hebt mooie dingen bereikt en het voelde gehaast en ongestructureerd.",
      "Dat is geen karakterfout. Het is een signaal dat er iets in je aanpak niet klopt. Ik ken het punt waarop dat zichtbaar wordt: bij mij was dat halverwege de marathon, toen mijn hoofd stopte terwijl mijn benen doorliepen.",
    ],
    forWhom:
      "Voor iedereen die al levert, al jaren doorgaat, en zich begint af te vragen hoe lang dit tempo nog goed gaat.",
    hero: {
      src: "/images/quiz-actieplan-overlever-hero.jpg",
      alt: "Rick op de finishchute in Knokke-Heist",
      caption: "Knokke-Heist. Doorgaan en het volhouden zijn niet hetzelfde.",
    },
    experience: {
      title: "Mijn hoofd stopte voordat mijn benen dat deden",
      blocks: [
        {
          label: "Halverwege de marathon",
          text: "Het begint klein. Bij de volgende post neem ik even een wandelpauze. Als het dan nog niet beter gaat, stop ik. Zo praat je jezelf stap voor stap naar de kant, terwijl er in je benen niets veranderd is. Buiten een wedstrijd klinkt het alleen anders: ik kan nu niet stoppen, want dan ben ik terug bij nul. Rust is voor als dit project klaar is. Ik moet gewoon door.",
        },
        {
          label: "De week waarin ik alles deed en niets opschoot",
          text: "Er waren weken waarin ik alles afvinkte en toch geen stap vooruit ging. Druk zijn en vooruitkomen zijn twee verschillende dingen. Zodra ik ging kijken welke trainingen echt effect hadden, bleef er minder over dan ik dacht — en ging ik sneller.",
        },
        {
          label: "Ongemak of alarm",
          text: "Ik heb moeten leren onderscheiden tussen twee soorten pijn. De ene hoort bij groeien; die moet je door. De andere is een signaal dat je moet stoppen. Wie dat niet uit elkaar houdt, gaat door tot er iets scheurt, of stopt bij het eerste ongemak. Ik heb ze beide gedaan.",
        },
      ],
    },
    recognize: {
      items: [
        "Je hebt mooie dingen bereikt, maar het voelde gehaast en ongestructureerd.",
        "Je energie zit niet consistent goed, en dat remt je meer dan je wil toegeven.",
        "Je wil schalen, maar je doet nog te veel zelf.",
        "Je merkt dat je je aanpast aan anderen in plaats van andersom.",
        "Als je nu stopt, ben je terug bij nul. Dus je stopt niet.",
      ],
    },
    distinction: {
      title: "Productief of actief",
      paragraphs: [
        "Actief zijn is makkelijk te meten en voelt goed: je week zit vol, je hebt alles opgepakt, niemand kan je iets verwijten. Productief zijn is iets anders. Dat is wat er aan het eind van de week echt is veranderd. De meeste mensen die overbelast raken zijn niet lui geweest; ze hebben te lang de verkeerde dingen goed gedaan.",
        "Daaronder zit een tweede onderscheid. Ongemak hoort bij groei en gaat weg als je doorzet. Alarm hoort bij te veel en gaat niet weg, maar wordt erger. Wie die twee door elkaar haalt, betaalt dat met een blessure, een burn-out of een jaar waarin niets meer lukt.",
      ],
      quote: {
        text: "Voor jezelf kiezen is niet egoïstisch. Het is een voorwaarde om voor anderen te kunnen zorgen.",
        author: "Rick Vianen",
      },
      cost: "Je resultaten blijven komen tot ze dat niet meer doen. En de rekening komt niet in je agenda binnen, maar in je lichaam, je humeur en de mensen om je heen.",
      benefit:
        "Dezelfde resultaten met minder uren, en een week waarin rust ingepland staat in plaats van dat je hem afdwingt door in te storten.",
      testimonial: {
        quote:
          "Door wat we toen hebben gedaan heb ik nog steeds betere relaties, een gezonder leven, de kracht om te veranderen.",
        author: "Oud-deelnemer MOVE, jaren na het traject",
      },
      closing:
        "Je hoeft niet harder. Je moet weten welke acties er echt toe doen, en welke pijn een signaal is in plaats van een test.",
    },
    tool: {
      title: "De weekcheck",
      intro:
        "Twee delen. Eerst leg je naast elkaar wat je deed en wat het opleverde. Daarna beantwoord je de drie vragen die bepalen of je morgen doorgaat of herstelt.",
      fields: [
        "Waar mijn week naartoe ging",
        "Wat het echt opleverde",
        "Doorgaan of schrappen",
      ],
      sentences: {
        title: "De drie vragen voor morgen",
        subtitle: "Vul dit aan het eind van je week in, niet als het al te laat is.",
        items: [
          "Wat is het ongemak, en wat is het alarm?",
          "Welke van mijn acties leverde deze week het meeste op?",
          "Wat schrap ik volgende week, en wie merkt dat?",
          "Waar staat mijn rust in de agenda, en wie weet dat?",
        ],
      },
    },
  },
  {
    slug: "zoeker",
    typeName: "Zoeker",
    typeLabel: "Richting",
    navLabel: "Quizuitslag · Zoeker",
    eyebrow: "Jouw uitslag · Richting",
    headingLines: [
      "Je weet wat je niet wil,",
      "vanaf hier weet je waar je heen gaat.",
    ],
    intro: [
      "Je vulde de quiz in en kwam eruit als de zoeker. Uit je antwoorden komt geen gebrek aan wil, maar een gebrek aan richting: je wist niet goed waar je moest beginnen, je hebt doelen maar twijfelt of het de juiste zijn, en je reageert meer dan dat je stuurt.",
      "Dat is geen probleem, het is een fase. Het oude patroon werkt niet meer en het nieuwe is nog niet scherp. Hieronder vertel ik het verhaal dat ik hier het vaakst bij gebruik, en maak je jouw richting concreet.",
    ],
    forWhom:
      "Voor iedereen die het gevoel heeft dat het anders moet, en merkt dat elke keuze uitgesteld wordt tot hij zeker weet dat het de juiste is.",
    hero: {
      src: "/images/quiz-actieplan-zoeker-hero.jpg",
      alt: "Rick net uit het water na het zwemonderdeel",
      caption: "Net uit het water. Op dat moment is er geen twijfel meer over de richting.",
    },
    experience: {
      title: "De eenhoorn in de boom",
      blocks: [
        {
          label: "Het verhaal",
          text: "Een man loopt door het oerwoud en vindt een eenhoorn die met zijn hoorn vastzit in een boom. De eenhoorn roept om hulp. De man zegt: ik trek je los. En dan begint de eenhoorn te vragen. Gaat het pijn doen? Hoe lang duurt het? Weet je zeker dat mijn hoorn niet breekt? Wat kost het me? Doe je het nu of woensdag? Heb je dit eerder gedaan? Heb je het juiste gereedschap? Kun je garanderen dat het niet weer gebeurt? Voor zover ik weet staat die eenhoorn er nog.",
        },
        {
          label: "Waarom ik dit vertel",
          text: "Dit zijn geen domme vragen. Het zijn redelijke vragen, en dat is precies wat ze zo gevaarlijk maakt. Elke vraag klinkt verstandig en elke vraag houdt hem exact waar hij is. Zo zag mijn eigen zoekperiode eruit: iedereen riep iets anders, ik vroeg iedereen om zijn mening, en ik bewoog geen meter.",
        },
        {
          label: "Wat er veranderde",
          text: "Ik heb nooit de juiste richting gevonden. Ik heb er één gekozen en ben er achteraan gegaan. Wat daarbij hielp was de volgorde omdraaien: eerst opschrijven wat er over een jaar waar moet zijn, en van daaruit terugrekenen naar deze week. Niet vanuit waar ik stond bedenken wat haalbaar was, want daar komt altijd hetzelfde uit.",
        },
      ],
    },
    recognize: {
      items: [
        "Als je terugkijkt op de afgelopen zes maanden is er eerlijk gezegd niet zoveel veranderd.",
        "Je hebt doelen, maar je twijfelt of het de juiste zijn.",
        "Je mist een helder plan, en je reageert meer dan dat je stuurt.",
        "Je merkt dat je je aanpast aan anderen in plaats van andersom.",
      ],
    },
    distinction: {
      title: "Willen of kiezen",
      paragraphs: [
        "Willen is een gevoel en kan eindeloos doorgaan. Je kunt jaren iets willen zonder dat er iets verandert, en het voelt de hele tijd alsof je ergens mee bezig bent. Kiezen is een handeling met gevolgen: je zegt ja tegen één richting en daarmee nee tegen de andere. Dat nee is het stuk waar de meeste mensen op vastlopen.",
        "Zolang je blijft wensen en vergelijken, blijft je toekomst in de toekomst liggen. Een gekozen richting hoeft niet perfect te zijn om te werken. Een verkeerde keuze kun je bijsturen; van geen keuze kun je niets maken.",
      ],
      quote: {
        text: "Het liet mij een wereld van mogelijkheden zien als ik bereid was het werk te doen.",
        author: "Rick Vianen, over zijn eerste halve IRONMAN",
      },
      cost: "Zes maanden waarin er niets veranderde en het toch druk was. Blijven zoeken voelt veilig, en het is de duurste optie die er is.",
      benefit:
        "Een richting die je zelf hebt gekozen in plaats van een die je overkomt. En rust, omdat je niet meer bij elke mening opnieuw hoeft te beginnen.",
      testimonial: {
        quote: "Just Do It — Then Do It Again.",
        author: "Daan, oud-deelnemer MOVE",
      },
      closing:
        "Je hoeft niet zeker te weten dat het de juiste richting is. Je moet er één kiezen en stoppen met vragen stellen aan de boom.",
    },
    tool: {
      title: "Pen op B",
      intro:
        "Twee delen, en de volgorde is het hele punt. Je begint bij over een jaar en rekent terug. Niet andersom, want dan komt er altijd uit wat je nu al doet.",
      fields: [
        "Over een jaar is dit waar",
        "Dus over drie maanden dit",
        "Dus deze week dit",
      ],
      sentences: {
        title: "De keuze hardop",
        subtitle: "Het derde veld is waar het echt om gaat. Zonder nee is er geen keuze.",
        items: [
          "Dit is de richting die ik kies",
          "Dit is de eerste stap, deze week",
          "Hier zeg ik nee tegen",
          "Deze vraag stel ik niet meer aan mezelf",
        ],
      },
    },
  },
];

export function getActieplan(slug: string): Actieplan | undefined {
  return actieplannen.find((a) => a.slug === slug);
}
