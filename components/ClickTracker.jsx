"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";

/**
 * Sends a Vercel Analytics custom event for every WhatsApp / marketplace click,
 * without having to wire onClick handlers into each button.
 *
 * Events (see Vercel dashboard → Analytics → Events):
 *   whatsapp_click     { page, location, product }
 *   marketplace_click  { page, store, product }
 *
 * Optional data attributes on the <a> refine the event:
 *   data-track-location="kartu_produk"   where on the page the button is
 *   data-track-product="Masker N95 ..."  which product it is about
 *   data-track-store="shopee"            which marketplace
 */
const detectStore = (href) => {
  if (href.includes("tokopedia.com")) return "tokopedia";
  if (href.includes("shopee.co.id")) return "shopee";
  return null;
};

export default function ClickTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const { trackLocation, trackProduct, trackStore } = link.dataset;

      const props = { page: pathname };
      if (trackProduct) props.product = trackProduct.slice(0, 250);

      if (href.includes("wa.me/")) {
        props.location =
          trackLocation ||
          (link.classList.contains("whatsapp-float") ? "tombol_melayang" : "lainnya");
        track("whatsapp_click", props);
        return;
      }

      const store = trackStore || detectStore(href);
      if (store) {
        props.store = store;
        track("marketplace_click", props);
      }
    };

    // capture phase so the event is sent even though links open a new tab
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  return null;
}
