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
