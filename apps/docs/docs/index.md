---
layout: home

hero:
  name: VeloKit
  text: High-Velocity Discord Bot Engine
  tagline: The ultimate scaffolding tool for modular, production-ready Discord bots.
  image:
    src: /logo.svg
    alt: VeloKit Logo
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/sploov-xyz/velokit

features:
  - title: ⚡ High Velocity
    details: Forge a complete bot architecture in seconds using our 7-Phase interactive CLI.
  - title: 🧩 Modular Souls
    details: Inject Music, AI, or Moderation modules dynamically without touching boilerplate.
  - title: 🛡️ Production Grade
    details: Built-in validation, premium logging, and Docker support for enterprise-level stability.
---

<div align="center">
  <img src="/banner.svg" class="dark-only" style="border-radius: 12px; margin: 40px 0; border: 1px solid rgba(255,255,255,0.1);" />
  <img src="/banner-light.svg" class="light-only" style="border-radius: 12px; margin: 40px 0; border: 1px solid rgba(0,0,0,0.1);" />
</div>

<style>
.dark-only { display: none; }
:root.dark .dark-only { display: block; }
:root.dark .light-only { display: none; }

:root {
  --vp-c-brand: #008B8B;
  --vp-c-brand-light: #6600CC;
  --vp-c-brand-lighter: #8B008B;
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #008B8B 0%, #8B008B 100%);
}

:root.dark {
  --vp-c-brand: #00FFFF;
  --vp-c-brand-light: #8000FF;
  --vp-c-brand-lighter: #FF00FF;
  --vp-home-hero-name-background: linear-gradient(135deg, #00FFFF 0%, #FF00FF 100%);
  --vp-home-hero-image-filter: drop-shadow(0 0 40px rgba(0, 255, 255, 0.2));
}
</style>