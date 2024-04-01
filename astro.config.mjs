import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import alpinejs from "@astrojs/alpinejs";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://abruno.net",
  prefetch: true,
  integrations: [
    sanity({
      projectId: "vqft6e9t",
      dataset: "production",
      useCdn: false
    }),
    tailwind({
    applyBaseStyles: false
    }), 
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    }), 
    sitemap({
      filter: page => page !== 'https://abruno.net/copy-mailto-privacy/'
    }), 
    alpinejs()
  ]
});