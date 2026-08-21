export type ContentType = "blog" | "video" | "podcast";

export type ContentItem = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  type: ContentType;
  videoUrl?: string;
  podcastUrl?: string;
};

export const contentItems: ContentItem[] = [
  {
    type: "blog",
    slug: "omgeving-gewoonte-vasthouden",
    title: "Zo gebruik je je omgeving om een gewoonte vast te houden",
    date: "21 augustus 2026",
    category: "Implementatie",
    excerpt:
      "Je koopt fruit bij de groenteboer met de beste intenties, legt het in de koelkast, en aan het einde van de dag denk je: shit, weer vergeten. Dat is geen wilskrachtprobleem. Het is een omgevingsprobleem.",
    videoUrl: "https://www.youtube.com/embed/7r48ll2DvqM",
    content: `
      <p>Je koopt fruit bij de groenteboer met de beste intenties. Appels, bananen, mango. Je legt het in de koelkast. En aan het einde van de dag denk je: shit, weer vergeten.</p>

      <p>Dat is geen wilskrachtprobleem. Het is een omgevingsprobleem.</p>

      <h3>Elf miljoen receptoren</h3>
      <p>Je lichaam heeft ongeveer elf miljoen receptoren verspreid over je zintuigen: zien, voelen, ruiken, proeven en horen. Tien miljoen daarvan zijn er alleen voor je zicht. Onderzoekers schatten dat ruim de helft van je gedrag daardoor wordt beïnvloed, nog voordat je er bewust over nadenkt.</p>
      <p>Dat betekent dat wat je ziet, grotendeels bepaalt wat je doet.</p>

      <h3>De fruitschaaltruc</h3>
      <p>Wanneer je die fruitmand in de koelkast legt, loop je er nooit langs. Je hebt werk, klanten, misschien kinderen, en aan het eind van de dag ben je het vergeten.</p>
      <p>Zet diezelfde schaal op je bureau of op het aanrecht waar je elke keer langsloopt, en het verandert. Elke keer dat je er langskomt, denk je: hé, ik zal wat fruit eten. Geen discipline nodig. Gewoon zichtbaarheid.</p>
      <p>Dezelfde truc werkt voor elke gewoonte die je wilt aanleren. Ik wilde meer gaan sporten, maar het schoot er steeds bij in. Dus zette ik mijn golftas gewoon midden in de kamer. Elke keer dat ik hem zie, herinner ik mezelf eraan.</p>

      <h3>De andere kant: een tegenwerkende omgeving</h3>
      <p>Hetzelfde principe werkt averechts. Je telefoon binnen handbereik is een constante trigger om hem op te pakken. En elke melding die afgaat terwijl je werkt, kost je gemiddeld 23 minuten om weer terug te komen in dezelfde focus.</p>
      <p>Als je wilt dat iets minder gebeurt, haal je het uit het zicht. Niet uit discipline, maar omdat je omgeving dan ophoudt je eraan te herinneren.</p>

      <h3>Elke ruimte, een functie</h3>
      <p>Hetzelfde geldt voor de ruimtes om je heen. Op kantoor werk je, in de slaapkamer slaap je. Geef elke ruimte een functie, en je gedrag volgt vanzelf de omgeving waarin je je bevindt.</p>
      <p>Richt je omgeving in op wat je wilt bereiken, zakelijk of qua gezondheid, en maak het zichtbaar. Je zult verbaasd zijn hoe makkelijk een gewoonte aan of af te leren is zodra je omgeving voor je werkt in plaats van tegen je.</p>
    `,
  },
  {
    type: "blog",
    slug: "jezelf-voorliegen-met-excuses",
    title: "Waarom je jezelf voorliegt met excuses (en hoe je dat doorbreekt)",
    date: "16 augustus 2026",
    category: "Mindset",
    excerpt:
      "Er stond ooit een marktkraam in India, en er was een probleem: apen. Zodra de verkopers even niet keken, gristen de apen het voedsel van de kraam.",
    videoUrl: "https://www.youtube.com/embed/s7ZkD9l3mwQ",
    content: `
      <p>Er stond ooit een marktkraam in India, en er was een probleem: apen. Zodra de verkopers even niet keken, gristen de apen het voedsel van de kraam.</p>

      <p>Iemand bedacht een oplossing zonder de dieren pijn te doen. Een kokosnoot, met een klein gaatje erin. Daarin een handvol nootjes waar de apen dol op waren.</p>

      <p>De apen kwamen, staken hun hand door het gaatje, en grepen de nootjes vast. Zodra ze hun vuist sloten om de nootjes, kwam die vuist niet meer door het gaatje terug. Ze zaten vast. Niet omdat iemand ze vasthield. Omdat ze zelf niet loslieten.</p>

      <p>Dit is precies wat de meeste mensen doen met hun eigen doelen.</p>

      <h3>Wat een racket is</h3>
      <p>We noemen dit een racket. Het woord komt van racketeer, oplichter. Alleen ben jij deze keer de oplichter van jezelf.</p>
      <p>Je hebt een doel. Op het gebied van gezondheid, business, wat dan ook. En ergens onderweg begin je jezelf een verhaal te vertellen waarom het nu even niet lukt. Geen tijd. Geen motivatie. Moe. Een blessure. De kinderen.</p>
      <p>Het zijn allemaal legitieme dingen om te noemen. Maar zolang je eraan vasthoudt, houd je jezelf net zo gevangen als het aapje in de kokosnoot.</p>

      <h3>Waarom je dit doet: het verborgen voordeel</h3>
      <p>Elk excuus heeft een verborgen voordeel. Als je niet gaat sporten omdat je moe bent, hoef je niet in actie te komen. Je blijft comfortabel. Dat is het voordeel. Niet het excuus zelf, maar wat het je oplevert: rust, geen ongemak, geen risico op falen.</p>
      <p>Zolang je dat voordeel belangrijker vindt dan je doel, blijf je vastzitten. Niet omdat het excuus waar of onwaar is. Dat is niet eens de discussie. De vraag is of je eraan vasthoudt.</p>

      <h3>Van extern naar intern</h3>
      <p>Vaak beginnen excuses extern. Geen tijd. Een blessure. Maar zodra je daar doorheen prikt, kom je bij een dieper laagje. Tijd blijkt geen tijdprobleem, maar een prioriteitsprobleem. En dan verschuift het excuus naar binnen.</p>
      <p>'Zo ben ik nou eenmaal.' 'Het zit in de familie.' Dit zijn interne rackets. Nog moeilijker te herkennen, omdat ze voelen als waarheid over wie je bent, in plaats van een verhaal dat je jezelf vertelt.</p>

      <h3>Hoe je een racket loslaat</h3>
      <p>Het enige wat nodig is, is bewustwording. Schrijf voor jezelf op welke excuses je gebruikt. Doe dit eerst bij anderen, dat gaat vaak makkelijker. Daarna bij jezelf.</p>
      <p>Zodra je ziet welk verhaal je jezelf vertelt, hoef je er alleen nog maar geen aandacht meer aan te besteden. Net als het aapje dat de nootjes loslaat en zijn hand terugtrekt uit de kokosnoot.</p>
      <p>Licht jezelf niet langer op. Laat het verhaal voor wat het is, en doe wat je al wist dat je moest doen.</p>
    `,
  },
  {
    type: "video",
    slug: "omgeving-bepaalt-gedrag",
    title: "Waarom je omgeving je gedrag bepaalt (en hoe je dat om kunt draaien)",
    date: "7 augustus 2026",
    category: "Mindset",
    excerpt:
      "Mijn vriendin is fan van PSV. Zet vijf mensen bij elkaar die allemaal voor PSV zijn, en de kans is groot dat een zesde persoon dat ook wordt. Zo werkt je omgeving, in bijna alles.",
    videoUrl: "https://www.youtube.com/embed/HpUzaaqbMw8",
    content: `
      <p>Mijn vriendin is fan van PSV. Zet vijf mensen bij elkaar die allemaal voor PSV zijn, en de kans is groot dat een zesde persoon dat ook wordt. Simpel voorbeeld, maar het werkt met bijna alles. Culturen, vriendengroepen, teams, bedrijven: als iets genormaliseerd is, gaat een nieuw iemand dat gedrag vaak overnemen.</p>

      <p>Dat kan positief werken. Het kan ook negatief werken.</p>

      <h3>Wat onderzoek laat zien</h3>
      <p>Onderzoekers Christakis en Fowler volgden meer dan twaalfduizend mensen gedurende 32 jaar. Ze keken hoe obesitas zich verspreidde binnen sociale netwerken. De cijfers waren opvallend: had een vriend obesitas, dan was de kans dat jij dat ook ontwikkelde 57% hoger. Bij een broer of zus was dat 40%, bij een partner 37%.</p>
      <p>Bij buren was er geen verband te zien. Puur in dezelfde straat wonen zonder sociale connectie bleek geen invloed te hebben. Het gaat dus niet om fysieke nabijheid, maar om sociale verbondenheid.</p>
      <p>Dit onderzoek heeft overigens ook kritiek gekregen op de gebruikte methode, dus neem het cijfer niet als absolute waarheid. Maar de kern erachter, dat je omgeving je gedrag beïnvloedt, blijft overeind.</p>

      <h3>Het lijnen-experiment</h3>
      <p>Een ander, klassiek experiment van Solomon Asch laat iets vergelijkbaars zien, maar dan directer. Deelnemers moesten simpelweg aanwijzen welke van drie lijnen het langst was. Overduidelijk te zien met het blote oog.</p>
      <p>Maar in de groep zaten acteurs die eerst allemaal het juiste antwoord gaven, en vervolgens allemaal bewust het foute antwoord. Zodra dat gebeurde, paste 37% van de deelnemers zich aan en gaf ook het foute antwoord, ook al zagen ze met hun eigen ogen dat het niet klopte.</p>
      <p>Het interessante komt daarna. Zodra er in die groep acteurs één iemand was die wel het juiste antwoord bleef geven, daalde die aanpassing met 80%. Nog maar zo'n 7% van de deelnemers ging dan nog mee met de foute meerderheid.</p>
      <p>Met andere woorden: je hebt maar één andere stem nodig om een hele groep een andere kant op te laten bewegen.</p>

      <h3>Twee lessen</h3>
      <p>De eerste les is simpel: zoek een omgeving op die past bij je doelen. Toen ik zelf ging trainen voor mijn Iron Man, sloot ik me aan bij een triatlonvereniging. Niemand in mijn oude omgeving had ooit van een Iron Man gehoord. In die vereniging was twintig uur per week trainen ineens volkomen normaal.</p>
      <p>De tweede les is misschien nog waardevoller. Jij kunt die ene afwijkende stem zijn. Sinds ik zelf ben gaan triatlonnen, hebben tientallen mensen in mijn omgeving, zonder dat dat ooit mijn bedoeling was, ook een kwart triatlon gelopen. Niet omdat ik het ze vroeg. Maar omdat ik het voordeed.</p>
      <p>Als je niet oplet, bepaalt je omgeving je gedrag. Let je er wel op, dan kun jij net zo goed die omgeving bepalen.</p>

      <p>Vraag jezelf eens af: is de omgeving om je heen op dit moment ingericht op de doelen die jij wilt halen, of houdt hij je juist vast in een patroon dat je eigenlijk kwijt wilt? En andersom: welk voorbeeld ben jij op dit moment voor de mensen om je heen?</p>

      <p>Wil je hier niet alleen over nadenken, maar ook echt in een omgeving stappen die op je doelen is afgestemd? Bekijk de video voor het volledige verhaal of <a href="/intake">plan een vrijblijvend kennismakingsgesprek</a>.</p>
    `,
  },
  {
    type: "blog",
    slug: "onbewuste-overtuigingen",
    title: "Gedrag veranderen begint bij je onbewuste overtuigingen",
    date: "31 juli 2026",
    category: "Mindset",
    excerpt:
      "Denk aan de laatste keer dat je de vaatwasser moest uitruimen. Een simpele taak die toch zwaarder voelde dan het hoort. Dat komt niet door de taak, maar door wat je erover denkt.",
    videoUrl: "https://www.youtube.com/embed/TgiIQ02tJTg",
    content: `
      <p>Denk aan de laatste keer dat je de vaatwasser moest uitruimen of de was moest doen. Een simpele taak. Toch voelde het misschien zwaarder dan het hoort te zijn.</p>

      <p>Dat komt niet door de taak zelf. Dat komt door wat je erover denkt.</p>

      <h3>Het stemmetje in je hoofd</h3>
      <p>Er is een stemmetje in je hoofd dat 24/7 aan staat. Het heeft een mening over elke taak, elke persoon, elke uitdaging en elk gesprek. Die mening is opgebouwd uit ervaringen, aannames en overtuigingen die je meestal niet bewust hebt gekozen.</p>
      <p>Neem geld. De manier waarop je bent opgevoed, wat je hebt meegemaakt, wat je hebt geleerd, dat vormt allemaal een overtuiging. Voor de één is geld een noodzakelijk kwaad. Voor de ander is geld nodig om iets op te bouwen. Voor weer een ander voelt geld vies. Het gaat in alle gevallen om hetzelfde ding. Alleen het verhaal eromheen verschilt.</p>
      <p>En dat verhaal heeft gevolgen. Als jij een overtuiging hebt dat geld vragen niet hoort, dan wordt het lastig om ooit iets te verkopen.</p>

      <h3>90 tot 95% is onbewust</h3>
      <p>Het lastige, en tegelijk het goede nieuws, is dat 90 tot 95% van deze overtuigingen onbewust zijn. Je merkt niet eens dat je op een bepaalde manier over iets denkt. Maar zodra je je daar bewust van wordt, kun je het ook veranderen. Blijf je onbewust, dan blijf je een soort slaaf van je eigen verhalen en aannames.</p>

      <h3>Drie manieren om je overtuigingen bloot te leggen</h3>
      <p><strong>Maak de zin af.</strong> Neem een persoon, taak, uitdaging of gesprek en vul in: "X is geweldig, maar...". Bijvoorbeeld: mijn partner is geweldig, maar zeurt wel veel. Alleen al dat "maar" laat zien waar je mening zit.</p>
      <p><strong>Scheid feiten van meningen.</strong> Zet je aannames op een rij en vraag jezelf eerlijk af: is dit een feit, of is dit mijn mening? Iemand die "veel zeurt" is een mening, geen feit. Zodra je dat ziet, wordt het ook makkelijker om er verantwoordelijkheid voor te nemen in plaats van het gedrag van de ander de schuld te geven.</p>
      <p><strong>Gebruik AI om ze bloot te leggen.</strong> Beschrijf je doel, waar je nu staat en waar je jezelf tegenhoudt, en vraag om honderd mogelijke overtuigingen die daarbij in de weg kunnen zitten. Loop ze een voor een langs. De meeste herken je niet, een paar wel, en precies die paar zijn het waard om aan te pakken.</p>

      <h3>Maak het resultaat belangrijker dan het verhaal</h3>
      <p>Stel dat je jezelf ziet als avondmens en om vijf uur 's ochtends op zou moeten staan, zeven dagen op rij. De kans dat je dat volhoudt op basis van wilskracht alleen is klein. Maar zet er honderdduizend euro tegenover als je het wel doet, en het verhaal wordt in één keer een stuk minder belangrijk dan het resultaat.</p>
      <p>Dat is de kern. Niet elk verhaal dat je over jezelf vertelt is onwaar. Maar hoe langer je eraan vasthoudt, hoe vaster het komt te zitten. Bekritiseer je eigen geloofssysteem af en toe. Niet om jezelf af te breken, maar om te blijven groeien.</p>

      <p>Volgende week deel ik deel 2: de omgeving als tweede grote beïnvloeder van je gedrag. Doe de <a href="/challenge">Challenge</a> als je zin hebt in een concrete volgende stap.</p>
    `,
  },
  {
    type: "video",
    slug: "een-doel-dat-je-echt-haalt",
    title: "Hoe zet je een doel dat je ook echt haalt?",
    date: "27 juli 2026",
    category: "Mindset",
    excerpt:
      "Zet twee elftallen tegenover elkaar en haal de doelen weg: negentig minuten lang gebeurt er van alles, maar niemand komt ergens. Een onderzoek onder 267 mensen laat zien hoe je de kans op je doel verdubbelt.",
    videoUrl: "https://www.youtube.com/embed/WvnQaZXX3lU",
    content: `
      <p>Zet twee elftallen tegenover elkaar op een voetbalveld. Haal de doelen weg. Wat gebeurt er? Negentig minuten lang gebeurt er van alles, maar niemand komt ergens. Zonder doel heb je geen richting. Je kunt heel druk zijn, en toch geen stap verder komen.</p>

      <p>Dat is precies wat er gebeurt als je door het leven gaat zonder een concreet doel. Je bent bezig, maar niet gericht bezig.</p>

      <h3>De kracht van een uitdagend doel</h3>
      <p>Bij het kiezen van een doel wil je juist een doel dat een beetje ongemakkelijk voelt. Iets waar je een beetje buikpijn van krijgt. Niet omdat ongemak leuk is, maar omdat een uitdagend doel je dwingt om te groeien.</p>
      <p>De persoon die je nu bent, heeft bereikt wat je tot nu toe hebt bereikt met de vaardigheden die je nu hebt. Een uitdagend doel vraagt om een andere versie van jezelf. Meer discipline, andere vaardigheden, een ander gesprek in je hoofd.</p>
      <p>Ik ondervond dit zelf toen ik in 2022 besloot een Iron Man te gaan lopen. Ik had nog nooit fatsoenlijk gezwommen, nog nooit op een racefiets gezeten. Om het doel te halen moest ik bijna twintig uur per week trainen, vroeg opstaan en discipline opbouwen die ik daarvoor niet had. Die discipline nam ik mee in alles daarna. Ik werd een betere coach, een rustiger ondernemer en eerlijk gezegd ook een leukere partner.</p>
      <p>Toen ik over de finish liep, met tranen over mijn wangen, was dat niet om de medaille. Het was het gevoel dat al het harde werk je ergens heeft gebracht. Dat gevoel van voldoening is een van de sterkste dingen die er zijn.</p>

      <h3>Kijk verder dan het doel zelf</h3>
      <p>Stel dat je doel is: tien kilo afvallen. Op zich een concreet doel. Maar wil je een stap dieper kijken, vraag jezelf dan af wie je eigenlijk wil zijn. Iemand met een gezonde, sterke leefstijl valt vanzelf tien kilo af. Dat is het logische gevolg, niet het doel zelf.</p>
      <p>En achter dat doel zit vaak nog een doel. Minder stress. Meer aanwezig zijn voor je kinderen. Beter kunnen omgaan met tegenslag. Daar zit de echte winst, niet in het cijfer op de weegschaal.</p>

      <h3>Het onderzoek: van 35% naar ruim 70%</h3>
      <p>In 2007 deed onderzoeker Gail Matthews van een universiteit in Californië onderzoek onder 267 mensen. Ze verdeelde ze in vijf groepen. De eerste groep dacht alleen aan hun doel. De tweede schreef hem op. De derde voegde een concreet eindpunt en beloning toe. De vierde deelde het doel met anderen. De vijfde gaf daarnaast ook nog wekelijkse updates.</p>
      <p>Van de groep die alleen aan hun doel dacht, haalde ongeveer 35% hun doel. Van de groep die alles deed — opschrijven, een concreet eindpunt, delen met anderen en wekelijkse updates — steeg dat naar ruim 70%. Twee keer zoveel kans, puur door een paar simpele stappen toe te voegen.</p>

      <h3>De vijf stappen</h3>
      <ul>
        <li><strong>Bepaal wie je wil zijn</strong> — en welke leefstijl daarbij hoort.</li>
        <li><strong>Maak het concreet</strong> — hoeveel, hoe vaak, welke acties.</li>
        <li><strong>Zet er een deadline op.</strong></li>
        <li><strong>Vertel het</strong> aan een paar mensen om je heen.</li>
        <li><strong>Geef wekelijks een update</strong> over waar je staat.</li>
      </ul>
      <p>Wil je jezelf nog een keer extra scherp zetten, geef jezelf dan twee opties: wat gebeurt er als het lukt, en wat geef je weg als het niet lukt. Hoe groter je dat tweede durft te maken, hoe eerlijker het antwoord is op de vraag of je echt bereid bent het werk te doen.</p>

      <p>Een doel stellen is niet het eindpunt. Het is het startpunt van de persoon die je moet worden om het te halen. En dat is precies waar de winst zit.</p>

      <p>Wil je hier niet alleen over lezen, maar ook echt mee aan de slag, met iemand die je onderweg accountable houdt? Bekijk de video voor het volledige verhaal of doe de <a href="/quiz">quiz</a> om te zien of MOVE bij je past.</p>
    `,
  },
  {
    type: "video",
    slug: "geprogrammeerde-toekomst",
    title:
      "De geprogrammeerde toekomst: waarom je nu al weet waar je over vijf jaar staat",
    date: "21 juli 2026",
    category: "Mindset",
    excerpt:
      "Je gewicht van vandaag, je banksaldo van vandaag. Trek die lijn door en je hele toekomst zit er al in verstopt. Zo teken je hem uit, en zo doorbreek je hem.",
    videoUrl: "https://www.youtube.com/embed/MHPgBamJ5QA",
    content: `
      <p>Vul voor jezelf een cijfer in. Je gewicht van vandaag. Je banksaldo van vandaag. Nu vraag ik je iets ongemakkelijkers: wat was dat cijfer een jaar geleden, en twee jaar geleden?</p>

      <p>De meeste mensen hebben daar geen antwoord op. Niet omdat ze het niet zouden kunnen achterhalen, maar omdat ze er nooit naar hebben gekeken. En dat is precies het probleem, want in die lijn zit je hele toekomst al verstopt.</p>

      <p>Ik noem dat de geprogrammeerde toekomst: de plek waar je over vijf, tien of twintig jaar staat als je gewoon doorgaat met wat je nu doet.</p>

      <h3>Waarom je brein er liever niet naar kijkt</h3>
      <p>Onderzoekers Green en Myerson noemden dit hyperbolic discounting. Mensen kregen de keuze tussen honderd euro nu of honderdtwintig euro over een jaar. De meeste mensen kozen voor het geld nu. Maar zodra diezelfde keuze een jaar verder in de tijd werd geschoven (honderdtwintig euro over twaalf maanden tegenover honderddertig euro over dertien maanden) kozen mensen opeens wel voor wachten.</p>
      <p>Je brein waardeert het nu altijd zwaarder dan later. Dat is geen karakterfout. Dat is gewoon hoe het werkt.</p>

      <h3>Het verborgen voordeel</h3>
      <p>Bij elke gewoonte die je eigenlijk kwijt wilt, zit een verborgen voordeel. Snoezen geeft comfort. Toch ja zeggen bespaart een lastig gesprek. Te veel eten voelt op dat moment gewoon lekker.</p>
      <p>En daarna praat je het goed. Je hebt hard genoeg gewerkt deze week. Dit koekje kan geen kwaad. Volgende week eet je weer gezond.</p>
      <p>Als je daar niet eerlijk naar kijkt, krijg je precies de toekomst die je niet wilde.</p>

      <h3>De lijn doortrekken</h3>
      <p>Neem je gewicht. Vandaag tachtig kilo, een jaar geleden achtenzeventig. Trek diezelfde lijn vijf jaar door en je zit op negentig kilo. Twintig jaar door en je zit richting honderdvijf kilo.</p>
      <p>Of neem je financiën. Als je banksaldo de afgelopen twee jaar van tachtigduizend naar honderdduizend euro groeide, dan zit er over vijf jaar waarschijnlijk honderdvijftigduizend euro op je rekening. Dat is misschien een lijn waar je juist wel blij mee bent, en dat is precies het punt: de geprogrammeerde toekomst laat zien wat je met dezelfde inzet krijgt, of dat nu een lijn is om te vieren of een lijn om te doorbreken.</p>

      <h3>Vandaag, niet later</h3>
      <p>Het punt van deze oefening is niet om je bang te maken. Het is om je scherp te maken. Want de toekomst wordt niet later gecreëerd. Die wordt nu gecreëerd, in de keuze die je vandaag maakt.</p>
      <p>Dat vraagt eigenaarschap over je eigen patronen, en implementatie in plaats van nog een goed voornemen. Weten wat je moet doen was nooit het probleem. Doen is het probleem.</p>

      <p>Teken voor jezelf je eigen lijn uit. Op je gezondheid, je financiën of je relaties. Kijk er eerlijk naar, ook als het een beetje buikpijn geeft. En stel jezelf daarna één vraag: past de dagelijkse keuze die ik vandaag maak bij de toekomst die ik eigenlijk wil?</p>

      <p>Wil je hier niet alleen over nadenken, maar ook echt mee aan de slag? In MOVE bouwen we precies dat systeem: wekelijkse check-ins, een kleine groep en de accountability om je patronen daadwerkelijk te doorbreken. Bekijk het volledige verhaal in de video of <a href="/intake">plan een vrijblijvend kennismakingsgesprek</a>.</p>
    `,
  },
  {
    type: "video",
    slug: "3-soorten-beloftes",
    title: "De 3 soorten beloftes die bepalen of je grip houdt op je leven",
    date: "9 juli 2026",
    category: "Implementatie",
    excerpt:
      "Er zijn drie soorten beloftes: de criminele, de zwakke en de krachtige. Zodra je ze uit elkaar kunt houden, zie je precies waar jij grip verliest.",
    videoUrl: "https://www.youtube.com/embed/-ji1u4FV6Ck",
    content: `
      <p>Toen ik voor het eerst opschreef hoeveel beloftes ik op een dag maakte, schrok ik van het aantal. En nog meer van hoe weinig ik er echt nakwam. Niet uit onwil. Gewoon omdat ik nooit had stilgestaan bij wat een belofte eigenlijk is.</p>

      <p>Er zijn drie soorten. Zodra je ze uit elkaar kunt houden, zie je precies waar jij grip verliest.</p>

      <h3>De criminele belofte</h3>
      <p>Dit is de belofte die je maakt terwijl je allebei weet dat het niks wordt. Je komt iemand tegen die je jaren niet zag, en aan het eind zeg je: we moeten echt weer eens wat drinken. Terwijl er een stemmetje zegt dat je daar helemaal niet op zit te wachten.</p>
      <p>Je doet het uit vriendelijkheid. Om de ander niet teleur te stellen. Maar de kans dat je het nakomt is nul. En daarmee bedrieg je de ander eigenlijk, hoe hard dat ook klinkt.</p>

      <h3>De zwakke belofte</h3>
      <p>Dit is de belofte met de goede intentie, maar met vijftig procent kans. Ik kijk er deze week even naar. Ik ga echt twee keer sporten. Ik kom er zo snel mogelijk op terug.</p>
      <p>De intentie is oprecht. Maar de taal is vaag, en die vaagheid is een achterdeur. Er belt een klant, de kinderen worden ziek, er komt iets tussendoor. En aan het eind van de week is het er niet van gekomen.</p>
      <p>Dit is de belofte die we het vaakst maken. Zakelijk, privé, in gezondheid, naar onze kinderen. En het is precies de belofte die het meeste vertrouwen kost, bij anderen en bij jezelf.</p>

      <h3>De krachtige belofte</h3>
      <p>Dit is de belofte die je in honderd procent van de gevallen nakomt. Om vier uur bij de tandarts, en je bént er om vier uur. Het is de meest zeldzame belofte. En het is precies de belofte waar je op wil zitten.</p>
      <p>Want iemand die alleen nog krachtige beloftes maakt, wordt vanzelf iemand op wie mensen kunnen bouwen. Als Rick iets zegt, dan gebeurt het. Dat versterkt elke relatie die je hebt.</p>

      <h3>Begin bij jezelf, niet bij anderen</h3>
      <p>De eerste stap is simpel: observeer. Op welke domeinen, werk, gezondheid, relaties, maak jij vooral krachtige, zwakke of criminele beloftes? Je zult zien dat je er veel meer maakt dan je denkt.</p>
      <p>En dan komt het punt waar de meeste mensen het verkeerd aanpakken. Ze willen meteen anderen aanspreken. Doe dat niet. Begin bij de stilzwijgende beloftes aan jezelf. Om zeven uur beginnen met werken. Twee keer per week sporten.</p>
      <p>Elke keer dat je zo'n afspraak met jezelf nakomt, bouw je bewijs op dat je iemand bent die zijn woord houdt. En elke keer dat je het niet doet, bouw je bewijs voor het tegenovergestelde. Doe je dat lang genoeg, dan wordt het genormaliseerd. Je bent gewoon iemand die er vijf over vijf is, en iedereen accepteert het, jij als eerste.</p>
      <p>Zo bouw je een identiteit. Wil je een ander mens worden, dan voeg je bewijs toe op de andere stapel.</p>

      <h3>Pas daarna: de beloftes naar anderen</h3>
      <p>Heb je dit onder controle, dan kijk je naar hoe je beloftes naar anderen maakt. Beloof niet zomaar iets. Zeg vaker nee, ook als dat niet het antwoord is dat iemand wil horen. Iemand nu even teleurstellen is beter dan over een week een afspraak niet nakomen.</p>
      <p>En onthoud: vraag nooit van een ander wat je zelf niet doet. Sla je met je vuist op tafel dat iedereen op tijd moet komen terwijl je zelf altijd te laat bent, dan krijg je precies de cultuur die je niet wil.</p>
      <p>Het kost je veel energie en vertrouwen als je hierin blijft hangen. De uitweg begint niet bij meer kennis of meer motivatie. Hij begint bij één kleine belofte aan jezelf die je vandaag wél nakomt.</p>
    `,
  },
  {
    type: "blog",
    slug: "the-way-you-fck-yourself",
    title: "\"The way you f*ck yourself is to lie to yourself.\"",
    date: "24 maart 2025",
    category: "Mindset",
    excerpt:
      "Tijdens een trainingsweekend in San Francisco met Dusan Djukich leerde ik over Standing Transparent Reality — de persoonlijke realiteit waarin je leeft.",
    content: `
      <p>Tijdens een trainingsweekend in San Francisco met Dusan Djukich leerde ik over Standing Transparent Reality (STR) — de persoonlijke realiteit waarin je leeft. Het concept is simpel maar confronterend: de meeste mensen leven niet in de werkelijkheid. Ze leven in een zelfgebouwd verhaal.</p>

      <p>We leven allemaal in een soort bubbel van ongeschreven regels. Regels over wie we zijn, wat we wel en niet kunnen, en hoe de wereld werkt. Het probleem? De meeste van die regels zijn onzin.</p>

      <p>Je zegt dat je geen tijd hebt. Onzin. Je hebt dezelfde 24 uur als iedereen. Je zegt dat je niet goed genoeg bent. Onzin. Je bent bang om te falen. Je zegt dat je beter werkt onder druk. Onzin. Je bent gewoon een uitsteller.</p>

      <p>Dit zijn verhalen. En verhalen die je jezelf vertelt zijn de ergste leugens die er bestaan. Want je gelooft ze. En ondertussen klaag je dat je leven niet vooruit gaat.</p>

      <p>Echte vooruitgang begint bij brutale eerlijkheid over waar je werkelijk staat. Na drie jaar werken met Straight-Line Leadership kan ik je vertellen: die confrontatie met jezelf wordt nooit comfortabel. Maar het is de enige weg vooruit.</p>

      <p>Dus hier is mijn vraag aan jou: welk verhaal vertel je jezelf dat misschien niet waar is? En wat kost je dat?</p>
    `,
  },
  {
    type: "blog",
    slug: "gewoontes-aanleren",
    title: "Geweldige gewoontes aanleren die blijvend zijn!",
    date: "10 maart 2025",
    category: "Implementatie",
    excerpt:
      "Deze tool werkt het beste bij mijn klanten. Een simpele habit tracker die je in minder dan 2 minuten per dag invult.",
    content: `
      <p>Ik had altijd moeite met het vasthouden van nieuwe gewoontes. Of het nu ging om gezonder eten, cold showers, of dagelijks lezen — na een paar weken viel ik terug in mijn oude patroon.</p>

      <p>Daarom ontwikkelde ik een habit tracker die specifiek gericht is op duurzame gedragsverandering. Het werkt simpel: je voert je doelen en acties in, monitort je successen en missers, en identificeert patronen voor bijsturing.</p>

      <h3>Waarom dit werkt:</h3>
      <ul>
        <li><strong>Helderheid</strong> — Je prioriteiten worden transparant. Je maakt bewuste keuzes over waar je energie naartoe gaat.</li>
        <li><strong>Motivatie</strong> — Zichtbare vooruitgang houdt je in beweging.</li>
        <li><strong>Visuele eenvoud</strong> — Data en patronen vervangen vage voornemens.</li>
        <li><strong>Eerlijke feedback</strong> — De tool laat zien wat echt werkt, zonder oordeel.</li>
        <li><strong>Kleine winsten</strong> — Kleine dagelijkse veranderingen leiden tot grote verbeteringen.</li>
      </ul>

      <p>Download de habit tracker en begin vandaag. Geen excuses, alleen actie.</p>
    `,
  },
  {
    type: "blog",
    slug: "beloftes-nakomen",
    title: "Hoe kom je echt al je beloftes na?",
    date: "6 februari 2025",
    category: "Implementatie",
    excerpt:
      "Een video over de 3 type beloftes van 20 minuten. Sinds ik dit toepas ben ik efficiënter, betrouwbaarder en heb ik meer tijd voor wat er echt toe doet.",
    content: `
      <p>Jaren geleden werd ik door een coach gechallenged op mijn betrouwbaarheid. 'Het komt wel goed', 'ik doe het later wel', 'maak je geen zorgen'. Klinkt herkenbaar? Ik deed het constant.</p>

      <p>Toen zei mijn coach iets dat alles veranderde: 'Dat komt omdat je zwakke beloftes maakt.'</p>

      <p>Sinds ik de drie types beloftes ken en toepas, is er veel veranderd: ik ben efficiënter, mijn reputatie als betrouwbaar persoon is gegroeid, ik communiceer beter, en ik heb meer tijd voor wat er echt toe doet.</p>

      <h3>De 3 types beloftes:</h3>
      <ul>
        <li><strong>Type 1: De volle belofte</strong> — Je committeert je 100%. Geen ruimte voor twijfel.</li>
        <li><strong>Type 2: De voorwaardelijke belofte</strong> — Je committeert je, mits aan bepaalde voorwaarden wordt voldaan.</li>
        <li><strong>Type 3: Geen belofte</strong> — Je zegt eerlijk 'nee' of 'ik weet het nog niet'. Beter dan een loze belofte.</li>
      </ul>

      <p>Het verschil tussen succesvolle mensen en de rest? Ze maken minder beloftes. Maar de beloftes die ze maken, komen ze na. Elke keer.</p>
    `,
  },
  {
    type: "blog",
    slug: "what-you-are-not-changing",
    title: "What you are not changing, you're choosing.",
    date: "25 januari 2025",
    category: "Mindset",
    excerpt:
      "Niet voor je gezondheid zorgen is een keuze. In een situatie blijven die niet werkt is een keuze. Je dromen uitstellen is een keuze.",
    content: `
      <p>What you are not changing, you're choosing.</p>

      <p>Niet voor je gezondheid zorgen? Dat is een keuze.</p>

      <p>In een situatie blijven die niet werkt? Dat is een keuze.</p>

      <p>In een relatie blijven waar je niet gelukkig bent? Dat is een keuze.</p>

      <p>Niet 'nee' zeggen tegen mensen die je energie kosten? Dat is een keuze.</p>

      <p>Je dromen al jaren voor je uitschuiven? Dat is een keuze.</p>

      <p>Het voelt misschien makkelijker om te geloven dat het buiten je macht ligt. Maar dat denken houdt het juist in stand.</p>

      <p>Het punt is dit: zodra je accepteert dat jij verantwoordelijk bent voor waar je nu staat — ongeacht hoe je daar gekomen bent — dan heb je pas echt de macht om iets te veranderen.</p>

      <p>Simpel concept. Moeilijk in de praktijk. Maar de moeite waard.</p>

      <p>Dus mijn vraag aan jou: waar geloof jij nog dat je geen keuze hebt?</p>
    `,
  },
  {
    type: "blog",
    slug: "waarom-geen-coach",
    title: "Waarom ik eigenlijk geen coach zou moeten zijn...",
    date: "14 januari 2025",
    category: "Persoonlijk",
    excerpt:
      "Een eerlijk verhaal over hoe ik van meester-uitsteller en feestbeest veranderde in een high-performance coach en IRONMAN finisher.",
    content: `
      <p>Laat me eerlijk zijn: ik ben verre van perfect. Tien jaar geleden was ik de koning van het uitstellen. Als iemand me toen had verteld dat ik coach zou worden, had ik hem uitgelachen.</p>

      <p>Mijn prioriteitenlijst zag er ongeveer zo uit: roken, drinken, feesten. In die volgorde. Ik was een meester in het verschuiven van alles wat belangrijk was naar 'morgen'. Mijn to-do lijst was meer een vrijblijvend wensenlijstje.</p>

      <p>Wat veranderde? Kleine stappen. Struikelen, leren, en eerlijke feedback krijgen van mensen die bereid waren me een spiegel voor te houden. Niet de mensen die zeiden wat ik wilde horen, maar de mensen die zeiden wat ik moest horen.</p>

      <p>Die ervaring is precies waarom ik nu doe wat ik doe. Coaching verandert levens op manieren die je niet verwacht.</p>

      <p>De versie van mijzelf van vijf jaar geleden kon zich mijn huidige leven niet voorstellen: high-performance coach, IRONMAN finisher, en verloofd met mijn droompartner.</p>

      <p>Niet mijn ouders, niet ik, niemand had dit zien aankomen. En dat is precies het punt — je weet niet wat er mogelijk is totdat je begint.</p>
    `,
  },
  {
    type: "blog",
    slug: "tools-die-het-verschil-maken",
    title: "Welke tools zijn een echte game-changer geweest?",
    date: "25 december 2024",
    category: "Implementatie",
    excerpt:
      "Ik heb met meer dan 150 ondernemers, atleten en ambitieuze mensen gewerkt. Deze 3 tools maakten het grootste verschil.",
    content: `
      <p>De afgelopen jaren heb ik met meer dan 150 ondernemers, atleten en ambitieuze mensen samengewerkt. Allemaal op zoek naar groei.</p>

      <p>Van al die ervaringen zijn er drie tools die steeds terugkomen als echte game-changers:</p>

      <h3>Tool 1: Simpele inzichten die je krachtig houden</h3>
      <p>In wisselende omstandigheden — of het nu een drukke week is, een tegenslag in business, of een dip in energie — zijn het de simpele principes die je overeind houden. Niet de complexe strategieën.</p>

      <h3>Tool 2: Een bewezen methode om gewoontes te bouwen</h3>
      <p>Gewoontes die blijven plakken. Niet de 21-dagen mythe, maar een systeem dat werkt met hoe je brein echt functioneert. Klein beginnen, consistent herhalen, en bijsturen op basis van data.</p>

      <h3>Tool 3: Praktische stappen om effectief bij te sturen</h3>
      <p>In zowel business als gezondheid. De meeste mensen weten wat ze moeten doen. Het probleem is bijsturen wanneer het niet loopt. Deze tool geeft je een framework om snel te schakelen.</p>

      <p>Dit zijn lessen die mijn leven hebben veranderd, en die ik nu deel. Want kennis hoort niet achter een paywall.</p>
    `,
  },
];

// Backward-compatible export for any leftover imports
export const blogPosts = contentItems;
