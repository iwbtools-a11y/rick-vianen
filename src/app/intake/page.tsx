"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type FormData = {
  naam: string;
  email: string;
  telefoon: string;
  leeftijd: string;
  beroep: string;
  bedrijf: string;
  doelen: string;
  ervaring: string;
  motivatie: string;
  pakket: string;
  hoe_gevonden: string;
};

const initialFormData: FormData = {
  naam: "",
  email: "",
  telefoon: "",
  leeftijd: "",
  beroep: "",
  bedrijf: "",
  doelen: "",
  ervaring: "",
  motivatie: "",
  pakket: "",
  hoe_gevonden: "",
};

export default function IntakePage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24 md:pb-0">
        <div className="max-w-lg text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight mb-6">
            Bedankt, {formData.naam.split(" ")[0]}!
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            Je intake is ontvangen. Rick neemt binnen 48 uur persoonlijk
            contact met je op. Geen verkoopgesprek — gewoon een eerlijk
            gesprek over waar je staat en waar je naartoe wilt.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors"
          >
            <span className="material-symbols-outlined text-xl">
              arrow_back
            </span>
            Terug naar Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 md:pb-0">
      {/* Compact Hero */}
      <section className="pt-32 pb-8 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black tracking-tight mb-3">
            Plan een <span className="text-primary">Gratis Gesprek</span>
          </h1>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            30 minuten. Geen pitch. Rick benoemt eerlijk wat hij ziet &mdash; daarna weet je het.
          </p>
          <div className="inline-flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
            <Image
              src="/images/rick-square.png"
              alt="Rick Vianen"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-sm">Rick Vianen</p>
              <p className="text-xs text-on-surface-variant">
                Persoonlijke review binnen 48 uur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Quick Book */}
      <section className="px-8 md:px-16 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface-container rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="font-[family-name:var(--font-headline)] font-bold text-lg mb-2">
                Direct inplannen?
              </h2>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Plan direct een gratis kennismakingsgesprek van 30 minuten via Calendly. Liever eerst het formulier invullen? Scroll naar beneden.
              </p>
            </div>
            <a
              href="https://calendly.com/rickvianen"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-xl">calendar_today</span>
              Open Calendly
            </a>
          </div>
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-outline-variant/30" />
            <span className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">Of vul het formulier in</span>
            <div className="flex-1 h-px bg-outline-variant/30" />
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-8 md:px-16 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-2xl font-bold mb-6">
                Persoonlijke Gegevens
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Volledige Naam *
                  </label>
                  <input
                    type="text"
                    name="naam"
                    required
                    value={formData.naam}
                    onChange={handleChange}
                    placeholder="Je volledige naam"
                    className="w-full bg-surface-container-highest border-none rounded-lg px-6 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="je@email.com"
                    className="w-full bg-surface-container-highest border-none rounded-lg px-6 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    name="telefoon"
                    value={formData.telefoon}
                    onChange={handleChange}
                    placeholder="+31 6 12345678"
                    className="w-full bg-surface-container-highest border-none rounded-lg px-6 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Leeftijd
                  </label>
                  <input
                    type="number"
                    name="leeftijd"
                    value={formData.leeftijd}
                    onChange={handleChange}
                    placeholder="35"
                    className="w-full bg-surface-container-highest border-none rounded-lg px-6 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Professional Info */}
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-2xl font-bold mb-6">
                Professioneel
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Beroep / Functie *
                  </label>
                  <input
                    type="text"
                    name="beroep"
                    required
                    value={formData.beroep}
                    onChange={handleChange}
                    placeholder="CEO, Ondernemer, Manager..."
                    className="w-full bg-surface-container-highest border-none rounded-lg px-6 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Bedrijfsnaam
                  </label>
                  <input
                    type="text"
                    name="bedrijf"
                    value={formData.bedrijf}
                    onChange={handleChange}
                    placeholder="Je bedrijf"
                    className="w-full bg-surface-container-highest border-none rounded-lg px-6 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Motivation */}
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-2xl font-bold mb-6">
                Jouw Ambitie
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Wat is je grootste uitdaging op dit moment? *
                  </label>
                  <textarea
                    name="doelen"
                    required
                    rows={4}
                    value={formData.doelen}
                    onChange={handleChange}
                    placeholder="Mijn werk wint het altijd van mijn gezondheid / Ik begin steeds opnieuw en val steeds terug / Ik weet wat ik moet doen maar doe het niet..."
                    className="w-full bg-surface-container-highest border-none rounded-lg px-6 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Sportervaring
                  </label>
                  <select
                    name="ervaring"
                    value={formData.ervaring}
                    onChange={handleChange}
                    className="w-full bg-surface-container-highest border-none rounded-lg px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">Selecteer je niveau</option>
                    <option value="beginner">
                      Beginner — minder dan 1 jaar actief
                    </option>
                    <option value="intermediate">
                      Gemiddeld — 1-3 jaar, niet consistent
                    </option>
                    <option value="advanced">
                      Gevorderd — 3+ jaar consistent
                    </option>
                    <option value="elite">
                      Ex-topsporter of competitief
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Waarom nu? Wat maakt dat je nu actie wilt ondernemen? *
                  </label>
                  <textarea
                    name="motivatie"
                    required
                    rows={4}
                    value={formData.motivatie}
                    onChange={handleChange}
                    placeholder="Wat is er veranderd? Waarom niet volgende maand?"
                    className="w-full bg-surface-container-highest border-none rounded-lg px-6 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Package preference */}
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-2xl font-bold mb-6">
                Voorkeur Pakket
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { value: "core", label: "MOVE Core", price: "€1.497/kwartaal" },
                  { value: "plus", label: "MOVE Plus", price: "€2.497/kwartaal" },
                  { value: "ultimate", label: "MOVE Ultimate", price: "€4.997/kwartaal" },
                ].map((pkg) => (
                  <label
                    key={pkg.value}
                    className={`cursor-pointer p-6 rounded-xl border-2 transition-all ${
                      formData.pakket === pkg.value
                        ? "border-primary bg-primary/5"
                        : "border-outline-variant/30 bg-white hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="pakket"
                      value={pkg.value}
                      checked={formData.pakket === pkg.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="font-[family-name:var(--font-headline)] font-bold text-lg block mb-1">
                      {pkg.label}
                    </span>
                    <span className="text-sm text-on-surface-variant">
                      {pkg.price}
                    </span>
                  </label>
                ))}
              </div>
              <p className="text-sm text-on-surface-variant mt-3">
                Nog niet zeker? Geen probleem — Rick bespreekt de opties in
                het kennismakingsgesprek.
              </p>
            </div>

            {/* How did you find us */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Hoe heb je MOVE gevonden?
              </label>
              <select
                name="hoe_gevonden"
                value={formData.hoe_gevonden}
                onChange={handleChange}
                className="w-full bg-surface-container-highest border-none rounded-lg px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary transition-all"
              >
                <option value="">Selecteer</option>
                <option value="social">Social Media (LinkedIn/Instagram)</option>
                <option value="referral">Via een bekende / oud-deelnemer</option>
                <option value="google">Google</option>
                <option value="podcast">Podcast</option>
                <option value="event">Event / Seminar</option>
                <option value="other">Anders</option>
              </select>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto bg-primary text-white px-12 py-5 rounded-lg font-[family-name:var(--font-headline)] font-bold text-lg hover:bg-primary-dark transition-colors editorial-shadow flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined text-2xl">
                  send
                </span>
                Verstuur Intake Formulier
              </button>
              <p className="text-xs text-on-surface-variant mt-4">
                Door dit formulier te versturen ga je akkoord met onze{" "}
                <span className="underline">
                  privacyverklaring
                </span>
                . Je gegevens worden vertrouwelijk behandeld.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
