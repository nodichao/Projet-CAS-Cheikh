export const WHATSAPP_NUMBER = "221777494711";
export const DEFAULT_WA_MESSAGE =
  "Bonjour Corporate African Solutions, je souhaite obtenir davantage d'informations sur vos activités et vos opportunités de partenariat.";

export function waLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const PHONES = ["+221 77 749 47 11", "+221 76 930 29 62"];
export const EMAIL = "senecheikhahmed@gmail.com";
export const LOCATION = "Dakar, Sénégal";
export const SLOGAN = "Connecting Africa to Global Opportunities";

export const NAV = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#activites", label: "Nos activités" },
  { href: "#partenariats", label: "Partenariats" },
  { href: "#contact", label: "Contact" },
];

export const ACTIVITIES = [
  { title: "Commerce & Distribution", text: "Mise à disposition de produits adaptés aux marchés locaux, de l'approvisionnement jusqu'aux points de vente." },
  { title: "Import & Export", text: "Organisation des flux de marchandises entre l'Afrique et les marchés internationaux." },
  { title: "E-commerce", text: "Vente et promotion de produits via les canaux numériques, au plus près des consommateurs." },
  { title: "Logistique & Transport", text: "Coordination de l'acheminement des marchandises, du fournisseur jusqu'à destination." },
  { title: "Services aux entreprises", text: "Accompagnement opérationnel et commercial des entreprises dans leurs projets." },
  { title: "Développement & Partenariats", text: "Mise en relation et construction de partenariats commerciaux durables." },
  { title: "Événementiel", text: "Conception et organisation d'événements à vocation professionnelle et commerciale." },
  { title: "Food & Agroalimentaire", text: "Approvisionnement et distribution de produits alimentaires répondant à la demande locale." },
];
