import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "VeloKit",
  description: "The Ultimate Discord Bot Scaffolder",
  base: '/',
  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo.svg'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Changelog', link: '/changelog/changelog' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'The 7-Phase Forge', link: '/guide/the-forge' }
        ]
      },
      {
        text: 'Modules',
        items: [
          { text: 'Music', link: '/guide/module-music' },
          { text: 'AI Integration', link: '/guide/module-ai' }
        ]
      },
      {
        text: 'Project',
        items: [
          { text: 'Changelog', link: '/changelog/changelog' },
          { text: 'Privacy Policy', link: '/legal/privacy' },
          { text: 'Terms of Service', link: '/legal/terms' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sploov-xyz/velokit' },
      { icon: 'discord', link: 'https://discord.gg/sploov' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Sploov Team'
    }
  }
})
