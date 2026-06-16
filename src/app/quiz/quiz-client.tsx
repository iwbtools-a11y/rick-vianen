'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// TODO: update KLAVIYO_LIST_ID with the quiz-specific list ID from your Klaviyo account
const KLAVIYO_COMPANY_ID = 'YgCeNj';
const KLAVIYO_LIST_ID = 'XpKvKm';

const QUESTIONS = [
  {
    text: "Als je terugkijkt op de afgelopen 6 maanden: wat is er echt veranderd?",
    options: [
      { letter: 'A', text: "Veel begonnen, weinig afgemaakt. Ik sprong van het een naar het ander.", scores: [2,0,0,1] },
      { letter: 'B', text: "Ik heb mooie dingen bereikt, maar het voelde altijd gehaast en ongestructureerd.", scores: [0,1,2,0] },
      { letter: 'C', text: "Eerlijk gezegd niet zoveel. Ik wist niet goed waar ik moest beginnen.", scores: [0,0,0,2] },
    ],
  },
  {
    text: "Hoe concreet zijn jouw doelen voor dit jaar?",
    options: [
      { letter: 'A', text: "Ik heb ze in mijn hoofd, maar nergens op papier.", scores: [2,0,0,1] },
      { letter: 'B', text: "Ik heb ze opgeschreven maar ik kijk er zelden naar.", scores: [1,2,0,0] },
      { letter: 'C', text: "Ik heb doelen maar ik twijfel of het de juiste zijn.", scores: [0,1,0,2] },
    ],
  },
  {
    text: "Wat herken je het meest?",
    options: [
      { letter: 'A', text: "Ik weet wat ik moet doen, maar kom er zelden aan toe.", scores: [2,1,0,0] },
      { letter: 'B', text: "Ik begin goed, maar na een paar weken verslapt het.", scores: [1,2,0,0] },
      { letter: 'C', text: "Mijn energie zit niet consistent goed. Dat remt me meer dan ik wil toegeven.", scores: [0,0,2,1] },
    ],
  },
  {
    text: "Hoe ziet groei in je werk of business eruit voor jou?",
    options: [
      { letter: 'A', text: "Ik wil schalen, maar ik doe nog te veel zelf.", scores: [0,0,1,2] },
      { letter: 'B', text: "Ik weet wat de volgende stap is, maar ik stel hem uit.", scores: [0,2,0,1] },
      { letter: 'C', text: "Ik mis een helder plan. Ik reageer meer dan dat ik stuur.", scores: [2,0,0,1] },
    ],
  },
  {
    text: "Wie om je heen helpt jou groeien?",
    options: [
      { letter: 'A', text: "Ik doe het grotendeels alleen. Mijn omgeving begrijpt niet altijd wat ik nastreef.", scores: [1,0,0,2] },
      { letter: 'B', text: "Ik heb mensen om me heen, maar ik houd weinig accountable.", scores: [0,2,1,0] },
      { letter: 'C', text: "Ik merk dat ik me aanpas aan anderen in plaats van andersom.", scores: [0,0,1,2] },
    ],
  },
  {
    text: "Als je over een jaar terugkijkt en het jaar was een succes: wat is er dan veranderd?",
    options: [
      { letter: 'A', text: "Ik heb eindelijk de structuur om consistent te presteren.", scores: [2,0,1,0] },
      { letter: 'B', text: "Ik heb één groot doel daadwerkelijk gerealiseerd, niet alleen geprobeerd.", scores: [0,2,0,1] },
      { letter: 'C', text: "Ik voel me sterker, scherper en meer in controle dan nu.", scores: [0,0,2,1] },
    ],
  },
];

const TYPE_NAMES = ['Structuur', 'Actie', 'Energie', 'Richting'];

