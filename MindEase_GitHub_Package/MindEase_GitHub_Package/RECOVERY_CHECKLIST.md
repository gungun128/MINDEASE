# Recovery checklist

This is not a complete inventory of the original Base44 project. The original tree included pages, layouts, many UI primitives, entity JSONC definitions, and the `base44/functions/aiCompanion/entry.ts` backend. Their full code was not all available in the current working context, so they are not silently replaced here.

Before submission or deployment:
- [ ] Restore original `src/pages/*` files
- [ ] Restore `src/components/*` and remaining `src/components/ui/*` files
- [ ] Restore original `src/lib/AuthContext.jsx`, `src/lib/constants.js`, `src/lib/assessment.js`, `src/lib/dates.js`, and `src/hooks/useTheme.js`
- [ ] Restore all `base44/entities/*.jsonc`
- [ ] Restore `base44/functions/aiCompanion/entry.ts`
- [ ] Restore original Tailwind configuration and any other project config
- [ ] Configure Base44 app environment and backend
- [ ] Run `npm install` and `npm run build`; fix any missing modules/files
