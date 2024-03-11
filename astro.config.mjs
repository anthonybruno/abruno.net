import { defineConfig } from "astro/config";
// import { sanityIntegration } from "@sanity/astro";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
// import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://abruno.net",
  prefetch: true,
  integrations: [
    // sanityIntegration({
    //   projectId: "",
    //   dataset: "production",
    //   useCdn: false,
    // }),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    // partytown({
    //   config: {
    //     forward: ["dataLayer.push"],
    //   },
    // }),
  ],
});
