import { SITE } from "./constants";

async function apiRequest<T>(endpoint: string, data: unknown): Promise<T> {
  const response = await fetch(`${SITE.apiUrl}/api/v1/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: "Erreur serveur" }));
    throw new Error(error.detail || "Erreur lors de l'envoi");
  }

  return response.json();
}

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: "devis" | "info" | "sav" | "partenariat";
  message: string;
}

export interface NewsletterData {
  email: string;
  name?: string;
}

export interface DevisData {
  name: string;
  phone: string;
  email: string;
  city: string;
  property_type: string;
  monthly_bill: number;
  needs: string[];
  message?: string;
}

export async function submitContact(data: ContactData) {
  return apiRequest<{ success: boolean; message: string }>("contact", data);
}

export async function subscribeNewsletter(data: NewsletterData) {
  return apiRequest<{ success: boolean; message: string }>("newsletter", data);
}

export async function submitDevis(data: DevisData) {
  return apiRequest<{
    success: boolean;
    message: string;
    estimated_savings?: number;
    recommended_product?: string;
  }>("devis", data);
}