const RESULTS = [
  {
    typeLabel: 'De Strateeg zonder Structuur',
    headline: 'Jij weet wat je wil.',
    sub: 'Maar je mist het systeem om het te realiseren.',
    body: 'Je hebt visie, ambitie en meer dan genoeg energie. Wat ontbreekt is een structuur die die energie omzet in consistente actie. Je begint sterk, maar zonder een helder systeem verslapt het na een paar weken. Het goede nieuws: dit is het meest oplosbare probleem van de vier.',
    ctaHeadline: 'MOVE geeft je precies dat systeem.',
    ctaBody: 'In 100 dagen bouw je de structuur die ervoor zorgt dat jouw energie altijd op de juiste plek terechtkomt. Niet harder werken, maar slimmer sturen.',
    ctaText: 'Ontdek MOVE',
    ctaHref: '/programma',
  },
  {
    typeLabel: 'De Uitsteller met Potentieel',
    headline: 'Je weet wat de volgende stap is.',
    sub: 'Maar je zet hem niet.',
    body: 'Je hebt de kennis, vaak ook de ervaring. Maar er is iets wat je tegenhoudt: twijfel, drukte, of het gevoel dat de timing niet goed is. Spoiler: de timing wordt nooit perfect. Wat je nodig hebt is iemand die je helpt die stap wél te zetten, en je accountable houdt.',
    ctaHeadline: 'Start met de 5-daagse challenge.',
    ctaBody: 'In 5 dagen bewijs je aan jezelf dat je wél in actie kan komen. Geen theorie, maar een concrete eerste stap. €100, verrekenbaar met MOVE.',
    ctaText: 'Doe mee aan de challenge',
    ctaHref: '/challenge',
  },
  {
    typeLabel: 'De Overlever',
    headline: 'Je presteert.',
    sub: 'Maar het kost je meer dan het zou moeten.',
    body: 'Je haalt resultaten, maar het gaat gepaard met te veel energie, te weinig rust, en het gevoel dat je altijd aan het rennen bent. Groei voelt niet licht. Dat is geen karakterfout, dat is een signaal dat iets in je aanpak niet klopt.',
    ctaHeadline: 'Groeien zonder jezelf op te branden.',
    ctaBody: 'MOVE is gebouwd voor mensen die al presteren maar merken dat het niet duurzaam is. Je leert niet harder werken, maar de juiste dingen doen op het juiste moment.',
    ctaText: 'Ontdek MOVE',
    ctaHref: '/programma',
  },
  {
    typeLabel: 'De Zoeker',
    headline: 'Je weet wat je niet wil.',
    sub: 'Maar nog niet precies wat je wel wil.',
    body: 'Je staat op een punt van heroriëntatie. Het oude patroon werkt niet meer, een nieuw patroon is nog niet helder. Dat is geen probleem, dat is het begin van iets beters. Maar je hebt iemand nodig die je helpt die richting scherp te krijgen.',
    ctaHeadline: 'MOVE begint met precies die vraag.',
    ctaBody: 'De eerste stap is altijd helderheid. Wat wil jij, en waar wil je naartoe? De 5-daagse challenge is de ideale plek om dat uit te zoeken.',
    ctaText: 'Start de challenge',
    ctaHref: '/challenge',
  },
];

function calculateScores(answers: (number | null)[]): number[] {
  const scores = [0, 0, 0, 0];
  answers.forEach((ansIdx, qIdx) => {
    if (ansIdx === null) return;
    QUESTIONS[qIdx].options[ansIdx].scores.forEach((v, t) => { scores[t] += v; });
  });
  return scores;
}

function getWinningType(scores: number[]): number {
  return scores.indexOf(Math.max(...scores));
}

type Screen = 'intro' | 'quiz' | 'capture' | 'loading' | 'result';

