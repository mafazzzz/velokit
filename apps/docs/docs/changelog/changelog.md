# Changelog

All notable changes to **VeloKit** will be documented in this file.

## [1.0.1] - 2026-01-15

### Added
- **Multi-Project Engine:** Support for scaffolding **Express API** projects alongside Discord bots.
- **JavaScript (ESM) Support:** Full native JavaScript templates for all modules, including Music and AI.
- **TUI Overhaul:** Redesigned interactive CLI with modern borders, better headers, and improved UX.
- **Build Terminology:** Rebranded "Forge" to "Build/Construct" for broader project compatibility.
- **New Feature Badges:** Visual `[NEW]` indicators in CLI for recently added options.

### Changed
- Refactored CLI architecture to support branching templates (Language -> Type -> Feature).
- Updated internal `branding.ts` with enhanced TUI utilities and versioned banners.
- Renamed "The Forge" guide to "The Build Process".

## [1.0.0] - 2026-01-14

### Added
- **Initial Release:** The 7-Phase interactive CLI scaffolding engine.
- **Modular Souls:** Dynamic injection for Music, AI, and Moderation modules.
- **Smart Intents:** Automatic Gateway Intent calculation.
- **Sploov Logger:** Premium terminal logging for all forged projects.
- **Docker Support:** Automated generation of `Dockerfile` and `docker-compose.yml`.
- **Slash Commands:** Integrated auto-registration for discord.js v14 commands.
- **Validation:** Built-in environment variable verification (`config.ts`).

### Fixed
- ESM build resolution in VitePress documentation.
- Asset path rendering in monorepo root README.
- GitHub Actions workflow for automated docs deployment.

---
*Built with Velocity by Sploov Team*
