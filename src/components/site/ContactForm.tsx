import { useState, type FormEvent } from "react";
import { z } from "zod";
import { EMAIL, waLink } from "@/lib/contact";

const schema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom.").max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Adresse email invalide.").max(255),
  subject: z.string().trim().min(3, "Précisez le sujet.").max(150),
  message: z.string().trim().min(10, "Votre message doit contenir au moins 10 caractères.").max(2000),
});
type Data = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Data, string>>;

const field = "w-full border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-gold";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState<Data | null>(null);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const r = schema.safeParse(raw);
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as keyof Data] ??= i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setReady(r.data);
  }

  if (ready) {
    const body = `${ready.message}\n\n— ${ready.name}${ready.company ? `, ${ready.company}` : ""} (${ready.email})`;
    return (
      <div className="border border-gold bg-card p-8" role="status">
        <p className="eyebrow">Message prêt</p>
        <h3 className="mt-3 text-2xl">Merci {ready.name}.</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          L'envoi direct depuis le site sera activé prochainement. En attendant, transmettez votre message en un clic :
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={waLink(`${ready.subject}\n\n${body}`)} target="_blank" rel="noopener noreferrer" className="bg-whatsapp px-5 py-3 text-center text-sm font-semibold text-whatsapp-foreground">
            Envoyer via WhatsApp
          </a>
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(ready.subject)}&body=${encodeURIComponent(body)}`} className="border border-foreground px-5 py-3 text-center text-sm font-semibold">
            Envoyer par email
          </a>
        </div>
        <button onClick={() => setReady(null)} className="mt-6 text-xs text-muted-foreground underline">
          Modifier le message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 bg-card p-8 sm:grid-cols-2">
      <F name="name" label="Nom" error={errors.name} />
      <F name="company" label="Entreprise" optional error={errors.company} />
      <F name="email" label="Adresse email" type="email" error={errors.email} />
      <F name="subject" label="Sujet de la demande" error={errors.subject} />
      <label className="block sm:col-span-2">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wider">Message</span>
        <textarea name="message" rows={5} className={field} aria-invalid={!!errors.message} />
        {errors.message && <span className="mt-1 block text-xs text-destructive">{errors.message}</span>}
      </label>
      <button type="submit" className="bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold hover:text-accent-foreground sm:col-span-2 sm:justify-self-start">
        Envoyer le message
      </button>
    </form>
  );
}

function F({ name, label, type = "text", optional, error }: { name: keyof Data; label: string; type?: string; optional?: boolean; error?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider">
        {label} {optional && <span className="font-normal normal-case text-muted-foreground">(facultatif)</span>}
      </span>
      <input name={name} type={type} className={field} aria-invalid={!!error} />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