export function QuizClient() {
  const [screen, setScreen] = useState<Screen>('intro');
  const [animKey, setAnimKey] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [finalScores, setFinalScores] = useState<number[]>([0, 0, 0, 0]);
  const [resultTypeIdx, setResultTypeIdx] = useState(0);
  const [copyText, setCopyText] = useState('Kopieer link');
  const [barsVisible, setBarsVisible] = useState(false);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalSteps = QUESTIONS.length + 2;

  const progress =
    screen === 'intro' ? 0
    : screen === 'quiz' ? Math.round((currentQ / totalSteps) * 100)
    : screen === 'capture' ? Math.round(((QUESTIONS.length + 1) / totalSteps) * 100)
    : 100;

  useEffect(() => {
    if (screen === 'result') {
      const t = setTimeout(() => setBarsVisible(true), 150);
      return () => clearTimeout(t);
    }
    setBarsVisible(false);
  }, [screen]);

  const goToScreen = (s: Screen) => {
    setScreen(s);
    setAnimKey(k => k + 1);
    window.scrollTo(0, 0);
  };

  const startQuiz = () => {
    setCurrentQ(0);
    setAnswers(Array(QUESTIONS.length).fill(null));
    goToScreen('quiz');
  };

  const selectOption = (idx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = idx;
    setAnswers(newAnswers);

    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    advanceTimer.current = setTimeout(() => {
      advanceTimer.current = null;
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(q => q + 1);
        setAnimKey(k => k + 1);
        window.scrollTo(0, 0);
      } else {
        goToScreen('capture');
      }
    }, 420);
  };

  const nextQuestion = () => {
    if (answers[currentQ] === null) return;
    if (advanceTimer.current) { clearTimeout(advanceTimer.current); advanceTimer.current = null; }
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(q => q + 1);
      setAnimKey(k => k + 1);
      window.scrollTo(0, 0);
    } else {
      goToScreen('capture');
    }
  };

  const goBack = () => {
    if (currentQ > 0) {
      setCurrentQ(q => q - 1);
      setAnimKey(k => k + 1);
      window.scrollTo(0, 0);
    } else {
      goToScreen('intro');
    }
  };

  const submitLead = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Vul een geldig e-mailadres in.');
      return;
    }
    setFormError('');
    setIsSubmitting(true);

    const scores = calculateScores(answers);
    const typeIdx = getWinningType(scores);

    await sendToKlaviyo(name, email, typeIdx, scores);

    setFinalScores(scores);
    setResultTypeIdx(typeIdx);
    setIsSubmitting(false);
    goToScreen('loading');

    setTimeout(() => goToScreen('result'), 1800);
  };

  const sendToKlaviyo = async (
    firstName: string,
    emailAddress: string,
    typeIdx: number,
    scores: number[],
  ) => {
    const payload = {
      data: {
        type: 'subscription',
        attributes: {
          custom_source: 'MOVE Quiz',
          profile: {
            data: {
              type: 'profile',
              attributes: {
                email: emailAddress,
                first_name: firstName,
                properties: {
                  quiz_type: RESULTS[typeIdx].typeLabel,
                  quiz_type_index: typeIdx + 1,
                  quiz_score_structuur: scores[0],
                  quiz_score_actie: scores[1],
                  quiz_score_energie: scores[2],
                  quiz_score_richting: scores[3],
                },
              },
            },
          },
        },
        relationships: {
          list: { data: { type: 'list', id: KLAVIYO_LIST_ID } },
        },
      },
    };

    try {
      await fetch(`https://a.klaviyo.com/client/subscriptions/?company_id=${KLAVIYO_COMPANY_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', revision: '2023-12-15' },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.warn('Klaviyo call failed (non-blocking):', e);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopyText('Gekopieerd!');
      setTimeout(() => setCopyText('Kopieer link'), 2000);
    });
  };

  const q = QUESTIONS[currentQ];
  const result = RESULTS[resultTypeIdx];
  const maxScore = Math.max(...finalScores) || 1;

  return (
    <>
      {/* Progress bar — sits just below the fixed navbar (~92px) */}
      <div className="fixed top-[92px] left-0 right-0 h-[3px] bg-outline-variant/30 z-40">
        <div
          className="h-full bg-primary transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div key={animKey} className="quiz-screen-enter">

        {/* ── INTRO ─────────────────────────────────────────────── */}
        {screen === 'intro' && (
          <section className="bg-on-surface min-h-screen flex items-center px-6 md:px-16 pt-[120px] pb-16">
            <div className="w-full max-w-2xl mx-auto">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-primary mb-4">
                Rick Vianen — MOVE
              </p>

              <div
                className="font-[family-name:var(--font-headline)] text-primary font-black leading-[0.9] mb-2"
                style={{ fontSize: 'clamp(72px, 18vw, 120px)' }}
              >
                95<span style={{ fontSize: '0.5em', opacity: 0.6 }}>%</span>
              </div>
              <p className="text-[13px] font-medium text-white/55 tracking-[0.06em] uppercase mb-8">
                van de mensen haalt hun doelen niet
              </p>

              <h1
                className="font-[family-name:var(--font-headline)] text-white font-black leading-[1.0] mb-5"
                style={{ fontSize: 'clamp(32px, 8vw, 52px)' }}
              >
                Ben jij klaar voor je volgende stap?
              </h1>
              <p className="text-base text-white/75 leading-relaxed mb-10 max-w-[480px]">
                Je wil groeien — in business, conditie, focus. Maar je hebt zes doelen en geen van alle staat écht stil. Doe de test en ontdek in 2 minuten welk één ding voor jou het meeste verschil maakt.
              </p>

              <div className="flex gap-6 flex-wrap mb-10">
                {[
                  { icon: 'schedule', label: '2 minuten' },
                  { icon: 'checklist', label: '6 vragen' },
                  { icon: 'bolt', label: 'Direct resultaat' },
                ].map(item => (
                  <span key={item.label} className="flex items-center gap-1.5 text-xs text-white/45">
                    <span className="material-symbols-outlined text-sm">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>

              <button
                onClick={startQuiz}
                className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold"
              >
                Start de test
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </section>
        )}

        {/* ── QUIZ ──────────────────────────────────────────────── */}
        {screen === 'quiz' && (
          <section className="gradient-warm min-h-screen flex items-center px-6 md:px-16 pt-[120px] pb-16">
            <div className="w-full max-w-2xl mx-auto">
              <p className="text-xs font-medium text-on-surface-variant mb-6 tracking-[0.04em]">
                Vraag {currentQ + 1} van {QUESTIONS.length}
              </p>
              <h2
                className="font-[family-name:var(--font-headline)] text-on-surface font-black leading-[1.1] mb-8"
                style={{ fontSize: 'clamp(26px, 6vw, 40px)' }}
              >
                {q.text}
              </h2>

              <div className="flex flex-col gap-3">
                {q.options.map((opt, i) => {
                  const isSelected = answers[currentQ] === i;
                  return (
                    <button
                      key={i}
                      onClick={() => selectOption(i)}
                      className={`flex items-start gap-3.5 px-5 py-4 bg-white border-[1.5px] rounded-lg text-left transition-all duration-150 cursor-pointer
                        ${isSelected
                          ? 'border-primary shadow-[0_0_0_3px_rgba(232,82,17,0.08)]'
                          : 'border-outline-variant hover:border-primary hover:shadow-[0_0_0_3px_rgba(232,82,17,0.06)]'
                        }`}
                    >
                      <span
                        className={`shrink-0 w-7 h-7 rounded-full border-[1.5px] flex items-center justify-center text-xs font-bold transition-all duration-150
                          ${isSelected
                            ? 'bg-primary border-primary text-white'
                            : 'border-outline-variant text-on-surface-variant'
                          }`}
                      >
                        {opt.letter}
                      </span>
                      <span className="text-[15px] leading-relaxed text-on-surface pt-0.5">
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 flex justify-between items-center">
                <button
                  onClick={goBack}
                  className={`flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-on-surface transition-colors ${currentQ === 0 ? 'invisible' : ''}`}
                >
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                  Terug
                </button>
                <button
                  onClick={nextQuestion}
                  disabled={answers[currentQ] === null}
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold disabled:opacity-35 disabled:pointer-events-none"
                >
                  Volgende
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ── LEAD CAPTURE ──────────────────────────────────────── */}
        {screen === 'capture' && (
          <section className="bg-on-surface min-h-screen flex items-center px-6 md:px-16 pt-[120px] pb-16">
            <div className="w-full max-w-2xl mx-auto">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-primary mb-4">
                Bijna klaar
              </p>
              <h2
                className="font-[family-name:var(--font-headline)] text-white font-black leading-[1.05] mb-3"
                style={{ fontSize: 'clamp(30px, 7vw, 48px)' }}
              >
                Waar stuur ik<br />jouw resultaat<br />naartoe?
              </h2>
              <p className="text-[15px] text-white/65 leading-relaxed mb-8">
                Je uitslag is klaar. Vul je naam en e-mailadres in en ik stuur je het resultaat plus een persoonlijk advies.
              </p>

              <div className="mb-4">
                <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-white/50 mb-2">
                  Voornaam
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && submitLead()}
                  placeholder="Jouw voornaam"
                  autoComplete="given-name"
                  className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.12] rounded-lg text-base text-white placeholder-white/25 outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-white/50 mb-2">
                  E-mailadres
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && submitLead()}
                  placeholder="jouw@email.nl"
                  autoComplete="email"
                  className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.12] rounded-lg text-base text-white placeholder-white/25 outline-none focus:border-primary transition-colors"
                />
                {formError && (
                  <p className="text-[13px] text-red-400 mt-2">{formError}</p>
                )}
              </div>

              <button
                onClick={submitLead}
                disabled={isSubmitting}
                className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold disabled:opacity-60 disabled:pointer-events-none"
              >
                {isSubmitting ? 'Even geduld…' : 'Bekijk mijn resultaat'}
                {!isSubmitting && <span className="material-symbols-outlined text-lg">arrow_forward</span>}
              </button>

              <p className="text-xs text-white/30 mt-5 leading-relaxed max-w-sm">
                Geen spam. Je gegevens worden alleen gebruikt om jou het resultaat en relevante updates van Rick Vianen te sturen. Je kunt je altijd afmelden.
              </p>
            </div>
          </section>
        )}

        {/* ── LOADING ───────────────────────────────────────────── */}
        {screen === 'loading' && (
          <section className="bg-on-surface min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-primary mb-12">
                Je resultaat wordt berekend
              </p>
              <div className="flex gap-2 justify-center">
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full quiz-dot"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── RESULT ────────────────────────────────────────────── */}
        {screen === 'result' && (
          <section className="gradient-warm min-h-screen px-6 md:px-16 pt-[120px] pb-16">
            <div className="w-full max-w-2xl mx-auto">

              {/* Type tag */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                {result.typeLabel}
              </div>

              <h2
                className="font-[family-name:var(--font-headline)] text-on-surface font-black leading-[1.05] mb-2"
                style={{ fontSize: 'clamp(30px, 7vw, 50px)' }}
              >
                {result.headline}
              </h2>
              <p className="text-lg font-semibold text-primary mb-6">{result.sub}</p>
              <p className="text-base text-on-surface/80 leading-[1.7] mb-9">{result.body}</p>

              {/* Score bars */}
              <div className="flex flex-col gap-3 mb-10">
                {finalScores.map((s, i) => {
                  const pct = Math.round((s / maxScore) * 100);
                  const isPrimary = i === resultTypeIdx;
                  return (
                    <div key={i}>
                      <div className="flex justify-between text-[13px] font-medium mb-1.5">
                        <span className="text-on-surface">{TYPE_NAMES[i]}</span>
                        <span className="text-on-surface-variant">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-outline-variant/30 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-[width] ease-[cubic-bezier(0.16,1,0.3,1)] ${isPrimary ? 'bg-primary' : 'bg-outline-variant'}`}
                          style={{
                            width: barsVisible ? `${pct}%` : '0%',
                            transitionDuration: '800ms',
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="h-px bg-outline-variant/30 my-9" />

              {/* CTA */}
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-3">
                Jouw volgende stap
              </p>
              <h3
                className="font-[family-name:var(--font-headline)] text-on-surface font-black leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(22px, 5vw, 34px)' }}
              >
                {result.ctaHeadline}
              </h3>
              <p className="text-[15px] text-on-surface/70 leading-relaxed mb-7">
                {result.ctaBody}
              </p>

              <Link
                href={result.ctaHref}
                className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold"
              >
                {result.ctaText}
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>

              {/* Share */}
              <div className="mt-8 pt-6 border-t border-outline-variant/30 flex items-center gap-3 flex-wrap">
                <span className="text-[13px] text-on-surface-variant">Deel jouw type:</span>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://rickvianen.nl/quiz')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-3.5 py-2 border border-outline-variant rounded-lg hover:border-primary hover:text-primary transition-colors text-on-surface"
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <button
                  onClick={copyLink}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-3.5 py-2 border border-outline-variant rounded-lg hover:border-primary hover:text-primary transition-colors text-on-surface"
                >
                  <span className="material-symbols-outlined text-base">content_copy</span>
                  {copyText}
                </button>
              </div>

            </div>
          </section>
        )}

      </div>
    </>
  );
}
