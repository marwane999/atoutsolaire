"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { submitContact } from "@/lib/api";

const contactSchema = z.object({
  name: z.string().min(2, "Nom requis (min. 2 caractères)"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Téléphone requis (min. 10 chiffres)"),
  subject: z.enum(["devis", "info", "sav", "partenariat"], {
    errorMap: () => ({ message: "Sélectionnez un sujet" }),
  }),
  message: z.string().min(10, "Message trop court (min. 10 caractères)").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setError("");
    try {
      await submitContact(data);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'envoi");
    }
  };

  if (submitted) {
    return (
      <div className="bg-accent/5 rounded-2xl p-10 text-center">
        <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-secondary mb-2">
          Message envoyé ! ✅
        </h3>
        <p className="text-muted-foreground">
          Merci ! Nous vous répondrons sous 24h. Notre équipe reste à votre
          disposition.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-muted rounded-2xl p-6 md:p-10 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-secondary mb-1.5">
            Nom & Prénom
          </label>
          <input
            {...register("name")}
            placeholder="Votre nom"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-secondary mb-1.5">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="votre@email.com"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-secondary mb-1.5">
            Téléphone (WhatsApp)
          </label>
          <input
            {...register("phone")}
            placeholder="06 XX XX XX XX"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-secondary mb-1.5">
            Sujet
          </label>
          <select
            {...register("subject")}
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="devis">Demande de devis</option>
            <option value="info">Information</option>
            <option value="sav">Service Après-Vente</option>
            <option value="partenariat">Partenariat / Distribution</option>
          </select>
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-secondary mb-1.5">
          Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Décrivez votre besoin..."
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary resize-y"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="gdpr"
          required
          className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
        />
        <label htmlFor="gdpr" className="text-sm text-muted-foreground">
          J&apos;accepte la politique de confidentialité
        </label>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={isSubmitting}
      >
        <Send className="w-5 h-5" />
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        🔒 Vos données sont confidentielles. Réponse garantie sous 24h.
      </p>
    </form>
  );
}
