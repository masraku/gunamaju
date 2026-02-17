import { getWhatsAppLink } from "@/data/company";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <>
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
}
