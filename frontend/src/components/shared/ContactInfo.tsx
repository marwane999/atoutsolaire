import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ContactInfoProps {
  showWhatsApp?: boolean;
  variant?: "default" | "compact" | "inline";
  className?: string;
}

export function ContactInfo({
  showWhatsApp = false,
  variant = "default",
  className,
}: ContactInfoProps) {
  const items = [
    {
      icon: Phone,
      label: CONTACT.phoneFormatted,
      href: `tel:${CONTACT.phone}`,
    },
    {
      icon: Mail,
      label: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    { icon: MapPin, label: CONTACT.address },
    { icon: Clock, label: CONTACT.hours },
  ];

  if (variant === "compact") {
    return (
      <div className={cn("space-y-2", className)}>
        <a
          href={`tel:${CONTACT.phone}`}
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>{CONTACT.phoneFormatted}</span>
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>{CONTACT.email}</span>
        </a>
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const Icon = item.icon;
        const content = (
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          </div>
        );
        if (item.href) {
          return (
            <a
              key={item.label}
              href={item.href}
              className="block hover:opacity-80 transition-opacity"
            >
              {content}
            </a>
          );
        }
        return <div key={item.label}>{content}</div>;
      })}
      {showWhatsApp && (
        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-[#25D366] hover:text-[#20BD5A] transition-colors"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <span className="font-medium">WhatsApp: +212 {CONTACT.mobileFormatted}</span>
        </a>
      )}
    </div>
  );
}
