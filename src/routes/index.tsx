import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import hero from "@/assets/hero-port-dakar.jpg";
import meeting from "@/assets/partnership-meeting.jpg";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { ACTIVITIES, ADDRESS, EMAIL, MAP_EMBED, NAV, NINEA, PHONES, RCCM, SLOGAN, WHATSAPP_DISPLAY, waLink } from "@/lib/contact";

const logo = `${import.meta.env.BASE_URL}favicon.png`;

const TITLE = "Corporate African Solutions (CAS) — Commerce international, Dakar";
const DESC =
  "CAS connecte les entreprises africaines aux opportunités mondiales : import-export, distribution, logistique et partenariats commerciaux depuis Dakar, Sénégal.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STEPS = [
  "Identification des opportunités",
  "Sélection des partenaires",
  "Négociation commerciale",
  "Approvisionnement",
  "Commercialisation",
  "Développement à long terme",
];

const VALUES = [
  { t: "Fiabilité", d: "Des engagements tenus, à chaque étape de la relation commerciale." },
  { t: "Transparence", d: "Une communication claire avec nos partenaires et nos clients." },
  { t: "Vision à long terme", d: "Des relations construites pour durer, au-delà d'une transaction." },
];

const PARTNER_POINTS = [
  "Accès au marché sénégalais",
  "Connaissance des besoins locaux",
  "Développement commercial",
  "Recherche de débouchés en Afrique de l'Ouest",
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Index() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section id="accueil" className="relative isolate overflow-hidden bg-ink text-ink-foreground">
          <img src={hero} alt="Port de commerce de Dakar au coucher du soleil" width={1920} height={1088} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/10" />
          <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-center px-5 py-24 lg:px-8">
            <Reveal>
              <p className="eyebrow">Corporate African Solutions · Dakar</p>
              <h1 className="mt-6 font-display text-[clamp(5rem,16vw,12rem)] font-medium leading-[0.85] tracking-tight">
                C<span className="text-gold">A</span>S
              </h1>
              <p className="mt-6 max-w-2xl font-display text-2xl font-light sm:text-4xl">{SLOGAN}</p>
              <span className="mt-8 block h-px w-24 bg-gold" />
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
                Nous connectons les entreprises africaines aux opportunités mondiales en facilitant l'accès aux fournisseurs internationaux, aux produits, aux services et aux marchés.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#activites" className="group inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-gold-soft">
                  Découvrir nos activités <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href={waLink()} {...ext} className="inline-flex items-center justify-center gap-2 border border-ink-foreground/40 px-7 py-4 text-sm font-semibold transition-colors hover:border-whatsapp hover:bg-whatsapp">
                  <WhatsAppIcon className="h-4 w-4" /> Contacter CAS sur WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section id="a-propos" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">À propos de CAS</p>
              <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl">Des connexions commerciales. Des opportunités durables.</h2>
            </Reveal>
            <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7" delay={100}>
              <p>Corporate African Solutions est une entreprise sénégalaise qui développe des activités commerciales et des solutions adaptées aux besoins des marchés africains.</p>
              <p>Depuis Dakar, nous facilitons les échanges entre les entreprises africaines et les partenaires internationaux grâce à notre connaissance du terrain, notre réseau et notre approche orientée résultats.</p>
            </Reveal>
          </div>
          <div className="mt-20 grid border-t border-border md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 100} className="border-b border-border py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <span className="font-display text-sm text-gold">0{i + 1}</span>
                <h3 className="mt-3 text-2xl font-medium">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ACTIVITIES */}
        <section id="activites" className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Nos domaines d'activité</p>
                <h2 className="mt-5 max-w-xl text-4xl font-medium leading-tight sm:text-5xl">Huit métiers, une même ambition.</h2>
              </div>
              <p className="max-w-sm text-muted-foreground">Une offre intégrée pour accompagner les échanges entre l'Afrique et le monde.</p>
            </Reveal>
            <ol className="mt-16 grid sm:grid-cols-2">
              {ACTIVITIES.map((a, i) => (
                <li key={a.title} className="group border-t border-foreground/15 sm:odd:pr-10 sm:even:pl-10 sm:even:border-l">
                  <Reveal delay={(i % 2) * 80} className="flex gap-6 py-9">
                    <span className="font-display text-4xl font-light text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-xl font-medium transition-colors group-hover:text-gold">{a.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* APPROACH */}
        <section className="bg-ink py-24 text-ink-foreground lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow">Notre approche</p>
              <h2 className="mt-5 text-4xl font-medium sm:text-5xl">De l'opportunité au partenariat.</h2>
            </Reveal>
            <ol className="relative mt-20 grid gap-10 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
              <span aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px bg-gold/40 lg:block" />
              {STEPS.map((s, i) => (
                <li key={s} className="relative">
                  <Reveal delay={i * 90}>
                    <span className="relative block h-[15px] w-[15px] rotate-45 border border-gold bg-ink" />
                    <p className="mt-6 font-display text-sm text-gold">Étape {i + 1}</p>
                    <p className="mt-2 font-display text-lg leading-snug">{s}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PARTNERS */}
        <section id="partenariats" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <img src={meeting} alt="Échange entre partenaires d'affaires à Dakar" width={1200} height={1408} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow">Partenariats internationaux</p>
              <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl">Développons ensemble de nouvelles opportunités en Afrique.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Vous êtes fabricant, fournisseur ou distributeur et souhaitez développer votre présence sur les marchés africains ? Corporate African Solutions vous accompagne dans l'identification des opportunités et la construction de partenariats commerciaux durables.
              </p>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {PARTNER_POINTS.map((p) => (
                  <li key={p} className="flex items-center gap-4 py-4 font-medium">
                    <span className="h-2 w-2 rotate-45 bg-gold" /> {p}
                  </li>
                ))}
              </ul>
              <a href={waLink("Bonjour Corporate African Solutions, je représente une entreprise et souhaite devenir partenaire de CAS.")} {...ext} className="mt-10 inline-flex items-center gap-2 bg-whatsapp px-7 py-4 text-sm font-semibold text-whatsapp-foreground transition-transform hover:-translate-y-0.5">
                <WhatsAppIcon className="h-4 w-4" /> Devenir partenaire de CAS
              </a>
            </Reveal>
          </div>
        </section>

        {/* DAK CHOICE */}
        <section className="border-y border-border bg-gold-soft/40">
          <Reveal className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <p className="eyebrow">Écosystème CAS</p>
              <h2 className="mt-4 font-display text-5xl font-medium sm:text-6xl">Dak Choice</h2>
              <p className="mt-2 text-sm text-muted-foreground">Marque de commerce digital</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-lg leading-relaxed">
                Dak Choice sélectionne et propose des produits répondant aux attentes des consommateurs, notamment à travers les canaux numériques. La marque permet de tester les produits, d'analyser la demande et d'identifier de nouvelles opportunités commerciales.
              </p>
              <a href={waLink("Bonjour, je souhaite en savoir plus sur Dak Choice.")} {...ext} className="group mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-semibold transition-colors hover:border-gold hover:text-gold">
                En savoir plus <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:px-8">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">Contact</p>
              <h2 className="mt-5 text-4xl font-medium sm:text-5xl">Une opportunité ? Parlons-en.</h2>
              <p className="mt-6 text-muted-foreground">
                Vous souhaitez collaborer avec nous, développer votre activité en Afrique ou obtenir davantage d'informations sur nos services ? Notre équipe est à votre écoute.
              </p>
              <a href={waLink()} {...ext} className="mt-8 flex items-center gap-4 bg-whatsapp p-5 text-whatsapp-foreground transition-transform hover:-translate-y-0.5">
                <WhatsAppIcon className="h-8 w-8" />
                <span>
                  <span className="block text-xs uppercase tracking-wider opacity-90">Réponse rapide</span>
                  <span className="font-display text-lg font-medium">Écrire sur WhatsApp</span>
                </span>
              </a>
              <ul className="mt-8 space-y-4 text-sm">
                {PHONES.map((p) => (
                  <li key={p}>
                    <a href={`tel:${p.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-gold"><Phone className="h-4 w-4 text-gold" /> {p}</a>
                  </li>
                ))}
                <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all hover:text-gold"><Mail className="h-4 w-4 shrink-0 text-gold" /> {EMAIL}</a></li>
                <li><a href={waLink()} {...ext} className="flex items-center gap-3 hover:text-gold"><WhatsAppIcon className="h-4 w-4 text-gold" /> WhatsApp : {WHATSAPP_DISPLAY}</a></li>
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {ADDRESS}</li>
              </ul>
              <iframe title="Localisation de Corporate African Solutions" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-8 h-64 w-full border border-border" />
            </Reveal>
            <Reveal className="lg:col-span-7" delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink pb-10 pt-20 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="h-24 w-48 overflow-hidden bg-card">
              <img src={logo} alt="Logo Corporate African Solutions" loading="lazy" className="h-full w-full scale-[1.9] object-contain" />
            </div>
            <p className="mt-4 text-xs text-ink-foreground/75">NINEA : {NINEA}<br />RCCM : {RCCM}</p>
            <p className="mt-5 font-display text-lg font-light">{SLOGAN}</p>
          </div>
          <div>
            <h3 className="eyebrow">Navigation</h3>
            <ul className="mt-5 space-y-2 text-sm text-ink-foreground/75">
              {NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-gold">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow">Activités</h3>
            <ul className="mt-5 space-y-2 text-sm text-ink-foreground/75">
              {ACTIVITIES.map((a) => <li key={a.title}>{a.title}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow">Coordonnées</h3>
            <ul className="mt-5 space-y-2 text-sm text-ink-foreground/75">
              {PHONES.map((p) => <li key={p}><a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-gold">{p}</a></li>)}
              <li><a href={`mailto:${EMAIL}`} className="break-all hover:text-gold">{EMAIL}</a></li>
              <li><a href={waLink()} {...ext} className="hover:text-gold">WhatsApp : {WHATSAPP_DISPLAY}</a></li>
              <li>{ADDRESS}</li>
            </ul>
            <a href={waLink()} {...ext} className="mt-6 inline-flex items-center gap-2 bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <p className="mx-auto mt-16 max-w-7xl border-t border-ink-foreground/15 px-5 pt-8 text-xs text-ink-foreground/60 lg:px-8">
          © {new Date().getFullYear()} Corporate African Solutions SUARL. Tous droits réservés.
        </p>
      </footer>

      {/* Floating WhatsApp */}
      <a href={waLink()} {...ext} aria-label="Discuter avec CAS sur WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105">
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </>
  );
}
