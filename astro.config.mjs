import { defineConfig } from "astro/config";
import { sanityIntegration } from "@sanity/astro";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://abruno.net",
  prefetch: true,
  integrations: [
    sanityIntegration({
      projectId: "vqft6e9t",
      dataset: "production",
      useCdn: false
    }), 
    tailwind({
      applyBaseStyles: false
    }),   
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    alpinejs(),
    sitemap()
  ]
});