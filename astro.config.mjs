// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import robotsTxt from "astro-robots-txt";

import vercel from "@astrojs/vercel/serverless";

//https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        // Konfigurasi opsional seperti limit input pixels atau kualitas kompresi gambar
        limitInputPixels: false, // agar bisa memproses gambar besar
      },
    },
  },

  // Tambahkan URL situs di sini
  site: "https://tigrisfire.com/",

  // Konfigurasi lain
  integrations: [sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }), react({
    experimentalReactChildren: true,
  }), robotsTxt()],

  output: "server",
  adapter: vercel()
});