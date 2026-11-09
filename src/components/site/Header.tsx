import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/cas-logo.jpeg.asset.json";
import { NAV, waLink } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-card/95 backdrop-blur transition-shadow ${scrolled ? "border-border shadow-sm" : "border-transparent"}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#accueil" aria-label="Corporate African Solutions — accueil" className="block h-16 w-40 overflow-hidden">
          <img src={logo.url} alt="Logo Corporate African Solutions" className="h-full w-full scale-[1.9] object-contain" width={160} height={64} />
        </a>
        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" /> Discutons sur WhatsApp
        </a>
        <button className="p-2 lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-card px-5 pb-6 lg:hidden">
          <nav className="flex flex-col" aria-label="Navigation mobile">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-border py-4 font-display text-lg">
                {n.label}
              </a>
            ))}
          </nav>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center justify-center gap-2 bg-whatsapp py-4 font-semibold text-whatsapp-foreground">
            <WhatsAppIcon className="h-5 w-5" /> Discutons sur WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
