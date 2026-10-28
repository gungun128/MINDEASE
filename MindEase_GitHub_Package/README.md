# MindEase — source package (best-effort recovery)

This ZIP is a **partial recovery package**, not a verified complete export of the original Base44 project.

It contains source files whose complete contents were available in the conversation, plus a checklist describing files that still need to be recovered. Many page/component files were discussed earlier, but their full source code was not available to reconstruct verbatim here.

## Run locally
1. Install Node.js (LTS).
2. Run `npm install`.
3. Configure the Base44 environment variables in `.env` (see `.env.example`).
4. Run `npm run dev`.

**Important:** The original project depends on Base44 authentication, entities, and the `aiCompanion` backend function. A local build may require a valid Base44 app configuration and may not run fully without those services.

Do not commit real secrets or access tokens to GitHub.
