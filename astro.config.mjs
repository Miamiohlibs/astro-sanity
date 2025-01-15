// Loading environment variables from .env files
// https://docs.astro.build/en/guides/configuring-astro/#environment-variables
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://miamiohlibs.github.io',
  base: '',
   build: {
     assets: 'astro',
   },
  output: 'static',
  integrations: [
    react(), 
    markdoc(), 
    keystatic()
  ],
});