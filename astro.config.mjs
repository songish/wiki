import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://wiki.songish.app",
  integrations: [
    starlight({
      title: "Songish Wiki",
      logo: {
        src: "./src/assets/logo.svg",
      },
      editLink: {
        baseUrl: "https://github.com/songish/wiki/edit/main/",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        // Eventually, we should add more languages here.
      },

      social: {
        github: "https://github.com/songish/wiki",
        discord: "https://songish.app/discord",
        mastodon: "https://indieapps.space/@songish",
        twitter: "https://twitter.com/songishapp",
        instagram: "https://instagram.com/songish.app",
        threads: "https://www.threads.net/@songish.app",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
